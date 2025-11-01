<template>
  <div class="contentContainer">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.contentContainer {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 500px;
  border: 2px solid var(--border-color-inverse);
  border-radius: 15px;
  padding: 20px;
}
</style>
