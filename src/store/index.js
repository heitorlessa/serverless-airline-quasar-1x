import Vue from 'vue'
import Vuex from 'vuex'

// import example from './module-example'
import catalog from './catalog'
import profile from './profile'
import bookings from './bookings'
import loyalty from './loyalty'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      catalog,
      profile,
      bookings,
      loyalty
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEBUGGING
  })

  return Store
}
