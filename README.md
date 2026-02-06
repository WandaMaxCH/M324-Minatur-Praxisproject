# Swiss Weather App

[![CI](https://github.com/WandaMaxCH/M324-Minatur-Praxisproject/actions/workflows/ci.yml/badge.svg)](https://github.com/WandaMaxCH/M324-Minatur-Praxisproject/actions/workflows/ci.yml)

Interactive weather map application for Swiss cities with automated CI/CD pipeline.

**Live Demo:** [weatherappdisplay.netlify.app](https://weatherappdisplay.netlify.app)

## Tech Stack

| Category | Technology |
|----------|------------|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| UI | React 19, Tailwind CSS 3.4 |
| Maps | Leaflet 1.9, react-leaflet 5 |
| Icons | lucide-react |
| Weather API | Open-Meteo (no API key required) |
| Testing | Jest 30, React Testing Library |
| CI/CD | GitHub Actions, Netlify |

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Features

### Interactive Map
- Leaflet map centered on Switzerland
- Click anywhere to place a marker and fetch weather
- Smooth fly-to animation when selecting a city
- OpenStreetMap tiles

### City Search
- Autocomplete search for Swiss cities
- Powered by Open-Meteo Geocoding API
- Debounced search (300ms) to reduce API calls
- Displays up to 5 suggestions

### Weather Display
- **Current Weather**: Temperature, condition, humidity, wind speed
- **24-Hour Forecast**: Hourly temperature with weather icons
- **7-Day Forecast**: Daily min/max temperatures
- Weather data from Open-Meteo API (icon_seamless model)

## Testing

```bash
# Run tests
npm test

# Run tests in watch mode
npm run test:watch
```

## CI/CD Pipeline

### Continuous Integration
Every push and PR to main runs:
1. Install dependencies (`npm ci`)
2. Run tests (`npm test`)
3. Build application (`npm run build`)

Configuration: `.github/workflows/ci.yml`

### Continuous Deployment
Automatic deployment to Netlify on merge to main:
- Configured via `netlify.toml`
- Uses `@netlify/plugin-nextjs` for Next.js builds
- Node.js 20

**Live Site:** [https://weatherappdisplay.netlify.app](https://weatherappdisplay.netlify.app)

## Project Structure

```
├── .github/workflows/
│   └── ci.yml              # GitHub Actions CI workflow
├── app/
│   ├── components/
│   │   ├── Footer.tsx      # Footer component
│   │   ├── Map.tsx         # Leaflet map with click handler
│   │   ├── SearchBar.tsx   # City search autocomplete
│   │   └── WeatherDisplay.tsx  # Weather cards
│   ├── lib/
│   │   ├── geocoding.ts    # Geocoding API
│   │   └── weather.ts      # Weather API
│   ├── globals.css         # Tailwind imports
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── page.test.tsx       # Tests
├── .env.local.example      # Environment variables template
├── jest.config.ts          # Jest configuration
├── netlify.toml            # Netlify deployment config
├── tailwind.config.ts      # Tailwind configuration
└── package.json            # Dependencies and scripts
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm test` | Run tests |
| `npm run test:watch` | Run tests in watch mode |
| `npm run lint` | Run ESLint |

## Environment Variables

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_APP_NAME` | App name in footer (default: "Swiss Weather App") |

## APIs

- [Open-Meteo Forecast API](https://open-meteo.com/) - Weather data
- [Open-Meteo Geocoding API](https://open-meteo.com/) - City search

No API keys required.

## License

M324 School Project - CI/CD Pipeline Implementation

## Credits

- Weather data: [Open-Meteo](https://open-meteo.com/)
- Map tiles: [OpenStreetMap](https://www.openstreetmap.org/)
- Icons: [Lucide React](https://lucide.dev/)
