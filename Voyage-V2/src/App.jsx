import { useState , useEffect } from "react"
import AjouterFormulaire from "./components/ProjetVoyageV2/AjouterFormulaire"
import Header from "./components/ProjetVoyageV2/Header"
import ListeVoyage from "./components/ProjetVoyageV2/ListeVoyage"
import Statistiques from "./components/ProjetVoyageV2/Statistique"
import Layout from "./components/ProjetVoyageV2/Structure"

const App = () => {

console.log("Strict")

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

  const CalculMoyenne = () => {
    const somme = tableau.reduce((acc,element) => acc + element.note, 0)
    const moyenne = somme / tableau.length 
    return moyenne
  }

  const Totalpays = () => {
    const PaysTotal = tableau.length
    return PaysTotal
  }

  return (
    <Layout>
      <Header CalculMoyenne={CalculMoyenne()}  PaysTotal={Totalpays()}/>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <AjouterFormulaire />
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