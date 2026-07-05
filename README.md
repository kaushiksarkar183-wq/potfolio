# Kaushik Sarkar Portfolio

A simple static portfolio website built with HTML, CSS, and JavaScript.

## Files

- `index.html` - main page markup
- `style.css` - visual styling
- `script.js` - interactive behavior and slideshow
- `images/` - portfolio and travel assets
- `.github/workflows/deploy-pages.yml` - GitHub Pages deployment workflow

## Local Preview

Open `index.html` in a browser, or use a local server such as:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deployment

This project is configured to deploy to GitHub Pages using Actions.

1. Push the repo to GitHub on the `main` or `master` branch.
2. Verify `.github/workflows/deploy-pages.yml` exists.
3. GitHub Actions will automatically deploy the site.
4. In repository settings, enable GitHub Pages if needed.

### Workflow details

The workflow:

- checks out the repository
- uploads the site as a Pages artifact
- deploys it with `actions/deploy-pages@v5`

## Notes

- The site is static and does not require a build step.
- If you need to change the GitHub Pages branch, update the repository settings.
- Use `main` or `master` as the deployment branch.
