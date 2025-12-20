# Aman Kushwaha — Developer Portfolio

This repository contains the personal developer portfolio website of **Aman Kushwaha**.  
It showcases my projects, skills, education, and contact information, built using modern web technologies.

## Tech Stack

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS

## Local Development

Clone the repository:

```bash
git clone https://github.com/amankushwahacodes/portfolio.git
cd portfolio

```

Install dependencies (using pnpm recommended):

```bash
pnpm install
pnpm dev
```

Open http://localhost:3000 in your browser.

## Contact / Email (Resend)
This portfolio uses Resend to handle contact form submissions from the Next.js server.

To enable email sending locally or in production, configure the following environment variables before starting the dev server or deploying:

- RESEND_API_KEY — your Resend API key (starts with re_...)

- RESEND_FORM_EMAIL — sender email address
(use onboarding@resend.dev if you don’t have a domain)

- RESEND_TO (optional) — recipient email address
Defaults to the Resend account email if not provided
Example (macOS / zsh):

```bash
export RESEND_API_KEY="re_your_key_here"
export RESEND_FORM_EMAIL="onboarding@resend.dev"
export RESEND_TO="amankushwaha7284@gmail.com"
pnpm dev
```

When the contact form is submitted in the app, the server action at `src/lib/email.ts` will call Resend and forward the message using the configured recipients. Check the server logs for success/failure messages.

## Project structure

- `src/app` — Next.js app routes and layouts
- `src/components` — React components
- `src/data` — Site data (projects, skills, certificates)
- `public` — Static assets (images, icons)
- `docs` — auxiliary documentation

## Notes

- To change the displayed site name, edit `src/config/site.ts` and `src/config/site.config.ts`.
- If you deploy to a custom domain, update the siteUrl in `src/config/site.config.ts`.

## License

This project is provided as-is and is intended for personal portfolio and learning purposes.

