# Shattajit Ghosh — Portfolio

A personal portfolio site built as two deployable pieces:

- **`frontend/`** — Next.js (App Router, TypeScript, Tailwind CSS v4). Renders the site.
- **`backend/`** — ASP.NET Core Web API (.NET 10). Serves `/api/projects` (experience/projects/achievements data) and `/api/contact` (contact form → email).

## Running locally

### 1. Backend

```bash
cd backend
dotnet user-secrets set "Email:SmtpHost" "smtp.gmail.com"
dotnet user-secrets set "Email:SmtpPort" "587"
dotnet user-secrets set "Email:SmtpUser" "your-gmail@gmail.com"
dotnet user-secrets set "Email:SmtpPassword" "your-gmail-app-password"
dotnet run --launch-profile http
```

Runs on `http://localhost:5063`. Generate a Gmail App Password at
https://myaccount.google.com/apppasswords (requires 2-Step Verification enabled
on the Google account) — never use your real Gmail password here.

### 2. Frontend

```bash
cd frontend
cp .env.local.example .env.local   # already done; edit NEXT_PUBLIC_API_URL if needed
npm install
npm run dev
```

Runs on `http://localhost:3000`. If the backend isn't running, the Experience/Projects
sections fall back to static data baked into `src/lib/fallbackData.ts` so the site
never looks broken — you just won't see live-API data.

## Editing content

- Resume-derived data (experience, personal projects, achievements) lives in
  **`backend/Data/PortfolioDataProvider.cs`** — edit that C# file and restart the backend.
  Keep `frontend/src/lib/fallbackData.ts` in sync if you want the fallback to match.
- Everything else (bio text, skills list, education) is in the corresponding component
  under `frontend/src/components/`.

## Deployment

- **Frontend → [Vercel](https://vercel.com):** connect the GitHub repo, set root directory
  to `frontend`, add env var `NEXT_PUBLIC_API_URL` = your deployed backend URL.
- **Backend → [Render](https://render.com)**: Render has no native .NET runtime, so this
  deploys via the `backend/Dockerfile` (multi-stage build, .NET 10 SDK/ASP.NET runtime images).
  When creating the Web Service, set root directory to `backend` and Environment to **Docker** —
  Render should auto-detect the Dockerfile. Add env vars:
  - `Email__SmtpHost`, `Email__SmtpPort`, `Email__SmtpUser`, `Email__SmtpPassword`
  - `FrontendOrigin` = your deployed Vercel URL (for CORS)

Note: Render's free tier spins down after ~15 min idle; the first request after
that takes 30-50s to wake up. The frontend's fallback data means visitors won't see
a broken page during that window, just slightly stale content until the API responds.
