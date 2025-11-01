<template>
  <div class="form-field">
    <label :for="name" class="form-label">{{ label }}</label>

    <input
      :type="type"
      :id="name"
      :name="name"
      :placeholder="placeholder"
      :value="value"
      @input="updateValue"
      class="form-input"
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
const { label, type, name, placeholder, value, error, lastInput } = defineProps(
  ["label", "type", "name", "placeholder", "value", "error", "lastInput"]
);

const emit = defineEmits(["update:value", "clearInput"]);

const updateValue = (e) => emit("update:value", e.target.value);
</script>
