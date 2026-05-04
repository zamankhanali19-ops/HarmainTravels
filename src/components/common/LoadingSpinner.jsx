const LoadingSpinner = () => {
  return (
    <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center">
      <div className="relative flex items-center justify-center">
        {/* Outer Ring */}
        <div className="w-20 h-20 border-4 border-[#002147]/10 rounded-full"></div>
        {/* Inner Spinning Ring */}
        <div className="absolute top-0 left-0 w-20 h-20 border-4 border-transparent border-t-[#A61D24] border-r-[#002147] rounded-full animate-spin"></div>
        {/* Center Icon/Logo indicator */}
        <div className="absolute w-6 h-6 bg-[#A61D24] rounded-full animate-pulse shadow-lg shadow-[#A61D24]/50"></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
