'use client'

export default function Footer() {
  const appName = process.env.NEXT_PUBLIC_APP_NAME || 'Swiss Weather App'

  return (
    <footer className="bg-gray-800 text-white py-6 mt-16">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">
          {appName} - M324 CI/CD School Project
        </p>
        <p className="text-xs text-gray-400 mt-2">
          Weather data from Open-Meteo API
        </p>
      </div>
    </footer>
  )
}
