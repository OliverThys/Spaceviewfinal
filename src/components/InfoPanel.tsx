import { usePlanetContext } from '../core/PlanetContext'

export default function InfoPanel() {
  const { selectedPlanet } = usePlanetContext()

  return (
    <div style={styles.panel}>
      <h2 style={styles.title}>Planet Info</h2>
      {selectedPlanet ? (
        <>
          <h3>{selectedPlanet.name}</h3>
          <p>{selectedPlanet.description}</p>
        </>
      ) : (
        <p style={{ fontStyle: 'italic', opacity: 0.7 }}>
          Click on a planet to learn more
        </p>
      )}
    </div>
  )
}

const styles = {
    panel: {
      position: 'absolute' as const,
      top: '50%',
      right: '25px',
      transform: 'translateY(-60%)',
      width: '230px',
      minHeight: '120px',
      padding: '15px',
      border: '2px solid white',
      color: 'white',
      fontFamily: 'Orbitron, sans-serif',
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      zIndex: 999,
      borderRadius: '8px',
      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.4)',
    },
    title: {
      fontSize: '16px',
      margin: 0,
      marginBottom: '8px',
    },
  }
  
