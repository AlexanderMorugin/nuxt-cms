<template>
  <h2 class="formTitle">{{ title }}</h2>
</template>

<script setup>
const { title } = defineProps(["title"]);
</script>

<style scoped lang="scss">
.formTitle {
  font-family: "Inter-Bold", sans-serif;
  font-size: 32px;
  color: var(--text-color-primary-active);
}
</style>
