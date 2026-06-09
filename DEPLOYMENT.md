Render deployment steps


1. Push this repository to GitHub (or connect your Git remote to Render).

2. In Render, create a new service:
	- Service Type: Web Service
	- Environment: Docker
	- Name: safari-vision-quest
	- Branch: `main` (or your deploy branch)
	- Auto-Deploy: ON (optional)
	- Dockerfile Path: `Dockerfile` (root)
	- Instance Type: `starter` (or pick a plan that fits traffic)
	- Instance Count: 1

3. Build & Run behavior
	- The Dockerfile runs `npm install` and `npm run build`, producing Nitro/Vite output in `.output/`.
	- The container starts with `node .output/server/index.mjs` (the `start` script in `package.json`).

4. Environment variables and secrets
	- Add any secrets required by your app in Render's Environment → Environment Variables section.
	- Recommended keys (placeholders provided in `.env.example`):
	  - `NODE_ENV` = `production`
	  - `PORT` = `3000` (Render will set and forward a port automatically; keep default)
	  - `EXAMPLE_API_KEY` = your secret value
	  - Any DB URLs or third-party API keys (e.g. `DATABASE_URL`, `VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`)

5. Health checks & readiness
	- Health Check Path: `/` (or an endpoint that returns 200)
	- Health Check Interval: 10s (adjust as needed)

6. Domain & TLS
	- Add a custom domain in Render if needed and enable TLS (Render issues certs automatically).

7. Optional tweaks
	- Enable Automatic Deploys for branch pushes.
	- Configure rolling restarts or multiple instances for higher availability.

8. Final checklist before clicking Deploy
	- Confirm branch is correct.
	- Add all required environment variables/secrets in Render dashboard.
	- Confirm `Dockerfile` exists and `render.yaml` (optional) is up-to-date.
	- Optionally test the Docker image locally with the Docker commands below.

Local test commands
```bash
npm install
npm run build
npm start

# Or build/run the Docker image locally
docker build -t safari-vision-quest .
docker run -p 3000:3000 -e PORT=3000 safari-vision-quest
```

If you want, I can: prepare a minimal Render settings screenshot checklist, pre-fill `render.yaml` with more env var placeholders, or connect the repo and finalize settings for you.
