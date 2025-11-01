<template>
  <form class="form-auth" @submit.prevent="submitLoginForm">
    <FormTitle title="Логин" />

    <!-- Поле ввода почты -->
    <FormInput
      type="email"
      name="emailField"
      placeholder="Электронная почта"
      v-model:value="v$.emailField.$model"
      :error="v$.emailField.$errors"
      @clearInput="emailField = null"
      @click="clearErrorMessage"
    />

    <!-- Поле ввода пароль -->
    <FormInput
      type="password"
      name="passwordField"
      placeholder="Пароль"
      v-model:value="v$.passwordField.$model"
      :error="v$.passwordField.$errors"
      @clearInput="passwordField = null"
      @click="clearErrorMessage"
    />

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
