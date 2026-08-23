# SwiftPark — Product Owner assignment prototype

Clickable prototype for the two backlog items prioritised before the city-wide expansion:

- **#2 Automated no-show release** — driver flow, 3 states
- **#3 Warden app stability + offline mode** — warden flow, 3 states

Built with React + Vite. No backend, no persistence — all state is local.

## Run it locally

```bash
npm install
npm run dev
```

## Deploy to GitHub Pages

1. Push this folder to a new public repo.
2. Repo → **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Push to `main`. The workflow in `.github/workflows/deploy.yml` builds and publishes it.
4. Live at `https://<username>.github.io/<repo-name>/`

`vite.config.js` uses `base: './'`, so the repo can be called anything.
