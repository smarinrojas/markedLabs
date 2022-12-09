import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

    userLogged: false,

    loginData: {
      email: "example@example.com",
      password: "123456"
    },

    labList:[
        {
            id: 1,
            labName : "Terralab",
            labLogo: "http://latentacion.com.co/wp-content/uploads/2020/12/Logo-JPG-01-150x150.jpg",
            starRating: 4.5,
            labLocation: "Manizales / Caldas",
            address: "Cra 15 # 14 -05",
            labAnalisysTypes: ["pH", "cadmio", "acidez", "boro", "azufre"],
            pricing: {
                forUnit: 200000,
                wholesale: 150000,
                wholesalePolitic: 10
            },
            email: "loremipsum@example.co",
            phone: "3196696945"
            
        },
        {   
            id: 2,
            labName : "Laboratorio de Manizales",
            labLogo: "http://latentacion.com.co/wp-content/uploads/2020/12/Logo-JPG-01-150x150.jpg",
            starRating: 3.5,
            labLocation: "Manizales / Caldas",
            address: "Cra 15 # 14 -05",
            labAnalisysTypes: ["pH", "cadmio", "boro", "azufre"],
            pricing: {
                forUnit: 150000,
                wholesale: 100000,
                wholesalePolitic: 15
            },
            email: "loremipsum@example.co",
            phone: "3196696945"
            
        },
        {
            id: 3,
            labName : "Laboratorio de Medellín",
            labLogo: "http://latentacion.com.co/wp-content/uploads/2020/12/Logo-JPG-01-150x150.jpg",
            starRating: 4.8,
            labLocation: "Medellin / Antioquia",
            address: "Cra 15 # 14 -05",
            labAnalisysTypes: ["pH", "cadmio", "acidez", "boro", "azufre", "cacao"],
            pricing: {
                forUnit: 220000,
                wholesale: 160000,
                wholesalePolitic: 6
            },
            email: "loremipsum@example.co",
            phone: "3196696945"
            
        },
        {
            id: 4,
            labName : "Laboratorio universitario",
            labLogo: "http://latentacion.com.co/wp-content/uploads/2020/12/Logo-JPG-01-150x150.jpg",
            starRating: 4.1,
            labLocation: "Manizales / Caldas",
            address: "Cra 15 # 14 -05",
            labAnalisysTypes: ["pH", "cadmio", "acidez", "boro", "azufre"],
            pricing: {
                forUnit: 210000,
                wholesale: 120000,
                wholesalePolitic: 13
            },
            email: "loremipsum@example.co",
            phone: "3196696945"
            
        }
    ],
    samples: [

      {
        tableName : "table01",
        tableId: 1,
        tableContent: [
          {
            id:1,
            property:"Emanuel Rico Rojas",
            propertyIdentification: "10022313254",
            dateOfSampling: "20-11-2022",
            city: "Manizales",
            sidewalk: "Bajo Tablazo",
            shadowPercent: 12,
  
        },
        {
            id:2,
            property:"Emanuel Rico Rojas",
            propertyIdentification: "10022313254",
            dateOfSampling: "2022-11-20",
            city: "Manizales",
            sidewalk: "Bajo Tablazo",
            shadowPercent: 12,
        },
        {
            id: 3,
            property:"Emanuel Rico Rojas",
            propertyIdentification: "10022313254",
            dateOfSampling: "2022-11-20",
            city: "Manizales",
            sidewalk: "Bajo Tablazo",
            shadowPercent: 12,
        },
        ]
        
      }
      
    ],

    sample: null
  },
  getters: {
  },
  mutations: {
    updateSampleTable(state){
      state.samples = sample
    }
  },
  actions: {
    updateSampleTableAction(context){
      context.commit("updateSampleTable")
    }
  },
  modules: {
  }
})
