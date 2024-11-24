
## 📝 Description

Une application web moderne permettant de gérer et visualiser vos voyages. Cette application offre une interface intuitive pour ajouter, filtrer et analyser vos différentes destinations avec des statistiques détaillées.

## ✨ Aperçu

```bash
# Clone du repository
git clone https://github.com/votre-username/dashboard-voyage.git

# Installation des dépendances
cd dashboard-voyage
npm install

# Lancement du serveur de développement
npm run dev
```

## 🚀 Fonctionnalités Principales

### 📊 Gestion des Voyages
- ✅ Ajout de nouveaux voyages avec validation des données
- ✅ Suppression de voyages existants
- ✅ Stockage persistant des données via localStorage
- ✅ Informations détaillées incluant pays, continent, date, durée, budget et note

### 🔍 Filtrage et Tri
- ✅ Filtrage par continent
- ✅ Recherche textuelle sur les pays et continents
- ✅ Tri multiple :
  - Par budget
  - Par note
  - Par nom de pays

### 📈 Statistiques et Analyses
- ✅ Vue d'ensemble avec statistiques clés
  - Nombre total de pays visités
  - Budget moyen
  - Note moyenne
  - Top destination
- ✅ Statistiques détaillées par continent
- ✅ Analyse des notes

## 💻 Technologies Utilisées

- React 18
- Tailwind CSS
- React Hook Form
- Zod (validation)
- LocalStorage API

## 💡 Notions React Apprises

### Gestion d'État
```javascript
const [tableau, setTableau] = useState(() => {
  const DataTableau = localStorage.getItem('tableau')
  return DataTableau ? JSON.parse(DataTableau) : []
})
```

### Formulaires et Validation
```javascript
const schema = z.object({
  pays: z.string().min(3).max(35),
  note: z.number().min(1).max(20)
})
```

### Composants et Props
```javascript
const Header = ({ CalculMoyenne, PaysTotal }) => {
  return (
    // Structure du composant
  )
}
```

## 📁 Structure du Projet

```
src/
├── components/
│   └── ProjetVoyageV2/
│       ├── AjouterFormulaire.jsx
│       ├── Header.jsx
│       ├── ListeVoyage.jsx
│       ├── Statistique.jsx
│       └── Structure.jsx
├── App.jsx
└── main.jsx
```

## 🔄 Flux de Données

1. **État Principal**
   - Stockage dans `useState`
   - Persistance avec `localStorage`

2. **Gestion des Modifications**
   - Fonctions dédiées pour les mises à jour
   - Validation des données

3. **Mise à Jour des Composants**
   - Flux unidirectionnel des données
   - Props pour la communication

## 🎯 Axes d'Amélioration

- [ ] Intégration d'une base de données
- [ ] Système d'authentification
- [ ] Ajout de photos pour les voyages
- [ ] Exportation des données en CSV/PDF
- [ ] Visualisations graphiques avancées
- [ ] Système de tags personnalisés
- [ ] Commentaires détaillés par voyage

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou soumettre une pull request.

## 📄 Licence

Ce projet est sous licence MIT - voir le fichier [LICENSE.md](LICENSE.md) pour plus de détails.

## 🙏 Remerciements

- React Team pour leur framework incroyable
- Tailwind CSS pour leur système de design
- La communauté open source pour leurs contributions

---

Fait avec ❤️ par [Votre Nom]