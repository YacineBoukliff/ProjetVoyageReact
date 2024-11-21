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
      {id: 1, continent: "Asie", pays: "Malaisie", note: 18},
      // ...
    ]
  })

  useEffect(() => {
    localStorage.setItem('tableau', JSON.stringify(tableau))
  }, [tableau])

  const SupprimerElementTableau = (id) => {
    setTableau(tableau.filter(t => t.id !== id))
  }

  return (
    <Layout>
      <Header />
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <AjouterFormulaire />
        <Statistiques />
      </div>
      <ListeVoyage 
        tableau={tableau} 
        SupprimerElementTableau={SupprimerElementTableau}
      />
    </Layout>
  )
}


export default App