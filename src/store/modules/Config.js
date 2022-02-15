// 配置
const state = {
  language: 'zh-CN',
  theme: 'light',
  showEdit: false,
};
const mutations = {
  updateLanguage (state, language) {
    if (language) {
      state.language = language
    } else {
      state.language = state.language == 'en-US' ? 'en-US' : 'zh-CN';
    }
  },
  updateTheme (state, theme) {
    if (theme) {
      state.theme = theme
    } else {
      state.theme = state.theme == 'light' ? 'dark' : 'light';
    }
  },
  updateShowEdit (state, config) {
    state.showEdit = !state.showEdit;
  }
};
const getters = {
  getLanguage: (state) => {
    if (state.language) {
      return state.language
    }
    return {}
  },
  getTheme: (state) => {
    if (state.theme) {
      return state.theme
    }
    return {}
  }
}
const actions = {
  changeLanguage (context) {
    context.commit("updateLanguage");
  },
  changeTheme (context) {
    context.commit("updateTheme");
  },
  changeEditShow (context) {
    context.commit("updateShowEdit");
  }
};
export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
