namespace Portfolio.Api.Services;

public class EmailOptions
{
    public string ResendApiKey { get; set; } = string.Empty;
    public string FromAddress { get; set; } = "onboarding@resend.dev";
    public string ToAddress { get; set; } = string.Empty;
}
