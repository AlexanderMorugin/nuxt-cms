<template>
  <aside :class="['aside', { aside_active: isSideBarOpen }]">
    <!-- Кнопка свораяивающая сайдбар -->
    <SideOpenButton
      :isSideBarOpen="isSideBarOpen"
      @toggleSideBar="toggleSideBar"
    />

    <!-- Кнопки сайдбара -->
    <ul class="aside__list">
      <li>
        <SideButton
          :isSideBarOpen="isSideBarOpen"
          :isActive="true"
          title="Number One"
        />
      </li>
      <li>
        <SideButton :isSideBarOpen="isSideBarOpen" title="Number Two" />
      </li>
      <li>
        <SideButton :isSideBarOpen="isSideBarOpen" title="Number Three" />
      </li>
    </ul>
  </aside>
</template>

<script setup>
const isSideBarOpen = ref(false);

const toggleSideBar = () => (isSideBarOpen.value = !isSideBarOpen.value);
</script>

<style scoped lang="scss">
.aside {
  display: flex;
  flex-direction: column;
  gap: 36px;
  width: 100%;
  max-width: 86px;
  transition: 0.2s ease;
  padding-right: 24px;

  // @media (max-width: 1023px) {
  //   justify-content: flex-start;
  //   max-width: 100%;
  //   height: 86px;
  //   background: var(--border-color-inverse);
  //   overflow: hidden;
  // }

  &_active {
    width: 100%;
    max-width: 300px;

    // @media (max-width: 1023px) {
    //   max-width: 100%;
    //   height: fit-content;
    // }
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 10px;

    // @media (max-width: 1023px) {
    //   flex-direction: row;
    //   padding-left: 10px;
    //   padding-right: 10px;
    // }
  }
}
</style>
