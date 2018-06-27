import Vuex from 'vuex'
import firebase, { Auth } from '@/plugins/firebase-client-init.js'

const createStore = () => {
    return new Vuex.Store({
        state: {
            user: null
        },
        getters: {
            activeUser: (state, getters) => {
                return state.user
            }
        },
        mutations: {
            setUser(state, payload) {
                state.user = payload
            }
        },
        actions: {
            nuxtServerInit({commit}, {req}) {
                if(req.user) {
                    commit('setUser', req.user)
                }
                console.log(req.user)    
                
            },
            
            firebaseSignIn ({commit}, payload) {
                Auth.signInWithEmailAndPassword(payload.email, payload.password)
                .then(data => {
                    commit('setUser', data.user)
                    console.log(data.user)                    
                })
                .catch(err => {
                    console.log(err)                    
                })
            },
            signOut ({commit}){
                auth.signOut().then( () => {
                    commit('setUser', null)
                }).catch(err => console.log(err))
                
            }

        }
    })
}

export default createStore