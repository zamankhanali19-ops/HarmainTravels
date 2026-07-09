const LoadingSpinner = () => {
  return (
    <div className="min-h-screen bg-brand-bg-primary flex items-center justify-center">
      <div className="relative flex items-center justify-center">
        {/* Outer Ring */}
        <div className="w-20 h-20 border-4 border-brand-bg-primary/10 rounded-full"></div>
        {/* Inner Spinning Ring */}
        <div className="absolute top-0 left-0 w-20 h-20 border-4 border-transparent border-t-brand-red border-r-brand-silver rounded-full animate-spin"></div>
        {/* Center Icon/Logo indicator */}
        <div className="absolute w-6 h-6 bg-brand-red rounded-full animate-pulse shadow-lg shadow-brand-red/50"></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
