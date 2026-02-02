//User view paths
export const routes = {
  "/regist": "./views/regist.html",
  "/login": "./views/login.html",
  "/taskForm": "./views/taskForm.html",
  "/taskList": "./views/taskList.html",
  "/users": "./views/users.html",
};

export const userRoutes = new Set([
  routes["/regist"],
  routes["/taskList"],
  routes["./events/:id"],
  routes["./events/:id/edit"],
  routes["/users"],
]);
