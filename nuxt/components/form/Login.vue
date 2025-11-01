<template>
  <form class="form-auth" @submit.prevent="submitLoginForm">
    <FormTitle title="Логин" />

    <FormInput
      label="Электронная почта"
      type="email"
      name="emailField"
      placeholder="example@email.com"
      v-model:value="v$.emailField.$model"
      :error="v$.emailField.$errors"
      @clearInput="emailField = null"
      @click="clearErrorMessage"
    />

    <!-- Поле ввода почты -->
    <!-- <div class="form-field">
      <input
        type="email"
        id="emailField"
        name="emailField"
        placeholder="Почта"
        v-model.lazy="v$.emailField.$model"
        :class="[
          'form-input',
          { 'form-input-warning': v$.emailField.$errors.length },
        ]"
      /> -->
    <!-- Показывается ошибка, если таковая имеется -->
    <!-- <span
        v-for="item in v$.emailField.$errors"
        :key="item.$uid"
        class="form-input-error"
        >{{ item.$message }}</span
      > -->

    <!-- Очистка инпута по нажатию на крестик -->
    <!-- <FormClear v-if="emailField" @clearInput="emailField = null" /> -->
    <!-- </div> -->

    <!-- Поле ввода пароль -->
    <div class="form-field">
      <input
        type="password"
        id="passwordField"
        name="passwordField"
        placeholder="Пароль"
        v-model="v$.passwordField.$model"
        :class="[
          'form-input',
          { 'form-input-warning': v$.passwordField.$errors.length },
        ]"
      />
      <!-- Показывается ошибка, если таковая имеется -->
      <span
        v-for="item in v$.passwordField.$errors"
        :key="item.$uid"
        class="form-input-error"
        >{{ item.$message }}</span
      >
      <!-- Очистка инпута по нажатию на крестик -->
      <FormClear v-if="passwordField" @clearInput="passwordField = null" />
    </div>

    <!-- Кнопка Сабмит -->
    <FormSubmit
      :isFromEmpty="isFromEmpty"
      :isValid="isValid.length"
      :isLoading="isLoading"
      text="Войти"
    />
  </form>
</template>

<script setup>
import { useVuelidate } from "@vuelidate/core";
import { helpers, required, minLength, email } from "@vuelidate/validators";

const router = useRouter();

const isLoading = ref(false);

const emailField = ref(null);
const passwordField = ref(null);

// Валидация
const rules = computed(() => ({
  emailField: {
    required: helpers.withMessage("Укажите почту", required),
    email: helpers.withMessage("Введите корректную почту", email),
  },
  passwordField: {
    required: helpers.withMessage("Укажите пароль", required),
    minLength: helpers.withMessage(
      "Пароль должен быть не менее 6 символов",
      minLength(6)
    ),
  },
}));

const v$ = useVuelidate(rules, {
  emailField,
  passwordField,
});

const isFromEmpty = computed(() => !emailField.value || !passwordField.value);

const isValid = computed(() => v$.value.$errors);

// Сабмит
const submitLoginForm = async () => {
  // const { login } = useAuth();

  isLoading.value = true;

  const loginData = {
    email: emailField.value.trim(),
    password: passwordField.value.trim(),
  };

  try {
    // await login(loginData);

    // router.push("/dashboard");

    console.log(loginData);
  } catch (error) {
    console.log("Login.vue-error: ", error);
  } finally {
    isLoading.value = false;
  }
};
</script>
