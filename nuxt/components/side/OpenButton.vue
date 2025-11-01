<template>
  <div title="Панель меню - свернуть / развернуть" class="openButton">
    <button class="openButton__item" @click="$emit('toggleSideBar')">
      <IconCloseSidebar :class="{ openButton__close_active: !isSideBarOpen }" />
    </button>
  </div>
</template>

<script setup>
const { isSideBarOpen } = defineProps(["isSideBarOpen"]);
const emit = defineEmits(["toggleSideBar"]);
</script>

<style scoped lang="scss">
.openButton {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  max-width: 300px;
  height: var(--header-height);
  // border: 1px solid red;

  // @media (max-width: 1023px) {
  //   justify-content: center;
  //   max-width: 100%;
  //   // height: 40px;
  // }

  &__item {
    transition: 0.25s ease-in-out;

    // @media (max-width: 1023px) {
    //   transform: rotate(90deg);
    // }

    &:hover {
      opacity: 0.6;
    }
  }

  &__close {
    color: var(--text-color-primary);
    transition: 0.8s ease-in-out;

    // @media (max-width: 1023px) {
    //   width: 30px;
    //   height: 30px;
    // }

    &_active {
      transform: rotate(180deg);
    }
  }
}
</style>
