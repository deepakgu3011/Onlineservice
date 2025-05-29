import React from 'react';

const Error500Page = () => {
  return (
    <div style={styles.container}>
      <div style={styles.errorBox}>
        <h1 style={styles.code}>500</h1>
        <h2 style={styles.title}>Internal Server Error</h2>
        <p style={styles.message}>
          Oops! Something went wrong on our end. Please try again later.
        </p>
        <a href="/" style={styles.homeLink}>Go back to Home</a>
      </div>
    </div>
  );
};

const styles = {
  container: {
    height: '100vh',
    backgroundColor: '#f7f8fa',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    padding: '20px',
  },
  errorBox: {
    textAlign: 'center',
    padding: '40px 60px',
    backgroundColor: '#fff',
    borderRadius: '12px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
    maxWidth: '450px',
  },
  code: {
    fontSize: '8rem',
    margin: '0',
    color: '#e74c3c',
    fontWeight: '700',
  },
  title: {
    fontSize: '2rem',
    margin: '10px 0 20px 0',
    color: '#333',
  },
  message: {
    fontSize: '1.1rem',
    marginBottom: '30px',
    color: '#555',
  },
  homeLink: {
    textDecoration: 'none',
    backgroundColor: '#e74c3c',
    color: '#fff',
    padding: '12px 30px',
    borderRadius: '6px',
    fontWeight: '600',
    transition: 'background-color 0.3s ease',
  },
};

export default Error500Page;
