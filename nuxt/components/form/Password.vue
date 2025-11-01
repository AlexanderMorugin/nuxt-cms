<template>
  <form class="form-auth" @submit.prevent="submitPasswordForm">
    <!-- Поле ввода имени -->
    <div class="form-field">
      <input
        type="text"
        id="firstNameField"
        name="firstNameField"
        placeholder="Имя"
        v-model="v$.firstNameField.$model"
        :class="[
          'form-input',
          { 'form-input-warning': v$.firstNameField.$errors.length },
        ]"
      />
      <span
        v-for="item in v$.firstNameField.$errors"
        :key="item.$uid"
        class="form-input-error"
        >{{ item.$message }}</span
      >
    </div>

    <!-- Поле ввода фамилии -->
    <div class="form-field">
      <input
        type="text"
        id="lastNameField"
        name="lastNameField"
        placeholder="Фамилия"
        v-model="v$.lastNameField.$model"
        :class="[
          'form-input',
          { 'form-input-warning': v$.lastNameField.$errors.length },
        ]"
      />
      <span
        v-for="item in v$.lastNameField.$errors"
        :key="item.$uid"
        class="form-input-error"
        >{{ item.$message }}</span
      >
    </div>

    <!-- Поле ввода почты -->
    <div class="form-field">
      <input
        type="email"
        id="emailField"
        name="emailField"
        placeholder="Почта"
        v-model="v$.emailField.$model"
        :class="[
          'form-input',
          { 'form-input-warning': v$.emailField.$errors.length },
        ]"
      />
      <span
        v-for="item in v$.emailField.$errors"
        :key="item.$uid"
        class="form-input-error"
        >{{ item.$message }}</span
      >
    </div>

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
      <span
        v-for="item in v$.passwordField.$errors"
        :key="item.$uid"
        class="form-input-error"
        >{{ item.$message }}</span
      >
    </div>

    <!-- Поле ввода пароль еще раз -->
    <div class="form-field">
      <input
        type="password"
        id="confirmPasswordField"
        name="confirmPasswordField"
        placeholder="Повторите пароль"
        v-model="v$.confirmPasswordField.$model"
        :class="[
          'form-input',
          { 'form-input-warning': v$.confirmPasswordField.$errors.length },
        ]"
      />
      <span
        v-for="item in v$.confirmPasswordField.$errors"
        :key="item.$uid"
        class="form-input-error"
        >{{ item.$message }}</span
      >
    </div>

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

const submitRegisterForm = () => {
  isLoading.value = true;

  const data = {
    firstName: firstNameField.value,
    lastName: lastNameField.value,
    email: emailField.value,
    password: passwordField.value,
  };

  console.log("data - ", data);

  setTimeout(() => {
    isLoading.value = false;

    router.push("/dashboard");

    firstNameField.value = null;
    lastNameField.value = null;
    emailField.value = null;
    passwordField.value = null;
    confirmPasswordField.value = null;
  }, 2000);
};
</script>
