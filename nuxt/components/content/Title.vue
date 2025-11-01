<template>
  <h1 class="contentTitle">{{ title }}</h1>
</template>

<script setup>
const { title } = defineProps(["title"]);
</script>

<style scoped lang="scss">
.contentTitle {
  font-family: "Inter-Bold", sans-serif;
  font-size: 32px;
  color: var(--text-color-primary);
}
</style>
