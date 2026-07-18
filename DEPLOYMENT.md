# Deployment & Domain Setup

This site is a **Next.js** app hosted on **Vercel**, with source on GitHub:
`https://github.com/Prateek-Srivastava1001/aarkalliance`

---

## How deployments work

Once the Vercel project is linked to the GitHub repo:

- **Push to `main`** → Vercel automatically builds and deploys to **production**.
- **Open a pull request / push another branch** → Vercel creates a **preview URL**
  so you can review changes before they go live.

So to update the live site later, you (or anyone) just edit the JSON in
`src/content/`, commit, and push. Nothing else to do.

---

## Pointing **aarkalliance.com** (GoDaddy) at Vercel

You bought the domain on GoDaddy, so we keep it there and just repoint DNS.

### Step 1 — Add the domain in Vercel

1. Go to the Vercel project → **Settings → Domains**.
2. Add **`aarkalliance.com`** and **`www.aarkalliance.com`**.
3. Vercel will then show you the **exact DNS records** to create. Use those exact
   values — the ones below are Vercel's usual defaults, but always trust what the
   dashboard shows for your domain.

### Step 2 — Choose ONE of these two methods in GoDaddy

#### ✅ Method A — Edit DNS records (recommended: keeps your GoDaddy email/other records)

In GoDaddy: **My Products → Domain → DNS / Manage DNS**, then set:

| Type  | Name (Host) | Value                     | TTL     |
|-------|-------------|---------------------------|---------|
| `A`   | `@`         | `76.76.21.21`             | 1 Hour  |
| `CNAME` | `www`     | `cname.vercel-dns.com`    | 1 Hour  |

- Edit the **existing** `A` record for `@` (GoDaddy usually has a parked one) to the
  value Vercel shows, instead of adding a duplicate.
- If GoDaddy has a `CNAME` for `www` pointing elsewhere, change it to Vercel's value.
- Remove GoDaddy's default "parked page" / forwarding if present.

#### Method B — Point nameservers to Vercel (Vercel manages all DNS)

In GoDaddy: **Domain → Nameservers → Change → Enter my own nameservers**, and set:

```
ns1.vercel-dns.com
ns2.vercel-dns.com
```

This hands full DNS control to Vercel. Simpler for the website, but if you use
GoDaddy email or other DNS records on this domain, prefer **Method A**.

### Step 3 — Wait & verify

- DNS changes take anywhere from a few minutes to a couple of hours to propagate.
- Vercel automatically issues a free **SSL certificate** (https) once DNS resolves.
- In Vercel → Domains, the domain shows **Valid Configuration** when ready.
- Vercel will also auto-redirect `www` → `aarkalliance.com` (or vice-versa) — you can
  pick the primary one in the Domains screen.

---

## Handy Vercel CLI commands

```bash
vercel                      # deploy a preview
vercel --prod               # deploy to production
vercel domains inspect aarkalliance.com   # show the exact DNS records needed
vercel domains add aarkalliance.com       # attach the domain to the project
vercel git connect          # link the GitHub repo for auto-deploys
```
