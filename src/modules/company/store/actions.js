const addCompany = ({ commit }, company) => {
  commit('ADD_COMPANY', company);
};

export default {
  addCompany,
};
