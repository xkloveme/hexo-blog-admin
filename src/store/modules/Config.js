// 配置
const state = {
  language: 'zh-CN',
  showEdit: false,
};
const mutations = {
  updateLanguage (state, language) {
    console.log('🐛 33', language)
    if (language) {
      state.language = language
    } else {
      state.language = state.language == 'en-US' ? 'en-US' : 'zh-CN';
    }
  },
  updateShowEdit (state, config) {
    state.showEdit = !state.showEdit;
  }
};
const getters= {
  getLanguage: (state) => {
      if (state.language) {
          return state.language
      }
      return {}
  }
}
const actions = {
  changeLanguage (context) {
    context.commit("updateLanguage");
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
