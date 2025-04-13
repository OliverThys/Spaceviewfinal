

// src/components/HeaderOverlay.tsx
export default function HeaderOverlay() {
    return (
      <div style={styles.container}>
        <div style={styles.title}>SpaceView ©</div>
        <div style={styles.subtitle}>by Oliver Thys</div>
      </div>
    )
  }
  
  const styles = {
    container: {
      position: 'absolute' as const,
      top: '20px',
      left: '25px',
      color: 'white',
      fontFamily: 'Orbitron, sans-serif',
      zIndex: 1000,
      userSelect: 'none' as const,
    },
    title: {
      fontSize: '36px',
      fontWeight: 'bold' as const,
      color : 'white'
    },
    subtitle: {
      fontSize: '12px',
      opacity: 1,
      color : 'white',
      fontStyle : 'italic' as const,
    },
  }
  