
const ListeVoyage = ({SupprimerElementTableau}) => {
    return (
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold text-gray-800">Liste des Voyages</h2>
            <div className="flex gap-4">
              <select className="px-3 py-1.5 bg-gray-50 border border-gray-300 rounded-lg text-sm">
                <option>Tous les continents</option>
                <option>Europe</option>
                <option>Asie</option>
                <option>Afrique</option>
              </select>
              <select className="px-3 py-1.5 bg-gray-50 border border-gray-300 rounded-lg text-sm">
                <option>Trier par date</option>
                <option>Trier par note</option>
                <option>Trier par pays</option>
              </select>
              <input type="search" placeholder="Rechercher..." className="px-3 py-1.5 bg-gray-50 border border-gray-300 rounded-lg text-sm" />
            </div>
          </div>
        </div>
        
        <div className="divide-y divide-gray-200">
          <div className="grid grid-cols-6 gap-4 px-6 py-3 bg-gray-50">
            <span className="text-sm font-medium text-gray-600">Pays</span>
            <span className="text-sm font-medium text-gray-600">Continent</span>
            <span className="text-sm font-medium text-gray-600">Date</span>
            <span className="text-sm font-medium text-gray-600">Durée</span>
            <span className="text-sm font-medium text-gray-600">Note</span>
            <span className="text-sm font-medium text-gray-600">Actions</span>
          </div>
  
          {[1, 2, 3].map((item) => (
            <div key={item} className="grid grid-cols-6 gap-4 px-6 py-4 hover:bg-gray-50">
              <span className="text-gray-900 font-medium">Japon</span>
              <span className="text-gray-600">Asie</span>
              <span className="text-gray-600">12/03/2024</span>
              <span className="text-gray-600">14 jours</span>
              <span className="text-blue-600 font-medium">19/20</span>
              <div className="flex gap-2">
                <button className="px-2 py-1 text-sm text-blue-600 hover:bg-blue-50 rounded">
                  Éditer
                </button>
                <button onClick={() => {SupprimerElementTableau(id)}} className="px-2 py-1 text-sm text-red-600 hover:bg-red-50 rounded">
                  Supprimer
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default ListeVoyage;