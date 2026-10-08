<p align="center">
  <img src="docs/readme/hero.webp" alt="Astria: the multi-tenant SaaS starter that already looks finished" width="100%">
</p>

<p align="center">
  <a href="https://github.com/darkooom/Astria/actions/workflows/ci.yml"><img alt="CI" src="https://github.com/darkooom/Astria/actions/workflows/ci.yml/badge.svg"></a>
  <a href="https://nextjs.org/"><img alt="Next.js 16" src="https://img.shields.io/badge/Next.js-16-000000?logo=nextdotjs&logoColor=white"></a>
  <a href="https://react.dev/"><img alt="React 19" src="https://img.shields.io/badge/React-19-149ECA?logo=react&logoColor=white"></a>
  <a href="https://www.typescriptlang.org/"><img alt="TypeScript 6" src="https://img.shields.io/badge/TypeScript-6-3178C6?logo=typescript&logoColor=white"></a>
  <a href="https://tailwindcss.com/"><img alt="Tailwind CSS 4" src="https://img.shields.io/badge/Tailwind-4-06B6D4?logo=tailwindcss&logoColor=white"></a>
  <a href="./LICENSE"><img alt="MIT License" src="https://img.shields.io/badge/License-MIT-6D4AFF.svg"></a>
</p>

<p align="center">
  <a href="https://astria-six.vercel.app"><b>Live demo</b></a>
  &nbsp;·&nbsp;
  <a href="https://github.com/darkooom/Astria/generate"><b>Use this template</b></a>
  &nbsp;·&nbsp;
  <a href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fdarkooom%2FAstria&project-name=astria&repository-name=astria"><b>Deploy to Vercel</b></a>
</p>

<br>

Every SaaS needs the same screens before it can do the one thing it is for.
Workspaces. Members and invitations. Roles. Usage. API keys. An audit log.
Billing. Settings. Dark mode. A command menu. Empty, loading and error states.

**Astria is those screens, already designed**, already talking to tenant-aware
data contracts, and running on demo data the moment you start it. No database,
no auth provider, no Stripe account. Swap in real providers when you are
ready; the UI does not change.

<p align="center">
  <img src="docs/readme/tour.webp" alt="A tour through Astria: dashboard, command menu, members, invitations, roles, usage, audit log, billing and settings" width="100%">
</p>

## Quick start

```bash
git clone https://github.com/darkooom/Astria.git
cd Astria
npm install
cp .env.example .env.local
npm run dev
```

Open <http://localhost:3000>. Every adapter defaults to `demo`, so the whole
product works immediately: no accounts, no keys, no seed scripts.

## What's inside

<table>
  <tr>
    <td width="50%" valign="top">
      <b>Tenant-first app shell</b><br>
      Workspace switcher, persistent tenant context, grouped navigation and a <kbd>⌘</kbd><kbd>K</kbd> command menu.
    </td>
    <td width="50%" valign="top">
      <b>The screens every SaaS needs</b><br>
      Dashboard, members, roles &amp; permissions, usage, audit log, billing and settings with API keys.
    </td>
  </tr>
  <tr>
    <td valign="top">
      <b>Provider-neutral adapters</b><br>
      Database, auth and billing behind small contracts. Demo, Prisma, Auth.js, Clerk and Stripe implementations included.
    </td>
    <td valign="top">
      <b>Every state, not just the happy path</b><br>
      Empty states with recovery actions, loading skeletons, an error boundary, invited and suspended members.
    </td>
  </tr>
  <tr>
    <td valign="top">
      <b>A real design system</b><br>
      Light and dark themes from one set of tokens, Geist typography and checked contrast, all written down in <a href="./DESIGN.md">DESIGN.md</a>.
    </td>
    <td valign="top">
      <b>Ready to ship</b><br>
      TypeScript, ESLint, production builds, a <code>/api/health</code> endpoint and GitHub Actions on every pull request.
    </td>
  </tr>
</table>

## Product tour

### Dashboard

KPIs first, operational detail second, history last. One primary action per page.

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="docs/readme/dashboard-dark.webp">
  <img src="docs/readme/dashboard-light.webp" alt="Astria dashboard with revenue, active users, API usage, incidents, a usage chart and workspace health" width="100%">
</picture>

<table>
  <tr>
    <td width="50%" valign="top">
      <picture>
        <source media="(prefers-color-scheme: dark)" srcset="docs/readme/members-dark.webp">
        <img src="docs/readme/members-light.webp" alt="Members table with roles, statuses and search" width="100%">
      </picture>
      <p align="center"><b>Members</b><br><sub>Search, role filter, active, invited and suspended states</sub></p>
    </td>
    <td width="50%" valign="top">
      <picture>
        <source media="(prefers-color-scheme: dark)" srcset="docs/readme/invite-dark.webp">
        <img src="docs/readme/invite-light.webp" alt="Invite dialog with email and role" width="100%">
      </picture>
      <p align="center"><b>Invitations</b><br><sub>Email plus role, with the role's meaning spelled out</sub></p>
    </td>
  </tr>
  <tr>
    <td valign="top">
      <picture>
        <source media="(prefers-color-scheme: dark)" srcset="docs/readme/roles-dark.webp">
        <img src="docs/readme/roles-light.webp" alt="Roles and permissions overview" width="100%">
      </picture>
      <p align="center"><b>Roles &amp; permissions</b><br><sub>Owner, admin, developer, billing and viewer at a glance</sub></p>
    </td>
    <td valign="top">
      <picture>
        <source media="(prefers-color-scheme: dark)" srcset="docs/readme/usage-dark.webp">
        <img src="docs/readme/usage-light.webp" alt="Usage page with quotas and request volume" width="100%">
      </picture>
      <p align="center"><b>Usage</b><br><sub>Quotas for requests, users, storage and compute</sub></p>
    </td>
  </tr>
  <tr>
    <td valign="top">
      <picture>
        <source media="(prefers-color-scheme: dark)" srcset="docs/readme/audit-log-dark.webp">
        <img src="docs/readme/audit-log-light.webp" alt="Audit log of security-relevant events" width="100%">
      </picture>
      <p align="center"><b>Audit log</b><br><sub>Who did what, to which target, from where</sub></p>
    </td>
    <td valign="top">
      <picture>
        <source media="(prefers-color-scheme: dark)" srcset="docs/readme/billing-dark.webp">
        <img src="docs/readme/billing-light.webp" alt="Billing page with plan, payment method and invoices" width="100%">
      </picture>
      <p align="center"><b>Billing</b><br><sub>Plan, payment method and invoices, Stripe-ready</sub></p>
    </td>
  </tr>
  <tr>
    <td valign="top">
      <picture>
        <source media="(prefers-color-scheme: dark)" srcset="docs/readme/settings-dark.webp">
        <img src="docs/readme/settings-light.webp" alt="Settings with workspace profile, API keys, tenant identity and danger zone" width="100%">
      </picture>
      <p align="center"><b>Settings &amp; API keys</b><br><sub>Workspace profile, API keys, tenant identity, danger zone</sub></p>
    </td>
    <td valign="top">
      <picture>
        <source media="(prefers-color-scheme: dark)" srcset="docs/readme/command-menu-dark.webp">
        <img src="docs/readme/command-menu-light.webp" alt="Command menu opened with Cmd+K" width="100%">
      </picture>
      <p align="center"><b>Command menu</b><br><sub><kbd>⌘</kbd><kbd>K</kbd> to jump anywhere</sub></p>
    </td>
  </tr>
</table>

### Designed for the unhappy path too

Empty results explain themselves and offer a way out. Loading uses skeletons
that match the final layout. Errors get a boundary with a retry.

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="docs/readme/empty-dark.webp">
  <img src="docs/readme/empty-light.webp" alt="Members empty state: no members match the search, with a clear search action" width="100%">
</picture>

### Light and dark, both first-class

Both themes come from the same tokens: warm paper and warm graphite instead of
default blue-grey, with one signature violet reserved for primary actions.
The images in this README follow your GitHub theme. Switch it to see the other one.

<p align="center">
  <img src="docs/readme/light-and-dark.webp" alt="The same dashboard split diagonally between light and dark theme" width="100%">
</p>

### Responsive down to the phone

<p align="center">
  <img src="docs/readme/mobile.webp" alt="Astria on three phones: members and dashboard in dark mode, dashboard in light mode" width="100%">
</p>

## Demo first, production when you're ready

| Boundary | Demo default | Production path |
| --- | --- | --- |
| Data | In-memory fixtures | PostgreSQL through Prisma |
| Authentication | Built-in demo user | Auth.js or Clerk |
| Billing | Sample Pro subscription | Stripe Billing Portal |
| Tenancy | Sample Acme workspace | Membership-based, server-side authorization |
| Secrets | None required | Environment variables managed by your host |

## Adapter model

Product code never imports a vendor SDK. It talks to small contracts in
`src/lib/adapters`, and each boundary picks its implementation independently.

```mermaid
flowchart LR
    UI["Pages and components<br/><code>src/app</code> · <code>src/components</code>"] --> C["Adapter contracts<br/><code>src/lib/adapters</code>"]
    C --> DB["Database"]
    C --> AU["Auth"]
    C --> BI["Billing"]
    DB --> DB1["demo · in-memory"]
    DB --> DB2["prisma · PostgreSQL"]
    AU --> AU1["demo user"]
    AU --> AU2["authjs"]
    AU --> AU3["clerk"]
    BI --> BI1["demo subscription"]
    BI --> BI2["stripe"]
```

```env
ASTRIA_DATABASE_ADAPTER=demo   # demo | prisma
ASTRIA_AUTH_ADAPTER=demo       # demo | authjs | clerk
ASTRIA_BILLING_ADAPTER=demo    # demo | stripe
```

Replacing a provider means writing one adapter, not rewriting the UI or the
tenancy model.

<details>
<summary><b>PostgreSQL + Prisma</b></summary>

```env
ASTRIA_DATABASE_ADAPTER=prisma
DATABASE_URL="postgresql://user:password@host:5432/astria"
```

```bash
npx prisma generate
npx prisma db push
```

</details>

<details>
<summary><b>Auth.js</b></summary>

```env
ASTRIA_AUTH_ADAPTER=authjs
AUTH_SECRET="your-random-secret"
AUTH_GITHUB_ID="your-github-oauth-client-id"
AUTH_GITHUB_SECRET="your-github-oauth-client-secret"
```

</details>

<details>
<summary><b>Clerk</b></summary>

```env
ASTRIA_AUTH_ADAPTER=clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="pk_..."
CLERK_SECRET_KEY="sk_..."
```

</details>

<details>
<summary><b>Stripe</b></summary>

```env
ASTRIA_BILLING_ADAPTER=stripe
STRIPE_SECRET_KEY="sk_..."
STRIPE_WEBHOOK_SECRET="whsec_..."
NEXT_PUBLIC_APP_URL="https://your-domain.com"
```

</details>

## Going to production

- [ ] Configure PostgreSQL and apply the Prisma schema
- [ ] Choose Auth.js or Clerk and add the provider configuration
- [ ] Choose Stripe, create a customer per workspace, verify webhook signatures
- [ ] Enforce workspace membership and role checks on every server-side operation
- [ ] Add rate limiting, transactional email, observability, backups and secret rotation
- [ ] Replace the demo content, metadata, screenshots and branding

## Project structure

```text
src/
├── app/                 Next.js App Router pages, loading and error boundaries
│   └── api/health/      Health check for uptime monitors
├── components/          Product components and shadcn-style UI primitives
└── lib/
    ├── adapters/        Database, auth and billing contracts and implementations
    └── demo-data.ts     Demo workspace, members, usage and invoices
```

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run start` | Serve the production build |
| `npm run typecheck` | Type-check without emitting files |
| `npm run lint` | Run ESLint |

## Contributing and security

Contributions are welcome. Read [CONTRIBUTING.md](./CONTRIBUTING.md) before
opening a pull request. Please report vulnerabilities privately through
[GitHub Private Vulnerability Reporting](https://github.com/darkooom/Astria/security/advisories/new),
not in a public issue.

## License

[MIT](./LICENSE). Use it for personal and commercial projects.
