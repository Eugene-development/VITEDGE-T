import {acceptHMRUpdate, defineStore} from 'pinia'

export const useCounter = defineStore("counter",{
    state: () => ({

    }),

    actions: {

    },

    getters: {

    },

})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useCounter, import.meta.hot))
}
