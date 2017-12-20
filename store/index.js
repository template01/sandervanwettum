export const state = () => ({
  locales: ['en', 'nl'],
  locale: 'nl',
  n: 1,
  smallscreen: false,
  screensize: 0,
  xlscreen: false,
  apiRoot: 'https://placeholder-b.template-studio.nl/wp-json',

})


export const getters = {

  issmallscreen(state) {
    return state.smallscreen
  },
  isxlscreen(state) {
    return state.xlscreen
  },
  getscreensize(state) {
    return state.screensize
  }

}

export const mutations = {




  SET_SMALLSCREEN(state, small) {
    state.smallscreen = small;
  },

  SET_SCREENSIZE(state, screensize) {
    state.screensize = screensize;
  },

  SET_XLSCREEN(state, xl) {
    state.xlscreen = xl;

  }
}
