<template>
  <div class="page-screen page-auth">
    <div :class="['auth', { auth_active: isRegister || isLogin }]">
      <!-- Левый блок -->
      <div class="auth__left">
        <h1
          :class="[
            'auth__title',
            { auth__title_active: isRegister || isLogin },
          ]"
        >
          Добро пожаловать!
        </h1>
        <p
          :class="['auth__text', { auth__text_active: isRegister || isLogin }]"
        >
          Чтобы войти в панель управления, войдите в свой профиль или
          зарегистрируйтесь.
        </p>

        <!-- Кнопки логина и регистрации -->
        <div v-if="!isRegister && !isLogin" class="auth__buttons">
          <!-- Кнопка логин -->
          <ProfileAuthButton
            authState="login"
            title="Войти"
            @openAuth="openLogin"
          />

          <!-- Кнопка регистрации -->
          <ProfileAuthButton
            authState="register"
            title="Регистрация"
            @openAuth="openRegister"
          />
        </div>

        <br /><br /><br /><br />
        <NuxtLink to="/dashboard">Dashboard</NuxtLink>
      </div>

      <!-- Правый блок, появляется только после нажатия кнопкок "Войти" или "Регистрация" -->
      <div class="auth__right">
        <!-- Кнопка "Назад", сворачиват правую часть и предоставлется доступ к кнопкам логина и регистрации -->
        <ProfileBackButton @goBack="goBack" />

        <!-- Форма Логин -->
        <FormLogin v-if="isLogin" />

        <!-- Форма Регистрации -->
        <FormRegister v-if="isRegister" />
      </div>
    </div>
  </div>
</template>

<script setup>
const isLogin = ref(false);
const isRegister = ref(false);

const openLogin = () => {
  (isLogin.value = true), (isRegister.value = false);
};
const openRegister = () => {
  (isRegister.value = true), (isLogin.value = false);
};
const goBack = () => {
  (isRegister.value = false), (isLogin.value = false);
};
</script>

<style scoped lang="scss">
.page-auth {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  padding-left: 24px;
  padding-right: 24px;

  @media (max-width: 767px) {
    align-items: flex-start;
    padding-left: 0;
    padding-right: 0;
  }
}
.auth {
  display: grid;
  grid-template-columns: 100% 0%;
  width: 100%;
  height: 90vh;
  border: 2px solid var(--btn-color-white);
  border-radius: 30px;
  overflow: hidden;
  transition: 0.5s ease;
  overflow-y: auto;

  @media (max-width: 767px) {
    height: 100vh;
    border: none;
    border-radius: 0;
  }

  &_active {
    grid-template-columns: 60% 40%;

    @media (max-width: 1023px) {
      grid-template-columns: 50% 50%;
    }

    @media (max-width: 767px) {
      grid-template-columns: 0% 100%;
    }
  }

  &__left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url("~/assets/images/gradient-bg.svg.png");
    background-repeat: no-repeat;
    padding: 40px;

    @media (max-width: 767px) {
      padding: 40px 20px 20px 20px;
    }
  }

  &__right {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 30px;
    background: var(--bg-inverse);
    padding: 40px;

    @media (max-width: 767px) {
      height: 100%;
      padding: 40px 20px;
    }
  }

  &__title {
    font-family: "Inter-Bold", sans-serif;
    font-size: 48px;
    color: var(--text-color-primary);
    text-align: center;

    @media (max-width: 767px) {
      font-size: 32px;

      &_active {
        opacity: 0;
      }
    }
  }

  &__text {
    display: block;
    width: 100%;
    height: 100px;
    font-family: "Inter-Regular", sans-serif;
    font-size: 18px;
    color: var(--text-color-primary);
    text-align: center;
    padding-top: 40px;

    @media (max-width: 767px) {
      &_active {
        opacity: 0;
      }
    }
  }

  &__buttons {
    display: flex;
    gap: 40px;
    padding-top: 40px;

    @media (max-width: 767px) {
      flex-direction: column;
      gap: 20px;
      padding-top: 80px;
    }
  }
}
</style>
