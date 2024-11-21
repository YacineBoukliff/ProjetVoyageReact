// Statistics.js
const Statistiques = () => {
    return (
      <div className="space-y-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Statistiques par Continent</h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-600">Europe</span>
              <span className="text-sm font-medium text-gray-900">8 pays</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-600 h-2 rounded-full" style={{width: '60%'}}></div>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-600">Asie</span>
              <span className="text-sm font-medium text-gray-900">6 pays</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-600 h-2 rounded-full" style={{width: '45%'}}></div>
            </div>
  
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-600">Amérique du Nord</span>
              <span className="text-sm font-medium text-gray-900">5 pays</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-600 h-2 rounded-full" style={{width: '38%'}}></div>
            </div>
          </div>
        </div>
  
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Notes Moyennes</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-600">Note Globale</span>
              <span className="text-lg font-bold text-blue-600">16.8/20</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-600">Meilleure Note</span>
              <span className="text-sm font-medium text-gray-900">Japon (19/20)</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-600">Note la plus basse</span>
              <span className="text-sm font-medium text-gray-900">Belgique (14/20)</span>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Statistiques;