# Security policy

## Supported versions

| Version | Supported |
| --- | --- |
| Latest release | Yes |
| Older releases | No |

## Reporting a vulnerability

Please do not disclose security vulnerabilities in public issues, discussions, or pull requests.

Use GitHub's private reporting form instead:

**[Report a vulnerability privately](https://github.com/darkooom/Astria/security/advisories/new)**

Include reproduction steps, the affected area or version, the potential impact, and a proof of concept when available. You can expect an acknowledgement within 72 hours. We will keep you informed while the report is validated and coordinate disclosure and credit with you before publishing a fix.

## Production responsibility

The demo adapters are intended for local evaluation. Before deploying Astria with real users or data, configure a production auth provider, enforce workspace authorization on the server, protect secrets, verify Stripe webhook signatures, add rate limiting, and establish logging, backups, and incident response.
