export const useAdmin = () => {
  const authUser = useAuthUser();
  if (!authUser.value) {
    return false;
  }
  return authUser.value.roles.includes('ADMIN');
};
