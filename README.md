# Music Fun (FSD Pet-Project)

A web application for playlist and track management, featuring interactive elements and built to master **Feature-Sliced
Design (FSD)** methodology alongside a modern React ecosystem.

## 🛠 Tech Stack

* **Core:** React 18, TypeScript, Vite
* **Package Manager:** `pnpm`
* **Architecture:** Feature-Sliced Design (FSD)
* **State & Data Fetching:** TanStack Query (React Query)
* **Routing:** TanStack Router
* **API Integration:** `openapi-fetch` (featuring custom automatic JWT refresh via middleware)
* **Forms & Validation:** React Hook Form
* **Styling:** Tailwind CSS, Tailwind Variants
* **CI/CD & Hosting:** GitHub Actions, GitHub Pages, Vercel

## 🏗 Architecture (FSD)

The project strictly follows Feature-Sliced Design layers:

```text
src/
├── app/        # App initialization, global providers, routing configuration
├── pages/      # Page-level composite components
├── widgets/    # Self-contained UI blocks (Playlists, Header, TrackList)
├── features/   # Interactive user actions (AddPlaylist, DeletePlaylist)
├── entities/   # Domain entities (Playlist, Track, User)
└── shared/     # Reusable code (UI kit, API client, helpers, configs)

```

Each module is isolated and exposes its public interface exclusively via a **Public API** (`index.ts`).

## 🚢 CI/CD & Deployment

* **Dev Environment:** Pushing to the `dev` branch triggers a GitHub Actions workflow that runs linting, builds the app,
  and automatically deploys it to **GitHub Pages**.
* **Production Environment:** Pushing to the `master` branch triggers an automated build and deployment to **Vercel**.

## 🚀 Getting Started

### 1. Clone & Install Dependencies

```bash
git clone <repository-url>
cd <repository-folder>
pnpm install

```

### 2. Environment Setup

To use the API locally, register an account at [IT-Incubator API Hub](https://apihub.it-incubator.io/en/2) to generate
your `API key`.

Create a `.env` file in the root directory and specify your configuration:

```env
VITE_API_URL=https://apihub.it-incubator.io/
VITE_API_KEY=your_api_key_from_apihub

```

### 3. Run Development Server

```bash
pnpm dev

```

### 4. Lint & Production Build

```bash
# Run ESLint
pnpm lint

# Build for production
pnpm build

```