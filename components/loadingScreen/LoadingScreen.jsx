const LoadingScreen = () => {
  return (
    <div className="preloader-inner" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <img
        src="/favicon.svg"
        alt="Loading..."
        style={{
          width: 80,
          height: 80,
          animation: 'pulse 1.2s ease-in-out infinite',
          filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.15))'
        }}
      />
      <style>{`
        @keyframes pulse {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.15); opacity: 0.7; }
          100% { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;
