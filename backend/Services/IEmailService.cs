using Portfolio.Api.Models;

namespace Portfolio.Api.Services;

public interface IEmailService
{
    Task SendContactMessageAsync(ContactRequest request, CancellationToken cancellationToken = default);
}
