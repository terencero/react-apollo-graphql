const Query = {
  users: async (_, __, { dataSources }) => await dataSources.userApi.findAllUsers(),
};

module.exports = Query;
