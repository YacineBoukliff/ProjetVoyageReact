import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

const Continent = ["Europe", "Asie", "Afrique", "Amérique du Sud", "Amérique du Nord", "Océanie"] 

const schema = z.object({
  pays: z.string().trim().min(3, {message: "Vous devez mettre au minimum 3 caractères"}).max(35, {message: "Maximum 35 caractères"}),
  Duree: z.number({
    invalid_type_error: "Remplissez une durée"
  }).min(1, {message: "Vous devez mettre au minimum 1 jour"}),
  note: z.number({
    invalid_type_error: "Mettez une note sur 20"
  }).min(1, {message: "La note minimale est 1"}).max(20, {message: "La note maximale est 20"}),
  Budget: z.number({
    invalid_type_error: "Entrez un budget"
  }).min(1, {message: "Le budget minimum est 1€"}),
  continent: z.enum(Continent, {
    errorMap: () => ({ message: "Sélectionnez un continent" })
  }),
  Date: z.string().min(1, {message: "Sélectionnez une date"})
})

const AjouterFormulaire = ({AjouterVoyage}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      pays: "",
      Duree: undefined,
      note: undefined,
      Budget: undefined,
      continent: undefined,
      Date: ""
    }
  })

  function Formulaire(data) {
    AjouterVoyage(data)
    reset()
  }

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Nouveau Voyage</h2>
      <form className="space-y-4" onSubmit={handleSubmit(Formulaire)}>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Continent
            </label>
            <select 
              className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              {...register("continent")}
            >
              <option value="">Sélectionnez...</option>
              {Continent.map(c => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
            {errors.continent && (
              <p className="text-red-500 text-sm mt-1">{errors.continent.message}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Pays
            </label>
            <input 
              type="text"
              className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              {...register("pays")}
            />
            {errors.pays && (
              <p className="text-red-500 text-sm mt-1">{errors.pays.message}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Date du voyage
            </label>
            <input 
              type="date"
              className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              {...register("Date")}
            />
            {errors.Date && (
              <p className="text-red-500 text-sm mt-1">{errors.Date.message}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Durée (jours)
            </label>
            <input 
              type="number"
              className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              {...register("Duree", { valueAsNumber: true })}
            />
            {errors.Duree && (
              <p className="text-red-500 text-sm mt-1">{errors.Duree.message}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Budget (€)
            </label>
            <input 
              type="number"
              className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              {...register("Budget", { valueAsNumber: true })}
            />
            {errors.Budget && (
              <p className="text-red-500 text-sm mt-1">{errors.Budget.message}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Note /20
            </label>
            <input 
              type="number"
              className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              {...register("note", { valueAsNumber: true })}
            />
            {errors.note && (
              <p className="text-red-500 text-sm mt-1">{errors.note.message}</p>
            )}
          </div>
        </div>

        <div className="flex justify-end">
          <button 
            type="submit"
            className="px-6 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium rounded-lg hover:from-blue-600 hover:to-indigo-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all"
          >
            Ajouter
          </button>
        </div>
      </form>
    </div>
  )
}

export default AjouterFormulaire