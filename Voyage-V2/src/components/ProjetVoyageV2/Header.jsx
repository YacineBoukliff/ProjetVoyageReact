// Header.js
const Header = () => {
    return (
      <div className="flex flex-col md:flex-row gap-6 mb-8">
        <div className="flex-1">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-center md:text-left mb-4 bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-transparent bg-clip-text">
            Carnet de Voyages
          </h1>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-xl shadow-sm">
            <p className="text-sm text-gray-600">Total Pays</p>
            <p className="text-2xl font-bold text-gray-900">24</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm">
            <p className="text-sm text-gray-600">Continents</p>
            <p className="text-2xl font-bold text-gray-900">5/7</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm">
            <p className="text-sm text-gray-600">Note Moyenne</p>
            <p className="text-2xl font-bold text-blue-600">16.8/20</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm">
            <p className="text-sm text-gray-600">Top Destination</p>
            <p className="text-xl font-bold text-gray-900">Japon</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Header;