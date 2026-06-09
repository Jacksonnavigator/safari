# Eagle Vision Safaris — Deployment Guide

This project is built with **TanStack Start** and configured for production hosting on **Render.com**.

## Local Development

```bash
npm install
npm run dev
```

## Deployment to Render

1. **Connect your Repository**: Go to the [Render Dashboard](https://dashboard.render.com) and create a **New Blueprint**.
2. **Select this Repo**: Connect your GitHub/GitLab repository.
3. **Approve Blueprint**: Render will detect the `render.yaml` file and automatically configure:
   - **Environment**: Node.js
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm run start`
4. **Deploy**: Click **Apply** to start the deployment.

### Architecture Notes

- **SSR**: The app uses Server-Side Rendering via TanStack Start.
- **Server**: A custom `server.mjs` bridges the TanStack Start handler to a Node.js HTTP server.
- **Port**: Render automatically provides a `PORT` environment variable, which our server listens to.

### Environment Variables

If you need to add environment variables (e.g., API keys), add them in the Render Dashboard under **Service Settings > Environment**.
