<template>
  <button @click="$emit('clearInput')" class="clearInput">
    <IconClearInput class="clearInput__icon" />
  </button>
</template>

<script setup>
const emit = defineEmits(["clearInput"]);
</script>

<style scoped lang="scss">
.clearInput {
  position: absolute;
  top: 0;
  right: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 100%;

  &__icon {
    width: 25px;
    height: 100%;
    color: var(--text-color-secondary);
    transition: 0.25s ease all;

    &:hover {
      color: var(--btn-bg-primary);
    }
  }
}
</style>
