export const state = () => ({
  locales: ['en', 'nl'],
  locale: 'nl',
  n: 1,
  smallscreen: false,
  menu:false,
  readmore:false,
  nighttime:false,
  screensize: 0,
  projects:[],
  xlscreen: false,
  apiRoot: 'https://api.sandervanwettum.com/?rest_route=/',
  viewing: ''
})

//
// function checkReadmore(){
//   if (window.location.hash === '#read') {
//     return true;
//   }else{
//     return false;
//   }
// }
// this.$store.commit('SET_READMORE', true)


export const getters = {

  getprojects(state) {
    return state.projects
  },

  nighttime(state) {
    return state.nighttime
  },


  issmallscreen(state) {
    return state.smallscreen
  },

  isxlscreen(state) {
    return state.xlscreen
  },
  getscreensize(state) {
    return state.screensize
  },
  getmenu(state) {
    return state.menu
  },
  getreadmore(state) {
    return state.readmore
  },

  getviewing(state) {
    return state.viewing
  }

}

export const mutations = {

  SET_NIGHTTIME(state, toggle) {
    state.nighttime = toggle;
  },

  SET_PROJECTS(state, content) {
    state.projects = content;
  },

  SET_VIEWING(state, name) {
    state.viewing = name;
  },

  SET_READMORE(state, toggle) {
    state.readmore = toggle;
  },

  SET_MENU(state, toggle) {
    state.menu = toggle;
  },

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
