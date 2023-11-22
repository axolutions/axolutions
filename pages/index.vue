<template>
  <h1>Hello Axolutions</h1>
  <UAvatar
    src="https://avatars.githubusercontent.com/u/739984?v=4"
    alt="Avatar"
  />

  {{ count }}

  <UButton @click="chama">Clicar</UButton>
</template>

<script setup lang="ts">
const count: Ref<number> = ref(10);

const chama = () => {
  count.value += 5;
};
</script>
