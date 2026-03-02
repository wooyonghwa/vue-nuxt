<template>
  <q-page padding>
    <div class="flex flex-center column q-pt-xl">
      <PageAuthTitle title="Login" />
      <PageAuthDescription description="Hello :)" />
      <FormLogin style="width: 400px" @success="handleLoginSuccess" />
    </div>
  </q-page>
</template>

<script setup lang="ts">
const handleLoginSuccess = async () => {
  const isAdmin = useAdmin();
  const redirect = isAdmin ? '/admin' : '/';
  await navigateTo(redirect);
};
</script>
