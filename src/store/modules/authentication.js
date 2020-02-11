const state = {
  logoutUrl: null
};

const getters = {
  logoutUrl: state => state.logoutUrl
};

const actions = {};

const mutations = {
  logoutUrl: (state, url) => {
    state.logoutUrl = url;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
