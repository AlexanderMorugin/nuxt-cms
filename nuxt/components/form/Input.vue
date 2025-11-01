<template>
  <div class="form-field">
    <input
      :type="type"
      :id="name"
      :name="name"
      :placeholder="placeholder"
      :value="value"
      @input="updateValue"
      :class="['form-input', { 'form-input-warning': error.length }]"
    />

    <!-- Показывается ошибка, если таковая имеется -->
    <span v-for="item in error" :key="item.$uid" class="form-input-error">{{
      item.$message
    }}</span>

    <!-- Очистка инпута по нажатию на крестик -->
    <FormClear v-if="value" @click="$emit('clearInput')" />
  </div>
</template>

<script setup>
const { label, type, name, placeholder, value, error } = defineProps([
  "label",
  "type",
  "name",
  "placeholder",
  "value",
  "error",
]);

const emit = defineEmits(["update:value", "clearInput"]);

const updateValue = (e) => emit("update:value", e.target.value);
</script>
