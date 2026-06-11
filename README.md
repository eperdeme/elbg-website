# East Leeds Board Gamers website

Static website for `elbg.co.uk`, designed to be hosted directly with GitHub Pages.

## Files

- `index.html` contains the page content and metadata.
- `styles.css` contains the responsive design.
- `script.js` handles the mobile navigation and footer year.
- `CNAME` tells GitHub Pages to serve the site at `elbg.co.uk`.
- `robots.txt` and `sitemap.xml` are included for basic search engine discovery.

## Publish on GitHub Pages

1. Push the repository to GitHub.
2. Open the repository on GitHub and go to **Settings** > **Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Set the branch to `main` and the folder to `/ (root)`.
5. Save the settings.
6. In **Custom domain**, enter `elbg.co.uk`.
7. After DNS has propagated, enable **Enforce HTTPS**.

## DNS for `elbg.co.uk`

At the domain provider, add these `A` records for the root domain:

```text
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

For `www.elbg.co.uk`, add this `CNAME` record:

```text
www -> eperdeme.github.io
```

GitHub may take a little while to verify the domain after DNS changes are made.

## Content notes

The Facebook group page is treated as the source of truth for events, venue details and RSVPs. If ELBG has a fixed venue or weekly schedule, update the copy in `index.html` to include it directly.