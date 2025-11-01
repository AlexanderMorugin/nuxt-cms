<template>
  <div class="errorMessage">{{ text }}</div>
</template>

<script setup>
const { text } = defineProps(["text"]);
</script>

<style scoped lang="scss">
.errorMessage {
  font-family: "Inter-Regular", sans-serif;
  font-size: 18px;
  color: var(--text-color-red);
  text-align: center;
}
</style>
