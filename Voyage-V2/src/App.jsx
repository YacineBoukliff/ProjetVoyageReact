import { useState , useEffect } from "react"
import AjouterFormulaire from "./components/ProjetVoyageV2/AjouterFormulaire"
import Header from "./components/ProjetVoyageV2/Header"
import ListeVoyage from "./components/ProjetVoyageV2/ListeVoyage"
import Statistiques from "./components/ProjetVoyageV2/Statistique"
import Layout from "./components/ProjetVoyageV2/Structure"


const App = () => {

  const [tableau, setTableau] = useState(() => {
    const DataTableau = localStorage.getItem('tableau')
    return DataTableau ? JSON.parse(DataTableau) : [
      {id: 1, continent: "Asie", pays: "Malaisie", Date:"12/03/2025", Duree: 20, Budget: 2500, note: 18 ,},
      {id: 2, continent: "Europe", pays: "France", Date:"12/03/2025", Duree: 20, Budget: 2500, note: 15 ,},
    
    ]
  })

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
      id: tableau.length + 1,
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
      <Header CalculMoyenne={CalculMoyenne()}  PaysTotal={Totalpays()} CalculMoyenneBudget={CalculMoyenneBudget()}/>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <AjouterFormulaire AjouterVoyage={AjouterVoyage} />
        <Statistiques PaysTotal={Totalpays()} />
      </div>
      <ListeVoyage 
        tableau={tableau} 
        SupprimerElementTableau={SupprimerElementTableau}
      />
    </Layout>
  )
}


export default App