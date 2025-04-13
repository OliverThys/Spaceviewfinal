import './index.css'
import { PlanetProvider } from './core/PlanetContext'
import SolarSystemCanvas from './components/SolarSystemCanvas'
import HeaderOverlay from './components/HeaderOverlay'
import InfoPanel from './components/InfoPanel'
import ScaleLegend from './components/ScaleLegend'

export default function App() {
  return (
    <PlanetProvider>
      <div style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>
        <HeaderOverlay />
        <InfoPanel />
        <ScaleLegend /> {/* ✅ nouvelle légende */}
        <SolarSystemCanvas />
      </div>
    </PlanetProvider>
  )
}
