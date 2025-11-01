<template>
  <section
    :class="['sideBarMobile', { sideBarMobile_active: isMenuMobileOpen }]"
  >
    <!-- Кнопки сайдбара -->
    <ul class="sideBarMobile__list">
      <li>
        <SideButton isSideBarOpen="true" isActive="true" title="Number One" />
      </li>
      <li>
        <SideButton isSideBarOpen="true" title="Number Two" />
      </li>
      <li>
        <SideButton isSideBarOpen="true" title="Number Three" />
      </li>
    </ul>
  </section>
</template>

<script setup>
const { isMenuMobileOpen } = defineProps(["isMenuMobileOpen"]);
</script>

<style scoped lang="scss">
.sideBarMobile {
  width: 100%;
  height: 0;
  background: var(--bg-inverse-secondary);
  transition: 0.5s ease;
  overflow: hidden;

  &_active {
    height: 200px;
    padding: 20px 10px;
  }

  &__list {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
}
</style>
