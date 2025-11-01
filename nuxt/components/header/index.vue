<template>
  <header class="header">
    <ColorModePicker />
    <ProfileButton
      v-if="isScreenLarge"
      title="Меню"
      @click="$emit('openMenuMobile')"
    />
    <ProfileBlock />
  </header>
</template>

<script setup>
import { useResizeLarge } from "~/composables/useResizeLarge";
const { isScreenLarge } = useResizeLarge();

const emit = defineEmits(["openMenuMobile"]);
</script>

<style scoped lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-left: 76px;
  height: var(--header-height);

  @media (max-width: 1023px) {
    padding-left: 10px;
    padding-right: 10px;
  }

  &__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding-left: 76px;
  }
}
</style>
