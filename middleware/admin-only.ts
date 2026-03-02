export default defineNuxtRouteMiddleware(() => {
  const isAdmin = useAdmin();
  const isAuthenticated = useAuthenticated();

  if (!isAuthenticated.value) {
    return navigateTo('/login');
  }
  if (!isAdmin) {
    return navigateTo('/');
  }
});
