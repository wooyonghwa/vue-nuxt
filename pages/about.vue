<!-- about 페이지: /about과 /about-us 경로를 모두 지원한다 -->
<template>
  <q-page padding>
    <div class="q-my-xl text-center">
      <div class="text-h4">About</div>
      <p class="q-mt-sm text-grey-8">
        Vue & Nuxt Mastery Class 웹은 Nuxt3로 만들어졌습니다.
      </p>
      <div class="column">
        <RouterLink to="/">RouterLink Home</RouterLink>
        <RouterLink to="https://www.naver.com">RouterLink Naver</RouterLink>
        <br />
        <NuxtLink prefetched-class="bg-yellow" to="/">NuxtLink Home</NuxtLink>
        <NuxtLink to="https://www.naver.com">NuxtLink Naver</NuxtLink>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
definePageMeta({
  alias: ["/about-us"],
});
</script>
