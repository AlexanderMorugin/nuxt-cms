<template>
  <button
    class="authButton"
    :class="
      authState === 'login' ? 'authButton__login' : 'authButton__register'
    "
    @click="$emit('openAuth')"
  >
    {{ title }}
  </button>
</template>

<script setup>
const { authState, title } = defineProps(["authState", "title"]);
const emit = defineEmits(["openAuth"]);
</script>

<style scoped lang="scss">
.authButton {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 40px;
  font-family: "Inter-Regular", sans-serif;
  line-height: 1;
  font-size: 18px;
  color: var(--text-color-white);
  border-radius: 7px;
  border: 2px solid var(--blue-primary);

  &__login {
    background: var(--gradient-green-primary);
    transition: 0.25s ease;
    animation: slide-to-right 0.5s ease;

    &:hover {
      background: var(--gradient-green-secondary);
    }
  }

  &__register {
    background: var(--gradient-purple-primary);
    transition: 0.25s ease all;
    animation: slide-to-left 0.8s ease;

    &:hover {
      background: var(--gradient-purple-secondary);
    }
  }
}

@keyframes slide-to-right {
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }
  50% {
    opacity: 0;
    transform: translateX(-100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slide-to-left {
  0% {
    opacity: 0;
    transform: translateX(100%);
  }
  50% {
    opacity: 0;
    transform: translateX(100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
