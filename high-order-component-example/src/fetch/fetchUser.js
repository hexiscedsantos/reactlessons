import instance from './axiosClient';

const fetchUser = async (userId) => {
  const { data : { name, html_url : url  }} = await instance.get(`/users/${userId}`);

  return { name, url };
};

const queryUsers = async (filter) => {
  var response = await instance.get(`/search/users?q=${filter}+in:login`);
  return response;
}

export default {
  fetchUser,
  queryUsers
};
