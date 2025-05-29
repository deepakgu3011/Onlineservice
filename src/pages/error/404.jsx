import React from 'react';

const styles = {
  container: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#f8f9fa',
    color: '#333',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    padding: '20px',
    textAlign: 'center',
  },
  code: {
    fontSize: '8rem',
    fontWeight: '700',
    marginBottom: '20px',
    color: '#ff6b6b',
  },
  message: {
    fontSize: '1.5rem',
    marginBottom: '15px',
  },
  description: {
    fontSize: '1rem',
    color: '#666',
    marginBottom: '30px',
  },
  button: {
    padding: '12px 30px',
    fontSize: '1rem',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '5px',
    color: 'white',
    cursor: 'pointer',
    textDecoration: 'none',
  }
};

export default function NotFoundPage() {
  return (
    <div style={styles.container}>
      <div style={styles.code}>404</div>
      <div style={styles.message}>Oops! Page Not Found</div>
      <div style={styles.description}>
        The page you are looking for does not exist or has been moved.
      </div>
      <a href="/" style={styles.button}>Go to Home</a>
    </div>
  );
}
