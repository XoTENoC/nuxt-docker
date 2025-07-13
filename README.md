# Nuxt Docker Starter

A Nuxt.js application with Docker support for both development and production environments.

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## 🐳 Docker Setup (Recommended)

This project includes Docker configurations for both development and production environments.

### Development with Docker

Start the development server with hot-reload using Docker:

```bash
# Start development environment (accessible at http://localhost:6969)
npm run docker:dev

# Or run in detached mode
npm run docker:dev:detached

# View logs
npm run docker:dev:logs

# Stop the development container
npm run docker:dev:stop

# Rebuild and restart
npm run docker:dev:rebuild
```

The development setup includes:
- Hot-reload enabled
- Volume mounting for live code changes
- Port mapping: `6969:3000` (access at http://localhost:6969)
- HMR port: `24678:24678`

### Production with Docker

Build and run the production version:

```bash
# Start production environment (accessible at http://localhost:3000)
npm run docker:prod

# Or run in detached mode
npm run docker:prod:detached

# View logs
npm run docker:prod:logs

# Stop the production container
npm run docker:prod:stop

# Rebuild and restart
npm run docker:prod:rebuild
```

### Docker Utilities

Clean up Docker resources:

```bash
# Remove unused containers, networks, and images
npm run docker:clean

# Remove all unused Docker resources including volumes
npm run docker:clean:all

# Remove all unused images
npm run docker:clean:images
```

## 🛠️ Local Development (without Docker)

If you prefer to run locally without Docker:

### Setup

Make sure to install dependencies:

```bash
npm install
```

### Development Server

Start the development server on `http://localhost:3000`:

```bash
npm run dev
```

### Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

## 📁 Project Structure

```
├── app.vue                    # Main application component
├── docker-compose.yml         # Production Docker Compose
├── docker-compose.dev.yml     # Development Docker Compose
├── Dockerfile                 # Production Docker image
├── Dockerfile.dev             # Development Docker image
├── nuxt.config.ts             # Nuxt configuration
├── package.json               # Dependencies and scripts
├── tsconfig.json              # TypeScript configuration
├── public/                    # Static assets
└── server/                    # Server-side code
```

## 🚀 Deployment

The production Docker image is optimized for deployment with:
- Multi-stage build for smaller image size
- Node.js 20.18.0 runtime
- Production-ready server configuration

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
