# Deployment & Domain Setup

- **Live (Vercel URL):** https://aarkalliance.vercel.app
- **Target domain:** https://aarkalliance.com (bought on GoDaddy)
- **Source:** https://github.com/Prateek-Srivastava1001/aarkalliance
- **Vercel project:** `aarkalliance` (team: prateek-srivastava1001's projects)

---

## ✅ Connect aarkalliance.com — Nameserver method (chosen)

Because this domain is used **only** for this website, we let Vercel manage all its
DNS. You just change the nameservers at GoDaddy once.

### In GoDaddy

1. Log in to GoDaddy → **My Products**.
2. Find **aarkalliance.com** → **Domain** → open its settings.
3. Go to **Nameservers** → **Change Nameservers** → choose **"I'll use my own nameservers"** (Enter my own nameservers).
4. Replace the existing GoDaddy nameservers with **exactly these two**:

   ```
   ns1.vercel-dns.com
   ns2.vercel-dns.com
   ```

5. Save. (GoDaddy may ask you to confirm you understand you're leaving GoDaddy DNS — that's fine.)

### What happens next (automatic)

- Both domains are already added to the Vercel project (`aarkalliance.com` and `www.aarkalliance.com`).
- Once the nameservers propagate (usually 15 min – a few hours, up to 48h max), Vercel:
  - **verifies** the domain automatically (you'll get an email),
  - issues a free **SSL certificate** (https),
  - serves the site at **aarkalliance.com** and redirects **www → aarkalliance.com**.
- Check status any time: Vercel → project **aarkalliance** → **Settings → Domains**
  (or run `vercel domains inspect aarkalliance.com`).

> Current GoDaddy nameservers were `ns27.domaincontrol.com` / `ns28.domaincontrol.com`.
> After the change they should read the two `*.vercel-dns.com` values above.

---

## Alternative — A record / CNAME (only if you keep DNS at GoDaddy)

Not needed for the nameserver method above. Kept here for reference:

| Type    | Name | Value                  |
|---------|------|------------------------|
| `A`     | `@`  | `76.76.21.21`          |
| `CNAME` | `www`| `cname.vercel-dns.com` |

Always use the exact values shown in Vercel → Settings → Domains for your domain.

---

## 🔄 Auto-deploy on every push (one-time GitHub connect)

Right now the site deploys via the Vercel CLI. To make **every push to `main`
auto-deploy** (and get preview URLs for branches):

1. Vercel → project **aarkalliance** → **Settings → Git**.
2. Click **Connect Git Repository** → **GitHub** → install/authorize the **Vercel GitHub app**
   and grant it access to the **`aarkalliance`** repo.
3. Select `Prateek-Srivastava1001/aarkalliance`. Done — pushes now deploy automatically.

Until then, deploy manually from this folder with:

```bash
vercel --prod        # deploy current code to production
```

---

## Updating the site later

1. Edit the JSON in `src/content/` (see `README.md`) and/or images in `public/images/`.
2. `git add -A && git commit -m "update content" && git push`
3. If GitHub is connected → it deploys automatically. Otherwise run `vercel --prod`.
