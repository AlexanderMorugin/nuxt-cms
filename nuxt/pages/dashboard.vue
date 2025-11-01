<template>
  <div>Dashboard</div>
  <div>{{ user }}</div>
  <div>{{ session }}</div>
</template>

<script setup>
const { user, session } = useUserSession();
</script>
