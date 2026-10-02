<div align="center">

# Astria

**A polished, provider-neutral multi-tenant SaaS starter for teams that want to ship, not scaffold.**

[![CI](https://github.com/darkooom/Astria/actions/workflows/ci.yml/badge.svg)](https://github.com/darkooom/Astria/actions/workflows/ci.yml)
[![Next.js](https://img.shields.io/badge/Next.js-16-000000?logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-7C5CFC.svg)](./LICENSE)

[**Live demo**](https://astria-six.vercel.app) · [**Use this template**](https://github.com/darkooom/Astria/generate) · [**Deploy to Vercel**](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fdarkooom%2FAstria&project-name=astria&repository-name=astria)

</div>

![Astria multi-tenant SaaS dashboard](./public/social-preview.png)

Astria gives you a production-shaped dashboard, tenant-aware data contracts, and swappable provider adapters without forcing a specific auth, database, or billing vendor. It runs with demo data immediately and grows into a real stack when you are ready.

## What you get

- A responsive multi-tenant app shell with persistent workspace context
- Dashboard, activity, members, roles, usage, API keys, webhooks, audit log, billing, and settings
- Demo data that works immediately — no account, database, or API keys required
- Swappable adapters for PostgreSQL/Prisma, Auth.js, Clerk, and Stripe
- Command menu, dialogs, tables, loading, empty, error, and partial states
- Light and dark themes backed by a documented design system
- TypeScript, ESLint, production builds, and pull-request checks in GitHub Actions

## Product tour

### A dashboard with hierarchy built in

The default workspace combines high-signal metrics, usage trends, operational health, and recent activity without turning into a wall of cards.

![Astria dashboard overview](./docs/screenshots/dashboard.png)

### Operational detail stays readable

Usage and health signals share one visual system, so teams can scan performance without leaving the workspace.

![Astria usage chart and workspace health](./docs/screenshots/usage-and-health.png)

## Quick start

```bash
git clone https://github.com/darkooom/Astria.git
cd Astria
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The default adapter set is `demo`, so the complete interface is available immediately.

## Demo and production modes

| Boundary | Demo default | Production path |
| --- | --- | --- |
| Data | In-memory fixtures | PostgreSQL through Prisma |
| Authentication | Built-in demo user | Auth.js or Clerk |
| Billing | Sample Pro subscription | Stripe Billing Portal |
| Tenancy | Sample Acme workspace | Membership-based, server-side authorization |
| Secrets | None required | Environment variables managed by your host |

## Adapter model

Product code talks to small provider-neutral contracts in `src/lib/adapters`. Select each implementation independently:

```env
ASTRIA_DATABASE_ADAPTER=demo # demo | prisma
ASTRIA_AUTH_ADAPTER=demo     # demo | authjs | clerk
ASTRIA_BILLING_ADAPTER=demo  # demo | stripe
```

That separation lets you replace a provider without rewriting the UI or tenancy model.

### PostgreSQL and Prisma

```env
ASTRIA_DATABASE_ADAPTER=prisma
DATABASE_URL="postgresql://user:password@host:5432/astria"
```

```bash
npx prisma generate
npx prisma db push
```

### Auth.js

```env
ASTRIA_AUTH_ADAPTER=authjs
AUTH_SECRET="your-random-secret"
AUTH_GITHUB_ID="your-github-oauth-client-id"
AUTH_GITHUB_SECRET="your-github-oauth-client-secret"
```

### Clerk

```env
ASTRIA_AUTH_ADAPTER=clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="pk_..."
CLERK_SECRET_KEY="sk_..."
```

### Stripe

```env
ASTRIA_BILLING_ADAPTER=stripe
STRIPE_SECRET_KEY="sk_..."
STRIPE_WEBHOOK_SECRET="whsec_..."
NEXT_PUBLIC_APP_URL="https://your-domain.com"
```

## Production checklist

- Configure PostgreSQL and apply the Prisma schema.
- Select Auth.js or Clerk and add the required provider configuration.
- Select Stripe, create a customer for each workspace, and verify webhook signatures.
- Enforce workspace membership and role authorization on every server-side operation.
- Add rate limiting, transactional email, observability, backups, and secret rotation.
- Replace demo content, metadata, screenshots, and branding before launch.

## Architecture

```text
src/
├── app/                 Next.js App Router pages
├── components/          Product and shadcn-style UI components
└── lib/
    ├── adapters/        Provider-neutral boundaries and examples
    └── demo-data.ts     Instant local demo content
```

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run build` | Create a production build |
| `npm run start` | Run the production server |
| `npm run typecheck` | Validate TypeScript without emitting files |
| `npm run lint` | Run ESLint across the project |

## Contributing and security

Contributions are welcome. Read [CONTRIBUTING.md](./CONTRIBUTING.md) before opening a pull request. Please report vulnerabilities privately through [GitHub Private Vulnerability Reporting](https://github.com/darkooom/Astria/security/advisories/new), not in a public issue.

## License

Astria is available under the [MIT License](./LICENSE) for personal and commercial projects.
