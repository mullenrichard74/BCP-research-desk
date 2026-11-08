# BCP Research Desk source export

The application files in this archive are from published commit
`064a7130f64685b030f4da5a4adef9c204a7ad70`. This guide was added to the export.
The archive includes the dependency lockfile and the database schema migration.
Live workspace records and hosting credentials are separate from source code.

## Hosting with a Porkbun domain

The Research Desk uses a Cloudflare Worker with a D1 database for the
`/api/workspace` read and write routes. Its private sign-in is enforced by
ChatGPT Sites hosting. Uploading the ZIP to Porkbun Static Hosting will not run
that server code or provide persistent workspace storage.

- To use your Porkbun-registered domain with the current architecture, deploy
  to a Worker-compatible host. Provision a D1 database, configure its binding
  as `DB`, and apply the SQL migration in `drizzle/`. Configure private access
  for both the page and its API before adding research records. When the
  deployment is ready, follow the host's custom-domain instructions.
- To run the complete desk on Porkbun's PHP hosting, port the workspace
  API and storage to PHP and MySQL, configure private access, and build a
  compatible frontend. This ZIP contains the original application source.

For local development, see README.md, including Local D1 migrations.
The .openai/hosting.json file documents the original Sites binding and project
identity. For an independent deployment, use the new host's configuration.

If you already saved research records, sign in to the current desk and use
the download icon to export them as JSON. The new deployment will need a
separate data migration. The source archive alone will not carry those edits.

References:
- https://porkbun.com/products/webhosting/staticHosting
- https://porkbun.com/products/webhosting/managedPHP
- https://kb.porkbun.com/article/231-how-to-add-dns-records-on-porkbun
