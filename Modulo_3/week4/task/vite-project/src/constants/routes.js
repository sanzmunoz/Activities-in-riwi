export const routes = {
  "/regist": "./views/regist.html",
  "/login": "./views/login.html",
  "/eventForm": "./views/eventForm.html",
  "/eventList": "./views/eventList.html",
  "/users": "./views/users.html",
};

export const userRoutes = new Set([
  routes["/regist"],
  routes["/eventList"],
  routes["./events/:id"],
  routes["./events/:id/edit"],
  routes["/users"],
]);