# East Leeds Board Gamers website

Static website for `elbg.co.uk`, designed to be hosted directly with GitHub Pages.

## Files

- `index.html` contains the page content and metadata.
- `styles.css` contains the responsive design.
- `script.js` handles the mobile navigation and footer year.
- `CNAME` tells GitHub Pages to serve the site at `elbg.co.uk`.
- `robots.txt` and `sitemap.xml` are included for basic search engine discovery.

## Publish on GitHub Pages

This repository deploys with the workflow in `.github/workflows/deploy-pages.yml`.

1. Push changes to `main`.
2. Open the repository on GitHub and go to **Actions** to watch the **Deploy GitHub Pages** workflow.
3. In **Settings** > **Pages**, keep the custom domain set to `elbg.co.uk`.
4. After DNS has propagated and GitHub provisions a certificate, enable **Enforce HTTPS**.

## DNS for `elbg.co.uk`

The domain currently uses Cloudflare nameservers. In Cloudflare DNS, add these `A` records for the root domain:

```text
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

For `www.elbg.co.uk`, add this `CNAME` record if you want the `www` address to redirect to the apex domain:

```text
www -> eperdeme.github.io
```

GitHub may take a little while to verify the domain after DNS changes are made.

## Content notes

The Facebook group page is treated as the source of truth for events, venue details and RSVPs. If ELBG has a fixed venue or weekly schedule, update the copy in `index.html` to include it directly.