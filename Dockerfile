FROM node:20-bullseye-slim

WORKDIR /app

# Copy lockfiles first for better caching
COPY package.json ./
COPY bun.lock ./

# Install dependencies (including dev deps needed for the build)
RUN if [ -f package-lock.json ]; then npm ci; else npm install; fi

# Copy the rest of the source
COPY . .

# Build the app (produces .output via Nitro/Vite)
RUN npm run build

# Remove devDependencies to slim the final image
RUN npm prune --production

ENV NODE_ENV=production
ENV PORT=3000


EXPOSE 3000

CMD ["node", "server-entry.mjs"]
