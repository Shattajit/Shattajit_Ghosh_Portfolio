using Microsoft.AspNetCore.Mvc;
using Portfolio.Api.Models;
using Portfolio.Api.Services;

namespace Portfolio.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ContactController(IEmailService emailService, ILogger<ContactController> logger) : ControllerBase
{
    [HttpPost]
    public async Task<IActionResult> Post([FromBody] ContactRequest request, CancellationToken cancellationToken)
    {
        if (!ModelState.IsValid)
        {
            return ValidationProblem(ModelState);
        }

        try
        {
            await emailService.SendContactMessageAsync(request, cancellationToken);
            return Ok(new { message = "Message sent successfully." });
        }
        catch (Exception ex)
        {
            logger.LogError(ex, "Contact form submission failed");
            return StatusCode(502, new { message = "Failed to send message. Please try again later." });
        }
    }
}
