const Layout = ({ children }) => {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-xl md:text-3xl font-bold tracking-tight text-center hover:scale-105 transition-transform cursor-text bg-gradient-to-r from-cyan-300 via-blue-600 to-indigo-600 text-transparent bg-clip-text mb-8">
           Votre Dashboard Voyage tout en un  
          </h1>
          {children}
        </div>
      </div>
    );
  };
  
  export default Layout