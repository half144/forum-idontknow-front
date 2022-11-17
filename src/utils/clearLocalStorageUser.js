const clear = () => {
  localStorage.removeItem("u_token");
  localStorage.removeItem("u_user");
};

export default clear;
