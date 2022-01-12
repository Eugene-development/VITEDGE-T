import App from './App.vue' // App.jsx
import routes from './routes'
import vitedge from 'vitedge'
import {createPinia, storeToRefs} from 'pinia'
import './index.css'

import devalue from '@nuxt/devalue'

export default vitedge(
    App,
    { routes,
        transformState(state) {
            return import.meta.env.SSR ? devalue(state) : state
        },
    },
    ({ app, router, isClient, initialState }) => {
        // Custom setup hook.
        // E.g. set initialState in a store, install plugins, etc.

        const pinia = createPinia()
        app.use(pinia)


        // Sync initialState with the store:
        if (import.meta.env.SSR) {
            initialState.pinia = pinia.state.value
            // initialState.myData = data
        } else if (isClient){
            pinia.state.value = initialState.pinia
            // console.log(initialState.myData)
        }


    }
)
