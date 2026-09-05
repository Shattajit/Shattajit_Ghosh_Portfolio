using System.Net.Http.Headers;
using System.Net.Http.Json;
using Microsoft.Extensions.Options;
using Portfolio.Api.Models;

namespace Portfolio.Api.Services;

public class ResendEmailService(
    HttpClient httpClient,
    IOptions<EmailOptions> options,
    ILogger<ResendEmailService> logger) : IEmailService
{
    private readonly EmailOptions _options = options.Value;

    public async Task SendContactMessageAsync(ContactRequest request, CancellationToken cancellationToken = default)
    {
        httpClient.BaseAddress ??= new Uri("https://api.resend.com/");
        httpClient.DefaultRequestHeaders.Authorization =
            new AuthenticationHeaderValue("Bearer", _options.ResendApiKey);

        var payload = new
        {
            from = $"Portfolio Contact Form <{_options.FromAddress}>",
            to = new[] { _options.ToAddress },
            reply_to = new[] { request.Email },
            subject = $"New portfolio message from {request.Name}",
            text = $"From: {request.Name} <{request.Email}>\n\n{request.Message}"
        };

        try
        {
            var response = await httpClient.PostAsJsonAsync("emails", payload, cancellationToken);
            if (!response.IsSuccessStatusCode)
            {
                var body = await response.Content.ReadAsStringAsync(cancellationToken);
                logger.LogError("Resend API returned {StatusCode}: {Body}", response.StatusCode, body);
                throw new InvalidOperationException($"Resend API returned {response.StatusCode}");
            }
        }
        catch (Exception ex) when (ex is not InvalidOperationException)
        {
            logger.LogError(ex, "Failed to send contact form email via Resend");
            throw;
        }
    }
}
