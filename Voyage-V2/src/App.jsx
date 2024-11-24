import { useState , useEffect } from "react"
import AjouterFormulaire from "./components/ProjetVoyageV2/AjouterFormulaire"
import Header from "./components/ProjetVoyageV2/Header"
import ListeVoyage from "./components/ProjetVoyageV2/ListeVoyage"
import Statistiques from "./components/ProjetVoyageV2/Statistique"
import Layout from "./components/ProjetVoyageV2/Structure"
import { v4 as uuidv4 } from 'uuid';


const App = () => {

  const [tableau, setTableau] = useState(() => {
    const DataTableau = localStorage.getItem('tableau')
    return DataTableau ? JSON.parse(DataTableau) : [
      {id: 1, continent: "Asie", pays: "Malaisie", Date:"12/03/2025", Duree: 20, Budget: 2500, note: 18 ,},
      {id: 2, continent: "Europe", pays: "France", Date:"12/03/2025", Duree: 20, Budget: 2500, note: 15 ,},
    
    ]
  })


const [continentSelectionne, setFiltreselectionner] = useState('Tous les continents')
const [recherche, setRecherche] = useState('')
const [tri, setTri] = useState('default')

const handleRecherche = (e) => {
  setRecherche(e.target.value)
}


const handleTri = (e) => {
  setTri(e.target.value)
}

const FiltreSelecteur = () => {

  const filtreContinent = continentSelectionne === "Tous les continents" 
    ? tableau 
    : tableau.filter(voyage => voyage.continent === continentSelectionne)

  
  const filtreRecherche = filtreContinent.filter(voyage => 
    voyage.pays.toLowerCase().includes(recherche.toLowerCase()) ||
    voyage.continent.toLowerCase().includes(recherche.toLowerCase())
  )

  
  if (tri === 'budget') {
    return [...filtreRecherche].sort((a, b) => b.Budget - a.Budget)
  }
  if (tri === 'note') {
    return [...filtreRecherche].sort((a, b) => b.note - a.note)
  }
  if (tri === 'pays') {
    return [...filtreRecherche].sort((a, b) => a.pays.localeCompare(b.pays))
  }
  return filtreRecherche

}

  const TargetFiltre = (e) => {
    setFiltreselectionner(e.target.value)
  }

  useEffect(() => {
    localStorage.setItem('tableau', JSON.stringify(tableau))
  }, [tableau])

  const SupprimerElementTableau = (id) => {
   
    setTableau(tableau.filter(t => t.id !== id))
  }

  const CalculMoyenne = () => tableau.reduce((acc, element) => acc + element.note, 0) / tableau.length;

 const CalculMoyenneBudget = () => {
 const somme =  tableau.reduce((acc, element) => acc + element.Budget, 0) 

 const BudgetMoyen = somme / tableau.length

return BudgetMoyen
 }

  const Totalpays = () => {
    const PaysTotal = tableau.length
    return PaysTotal
  }
  
  const AjouterVoyage = (data) => {
    const NouveauVoyage = {
      id: uuidv4(),
      continent: data.continent,
      pays: data.pays,
      Date: data.Date,       
      Duree: data.Duree,     
      Budget: data.Budget,    
      note: data.note
    };
    setTableau([...tableau, NouveauVoyage]);
  };

  return (
    <Layout>
    <Header CalculMoyenne={CalculMoyenne()} PaysTotal={Totalpays()} CalculMoyenneBudget={CalculMoyenneBudget()}/>
    <div className="grid md:grid-cols-2 gap-6 mb-8">
      <AjouterFormulaire AjouterVoyage={AjouterVoyage} />
      <Statistiques PaysTotal={Totalpays()} />
    </div>
    <ListeVoyage 
      tableau={FiltreSelecteur()} 
      SupprimerElementTableau={SupprimerElementTableau}
      TargetFiltre={TargetFiltre}
      continentSelectionne={continentSelectionne}
      recherche={recherche}
      handleRecherche={handleRecherche}
      tri={tri}
      handleTri={handleTri}
    />
  </Layout>
  )
}


export default App