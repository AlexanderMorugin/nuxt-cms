<template>
  <button class="backButton" @click="$emit('goBack')">
    <IconArrowBack
      :class="['backButton__icon', { backButton__icon_black: blackArrow }]"
    />
  </button>
</template>

<script setup>
const { blackArrow = false } = defineProps(["blackArrow"]);
const emit = defineEmits(["goBack"]);
</script>

<style scoped lang="scss">
.backButton {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid var(--blue-primary);

  &__icon {
    color: var(--btn-arrow);
    transition: 0.25s ease all;

    &_black {
      color: var(--text-color-primary);
    }
    &:hover {
      color: var(--text-color-secondary);
    }
  }
}
</style>
