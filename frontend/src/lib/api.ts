import { fallbackPortfolioData } from "./fallbackData";
import { ContactPayload, PortfolioResponse } from "./types";

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:5063";

export async function getPortfolioData(): Promise<PortfolioResponse> {
  try {
    const res = await fetch(`${API_URL}/api/projects`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) throw new Error(`API responded with ${res.status}`);
    return (await res.json()) as PortfolioResponse;
  } catch {
    return fallbackPortfolioData;
  }
}

export async function sendContactMessage(
  payload: ContactPayload
): Promise<{ ok: boolean; message: string }> {
  try {
    const res = await fetch(`${API_URL}/api/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
      return {
        ok: false,
        message: data?.message ?? "Something went wrong. Please try again.",
      };
    }
    return { ok: true, message: data?.message ?? "Message sent!" };
  } catch {
    return {
      ok: false,
      message: "Could not reach the server. Please try again later.",
    };
  }
}
