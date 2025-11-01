<template>
  <form class="form-auth" @submit.prevent="submitRegisterForm">
    <FormTitle title="Регистрация" />

    <!-- Поле ввода имени -->
    <FormInput
      type="text"
      name="firstNameField"
      placeholder="Имя"
      v-model:value="v$.firstNameField.$model"
      :error="v$.firstNameField.$errors"
      @clearInput="firstNameField = null"
      @click="clearErrorMessage"
    />

    <!-- Поле ввода фамилии -->
    <FormInput
      type="text"
      name="lastNameField"
      placeholder="Фамилия"
      v-model:value="v$.lastNameField.$model"
      :error="v$.lastNameField.$errors"
      @clearInput="lastNameField = null"
      @click="clearErrorMessage"
    />

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

    <!-- Поле ввода пароль еще раз -->
    <FormInput
      type="password"
      name="confirmPasswordField"
      placeholder="Повторите пароль"
      v-model:value="v$.confirmPasswordField.$model"
      :error="v$.confirmPasswordField.$errors"
      @clearInput="confirmPasswordField = null"
      @click="clearErrorMessage"
    />

    <!-- Появляющийся текст ошибки -->
    <FormErrorMessage
      v-if="existUserEmailErrorMessage"
      :text="existUserEmailErrorMessage"
    />

    <!-- Кнопка Сабмит -->
    <FormSubmit
      :isFromEmpty="isFromEmpty"
      :isValid="isValid.length"
      :isLoading="isLoading"
      text="Регистрация"
    />
  </form>
</template>

<script setup>
import { useVuelidate } from "@vuelidate/core";
import {
  helpers,
  required,
  minLength,
  email,
  sameAs,
} from "@vuelidate/validators";

const router = useRouter();

const isLoading = ref(false);
const firstNameField = ref(null);
const lastNameField = ref(null);
const emailField = ref(null);
const passwordField = ref(null);
const confirmPasswordField = ref(null);

const existUserEmailErrorMessage = ref(null);

// Валидация
const rules = computed(() => ({
  firstNameField: {
    required: helpers.withMessage("Укажите имя", required),
    minLength: helpers.withMessage("Не менее 2 символов", minLength(2)),
  },
  lastNameField: {
    required: helpers.withMessage("Укажите фамилию", required),
    minLength: helpers.withMessage("Не менее 2 символов", minLength(2)),
  },
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
  confirmPasswordField: {
    required: helpers.withMessage("Подтвердите пароль", required),
    sameAsPassword: helpers.withMessage(
      "Пароли не совпадают",
      sameAs(passwordField.value)
    ),
  },
}));

const v$ = useVuelidate(rules, {
  firstNameField,
  lastNameField,
  emailField,
  passwordField,
  confirmPasswordField,
});

const isFromEmpty = computed(
  () =>
    !firstNameField.value ||
    !lastNameField.value ||
    !emailField.value ||
    !passwordField.value ||
    !confirmPasswordField.value
);

const isValid = computed(() => v$.value.$errors);

// Сабмит
const submitRegisterForm = async () => {
  isLoading.value = false;

  const registerData = {
    firstName: firstNameField.value.trim(),
    lastName: lastNameField.value.trim(),
    email: emailField.value.trim(),
    password: passwordField.value.trim(),
  };

  try {
    isLoading.value = true;

    const { status } = await useFetch("/api/auth/register", {
      method: "POST",
      body: JSON.stringify(registerData),
    });

    if (status.value === "error") {
      // Вносим запись в реф ошибки, что такая почта уже используется
      existUserEmailErrorMessage.value =
        "Пользователь с такой почтой уже существует.";
    }

    if (status.value === "success") {
      router.push("/dashboard");

      // Очищаем поля формы
      firstNameField.value = null;
      lastNameField.value = null;
      emailField.value = null;
      passwordField.value = null;
      confirmPasswordField.value = null;
    }
  } catch (error) {
    console.log("Ошибка регистрации - ", error);
  } finally {
    isLoading.value = false;
  }
};
</script>
