<template>
  <!-- Заглушка показывается вместо кнопки Сабмита, если валидация не прошла -->
  <div v-if="isFromEmpty || isValid" class="form-empty-button">
    <span class="form-empty-button-text">Заполните все поля</span>
  </div>

  <button v-else class="form-button form-button-active">
    <!-- Лоадер, крутится пока данные отправляются на сервер -->
    <LoaderButton v-if="isLoading" />
    <span v-else>{{ text }}</span>
  </button>
</template>

<script setup>
const { isFromEmpty, isValid, isLoading, text } = defineProps([
  "isFromEmpty",
  "isValid",
  "isLoading",
  "text",
]);
</script>
