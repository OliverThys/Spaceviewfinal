// src/components/ScaleLegend.tsx
export default function ScaleLegend() {
    return (
      <div style={styles.container}>
        <h3 style={styles.title}>Scale</h3>
        <p style={styles.text}>
          <strong>Distances :</strong> logarithmic scale (approx.)<br />
          1 AU = distance Earth → Sun ≈ 150M km
        </p>
        <p style={styles.text}>
          <strong>Time :</strong> not to scale<br />
          Orbits are sped up for visualization
        </p>
      </div>
    )
  }
  
  const styles = {
    container: {
      position: 'absolute' as const,
      top: '20px',
      right: '25px',
      width: '230px',
      padding: '15px',
      border: '2px solid white',
      borderRadius: '8px',
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      color: 'white',
      fontFamily: 'Orbitron, sans-serif',
      zIndex: 999,
      boxShadow: '0 4px 15px rgba(0,0,0,0.4)',
    },
    title: {
      margin: 0,
      marginBottom: '10px',
      fontSize: '16px',
      textShadow: '1px 1px 2px black',
    },
    text: {
      fontSize: '13px',
      lineHeight: '1.4',
    }
  }
  