<template>
  <button
    :class="[
      'sideButton',
      { sideButton_open: isSideBarOpen },
      { sideButton_active: isActive },
    ]"
  >
    <IconDashboard
      :class="['sideButton__icon', { sideButton__icon_active: isActive }]"
    />
    <span
      v-if="isSideBarOpen"
      :class="[
        'sideButton__text',
        { sideButton__text_visible: isSideBarOpen },
        { sideButton__text_active: isActive },
      ]"
      >{{ title }}</span
    >
  </button>
</template>

<script setup>
const {
  isSideBarOpen,
  title,
  isActive = false,
} = defineProps(["isSideBarOpen", "title", "isActive"]);
</script>

<style scoped lang="scss">
.sideButton {
  display: grid;
  grid-template-columns: 24px 1fr;
  justify-items: left;
  align-items: center;
  gap: 8px;
  width: 100%;
  max-width: 49px;
  background: var(--btn-bg-primary);
  border: 2px solid var(--border-color-inverse);
  border-radius: 15px;
  padding: 10px;
  transition: 0.25s ease all;

  @media (max-width: 1023px) {
    border: 2px solid var(--border-color);
  }

  &:hover {
    background: var(--border-color);
  }

  &_active {
    background: var(--btn-bg-primary-active);
    cursor: auto;

    &:hover {
      background: var(--btn-bg-primary-active);
    }
  }

  &_open {
    max-width: 100%;
  }

  &__icon {
    width: 24px;
    height: 24px;
    color: var(--text-color-primary);

    &_active {
      color: var(--text-color-primary-active);
    }
  }

  &__text {
    font-family: "Inter-Medium", sans-serif;
    font-size: 16px;
    color: var(--text-color-primary);
    white-space: nowrap;
    transform: translateY(10px);
    opacity: 0;
    transition: 0.2s ease;

    &_active {
      color: var(--text-color-primary-active);
    }

    &_visible {
      transform: translateY(0);
      opacity: 1;
    }
  }
}
</style>
