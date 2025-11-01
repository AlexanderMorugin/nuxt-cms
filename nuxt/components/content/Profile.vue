<template>
  <div class="contentProfile">
    <div class="contentProfile__title">
      <!-- Кнопка Назад -->
      <ProfileBackButton @goBack="goFromProfile" blackArrow="true" />
      <!-- Титл компонента h1 -->
      <ContentTitle title="Ваш профиль" />
    </div>
    <div class="contentProfile__forms">
      <ProfileEdit />
      <ProfilePassword />
      <ProfileDelete />
    </div>
  </div>
</template>

<script setup>
const dashboardStore = useDashboardStore();

const goFromProfile = () => {
  dashboardStore.closeProfile();
};
</script>

<style scoped lang="scss">
.contentProfile {
  display: flex;
  flex-direction: column;
  gap: 40px;

  &__title {
    display: flex;
    align-items: center;
    gap: 40px;
  }

  &__forms {
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
  }
}
</style>
