import { createContext, useContext, useState, ReactNode } from 'react'

type PlanetData = {
  name: string
  description: string
} | null

type PlanetContextType = {
  hoveredPlanet: string | null
  setHoveredPlanet: (name: string | null) => void
  selectedPlanet: PlanetData
  setSelectedPlanet: (data: PlanetData) => void
}

const PlanetContext = createContext<PlanetContextType | undefined>(undefined)

export const PlanetProvider = ({ children }: { children: ReactNode }) => {
  const [hoveredPlanet, setHoveredPlanet] = useState<string | null>(null)
  const [selectedPlanet, setSelectedPlanet] = useState<PlanetData>(null)

  return (
    <PlanetContext.Provider value={{ hoveredPlanet, setHoveredPlanet, selectedPlanet, setSelectedPlanet }}>
      {children}
    </PlanetContext.Provider>
  )
}

export const usePlanetContext = () => {
  const context = useContext(PlanetContext)
  if (!context) throw new Error("usePlanetContext must be used within a PlanetProvider")
  return context
}
