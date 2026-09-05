using System.Net;
using System.Net.Mail;
using Microsoft.Extensions.Options;
using Portfolio.Api.Models;

namespace Portfolio.Api.Services;

public class SmtpEmailService(IOptions<EmailOptions> options, ILogger<SmtpEmailService> logger) : IEmailService
{
    private readonly EmailOptions _options = options.Value;

    public async Task SendContactMessageAsync(ContactRequest request, CancellationToken cancellationToken = default)
    {
        using var client = new SmtpClient(_options.SmtpHost, _options.SmtpPort)
        {
            EnableSsl = true,
            Credentials = new NetworkCredential(_options.SmtpUser, _options.SmtpPassword)
        };

        using var message = new MailMessage
        {
            From = new MailAddress(_options.SmtpUser, "Portfolio Contact Form"),
            Subject = $"New portfolio message from {request.Name}",
            Body = $"From: {request.Name} <{request.Email}>\n\n{request.Message}",
            IsBodyHtml = false
        };
        message.To.Add(_options.ToAddress);
        message.ReplyToList.Add(new MailAddress(request.Email, request.Name));

        try
        {
            await client.SendMailAsync(message, cancellationToken);
        }
        catch (Exception ex)
        {
            logger.LogError(ex, "Failed to send contact form email");
            throw;
        }
    }
}
