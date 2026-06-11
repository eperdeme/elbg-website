# East Leeds Board Gamers website

Static website for `elbg.co.uk`, designed to be hosted directly with GitHub Pages. The canonical Pages host is `www.elbg.co.uk`, with the apex domain able to redirect there once DNS is configured.

## Files

- `index.html` contains the page content and metadata.
- `styles.css` contains the responsive design.
- `script.js` handles the mobile navigation and footer year.
- `analytics.js` loads Google Analytics 4 when a Measurement ID is configured.
- `CNAME` tells GitHub Pages to serve the site at `www.elbg.co.uk`.
- `robots.txt` and `sitemap.xml` are included for basic search engine discovery.

## Publish on GitHub Pages

This repository deploys with the workflow in `.github/workflows/deploy-pages.yml`.

1. Push changes to `main`.
2. Open the repository on GitHub and go to **Actions** to watch the **Deploy GitHub Pages** workflow.
3. In **Settings** > **Pages**, keep the custom domain set to `www.elbg.co.uk`.
4. After DNS has propagated and GitHub provisions a certificate, enable **Enforce HTTPS**.

## DNS for `elbg.co.uk`

The domain currently uses Cloudflare nameservers. In Cloudflare DNS, add this `CNAME` record for the canonical site address:

```text
www -> eperdeme.github.io
```

To make `elbg.co.uk` redirect to `www.elbg.co.uk`, add these `A` records for the root domain:

```text
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

Set these Cloudflare records to **DNS only** at first. GitHub may take a little while to verify the domain and issue the HTTPS certificate after DNS changes are made.

## Google Analytics

The site is wired for Google Analytics 4, but tracking stays disabled until a real Measurement ID is added.

1. Create a GA4 property and web data stream for `https://www.elbg.co.uk/`.
2. Copy the Measurement ID. It should look like `G-XXXXXXXXXX`.
3. Add that ID to the `data-ga-measurement-id` attribute on the `analytics.js` script tag in both `index.html` and `404.html`.
4. Push to `main` and confirm the Pages deployment succeeds.

The loader sends page views and named events for key actions such as joining the Facebook group, opening directions and returning home from the 404 page. It uses Google Consent Mode with analytics and ad storage denied by default, so it does not set Analytics cookies unless a consent flow is added later.

## Content notes

The group meets every Tuesday from 7pm to 11pm upstairs at The Brown Cow, Selby Road, Whitkirk, Leeds LS15 7AY. Facebook remains the source of truth for last-minute updates, special events and RSVPs.

The current imagery uses local table-focused photos saved under `assets/photos/` from ELBG Facebook media. If different member photos are preferred, replace those files and keep the same filenames.
