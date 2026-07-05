import React, { useState } from 'react';

const styles = {
  section: {
    minHeight: '100vh',
    backgroundColor: '#0a0f1e',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: "'Georgia', 'Times New Roman', serif",
    padding: '2rem',
    boxSizing: 'border-box' as const,
    position: 'relative' as const,
    overflow: 'hidden',
  },
  backgroundAccent: {
    position: 'absolute' as const,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '600px',
    height: '600px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 70%)',
    pointerEvents: 'none' as const,
  },
  topLine: {
    width: '60px',
    height: '2px',
    backgroundColor: '#c9a84c',
    margin: '0 auto 1.5rem auto',
  },
  container: {
    maxWidth: '820px',
    textAlign: 'center' as const,
    position: 'relative' as const,
    zIndex: 1,
  },
  eyebrow: {
    fontSize: '0.75rem',
    letterSpacing: '0.3em',
    textTransform: 'uppercase' as const,
    color: '#c9a84c',
    marginBottom: '1.5rem',
    fontFamily: "'Helvetica Neue', Arial, sans-serif",
    fontWeight: 400,
  },
  headline: {
    fontSize: 'clamp(2.4rem, 6vw, 5rem)',
    fontWeight: 700,
    color: '#ffffff',
    lineHeight: 1.15,
    marginBottom: '1.5rem',
    letterSpacing: '-0.02em',
  },
  headlineAccent: {
    color: '#c9a84c',
    fontStyle: 'italic',
  },
  divider: {
    width: '48px',
    height: '1px',
    backgroundColor: '#c9a84c',
    margin: '0 auto 1.75rem auto',
    opacity: 0.6,
  },
  subheadline: {
    fontSize: 'clamp(1rem, 2vw, 1.2rem)',
    color: 'rgba(255,255,255,0.6)',
    lineHeight: 1.75,
    marginBottom: '3rem',
    maxWidth: '560px',
    margin: '0 auto 3rem auto',
    fontFamily: "'Helvetica Neue', Arial, sans-serif",
    fontWeight: 300,
    letterSpacing: '0.01em',
  },
  buttonGroup: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
    flexWrap: 'wrap' as const,
  },
  buttonPrimary: {
    display: 'inline-block',
    padding: '1rem 2.75rem',
    backgroundColor: '#c9a84c',
    color: '#0a0f1e',
    fontSize: '0.8rem',
    letterSpacing: '0.2em',
    textTransform: 'uppercase' as const,
    fontFamily: "'Helvetica Neue', Arial, sans-serif",
    fontWeight: 700,
    border: '2px solid #c9a84c',
    borderRadius: '2px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease, color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease',
    textDecoration: 'none',
  },
  buttonPrimaryHover: {
    backgroundColor: 'transparent',
    color: '#c9a84c',
    transform: 'translateY(-2px)',
    boxShadow: '0 8px 30px rgba(201,168,76,0.25)',
  },
  buttonSecondary: {
    display: 'inline-block',
    padding: '1rem 2.75rem',
    backgroundColor: 'transparent',
    color: 'rgba(255,255,255,0.75)',
    fontSize: '0.8rem',
    letterSpacing: '0.2em',
    textTransform: 'uppercase' as const,
    fontFamily: "'Helvetica Neue', Arial, sans-serif",
    fontWeight: 400,
    border: '2px solid rgba(255,255,255,0.2)',
    borderRadius: '2px',
    cursor: 'pointer',
    transition: 'border-color 0.3s ease, color 0.3s ease, transform 0.2s ease',
    textDecoration: 'none',
  },
  buttonSecondaryHover: {
    borderColor: 'rgba(255,255,255,0.6)',
    color: '#ffffff',
    transform: 'translateY(-2px)',
  },
  bottomLine: {
    width: '60px',
    height: '2px',
    backgroundColor: '#c9a84c',
    margin: '4rem auto 0 auto',
    opacity: 0.4,
  },
  cornerDecorTL: {
    position: 'absolute' as const,
    top: '2rem',
    left: '2rem',
    width: '40px',
    height: '40px',
    borderTop: '1px solid rgba(201,168,76,0.4)',
    borderLeft: '1px solid rgba(201,168,76,0.4)',
  },
  cornerDecorBR: {
    position: 'absolute' as const,
    bottom: '2rem',
    right: '2rem',
    width: '40px',
    height: '40px',
    borderBottom: '1px solid rgba(201,168,76,0.4)',
    borderRight: '1px solid rgba(201,168,76,0.4)',
  },
};

const HeroSection: React.FC = () => {
  const [primaryHovered, setPrimaryHovered] = useState(false);
  const [secondaryHovered, setSecondaryHovered] = useState(false);

  return (
    <section style={styles.section}>
      {/* Background glow */}
      <div style={styles.backgroundAccent} />

      {/* Corner decorations */}
      <div style={styles.cornerDecorTL} />
      <div style={styles.cornerDecorBR} />

      <div style={styles.container}>
        {/* Top accent line */}
        <div style={styles.topLine} />

        {/* Eyebrow text */}
        <p style={styles.eyebrow}>Crafted for the discerning few</p>

        {/* Main headline */}
        <h1 style={styles.headline}>
          Elevate Your World to{' '}
          <span style={styles.headlineAccent}>Extraordinary</span>
        </h1>

        {/* Gold divider */}
        <div style={styles.divider} />

        {/* Subheadline */}
        <p style={styles.subheadline}>
          Experience the pinnacle of refinement. Where every detail is intentional,
          every moment is curated, and excellence is simply the standard.
        </p>

        {/* Buttons */}
        <div style={styles.buttonGroup}>
          <button
            style={{
              ...styles.buttonPrimary,
              ...(primaryHovered ? styles.buttonPrimaryHover : {}),
            }}
            onMouseEnter={() => setPrimaryHovered(true)}
            onMouseLeave={() => setPrimaryHovered(false)}
            onClick={() => alert('Welcome to luxury.')}
          >
            Discover More
          </button>

          <button
            style={{
              ...styles.buttonSecondary,
              ...(secondaryHovered ? styles.buttonSecondaryHover : {}),
            }}
            onMouseEnter={() => setSecondaryHovered(true)}
            onMouseLeave={() => setSecondaryHovered(false)}
            onClick={() => alert('Our collection awaits.')}
          >
            View Collection
          </button>
        </div>

        {/* Bottom accent */}
        <div style={styles.bottomLine} />
      </div>
    </section>
  );
};

export default HeroSection;
