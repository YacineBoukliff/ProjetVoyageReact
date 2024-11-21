
import PropTypes from 'prop-types';

const ListeVoyage = ({tableau, SupprimerElementTableau}) => {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <div className="p-4 md:p-6 border-b border-gray-200">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
          <h2 className="text-xl font-semibold text-gray-800">Liste des Voyages</h2>
          <div className="flex flex-col sm:flex-row gap-4">
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
      
      <div className="overflow-x-auto">
        <div className="divide-y divide-gray-200 min-w-[800px]">
          <div className="grid grid-cols-8 gap-4 px-6 py-3 bg-gray-50">
            <span className="text-sm font-medium text-gray-600">ID</span>
            <span className="text-sm font-medium text-gray-600">Pays</span>
            <span className="text-sm font-medium text-gray-600">Continent</span>
            <span className="text-sm font-medium text-gray-600">Date</span>
            <span className="text-sm font-medium text-gray-600">Durée</span>
            <span className="text-sm font-medium text-gray-600">Budget</span>
            <span className="text-sm font-medium text-gray-600">Note</span>
            <span className="text-sm font-medium text-gray-600">Actions</span>
          </div>
          
          {tableau.map((item) => (
            <div key={item.id} className="grid grid-cols-8 gap-4 px-6 py-4 hover:bg-gray-50">
              <span className="text-gray-900 font-medium">{item.id}</span>
              <span className="text-gray-900 font-medium">{item.pays}</span>
              <span className="text-gray-600">{item.continent}</span>
              <span className="text-gray-600">{item.Date}</span>
              <span className="text-gray-600">{item.Duree} jours</span>
              <span className="text-gray-600">{item.Budget}€</span>
              <span className="text-blue-600 font-medium">{item.note}/20</span>
              <div className="flex gap-2">
                <button className="px-2 py-1 text-sm text-blue-600 hover:bg-blue-50 rounded whitespace-nowrap">
                  Éditer
                </button>
                <button 
                  onClick={() => SupprimerElementTableau(item.id)} 
                  className="px-2 py-1 text-sm text-red-600 hover:bg-red-50 rounded whitespace-nowrap"
                >
                  Supprimer
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

ListeVoyage.propTypes = {
  tableau: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      pays: PropTypes.string.isRequired,
      continent: PropTypes.string.isRequired,
      Date: PropTypes.string.isRequired,
      Duree: PropTypes.number.isRequired,
      Budget: PropTypes.number.isRequired,
      note: PropTypes.number.isRequired,
      Tags: PropTypes.string,
      Commentaire: PropTypes.string
    })
  ).isRequired,
  SupprimerElementTableau: PropTypes.func.isRequired
};

export default ListeVoyage;