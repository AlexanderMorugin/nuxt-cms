export default () => {
  const toast = useToast();
  const router = useRouter();

  // Логин пользователя
  const login = async (loginData) => {
    try {
      const data = await $fetch("/api/auth/login", {
        method: "POST",
        body: JSON.stringify(loginData),
      });

      console.log("useAuth-login-data: ", data);

      toast.success({ title: "Успешно!", message: "Вход в аккаунт выполнен." });
      router.push("/dashboard");
    } catch (error) {
      console.log("useAuth-login-error: ", error);
      toast.error({
        title: "Ошибка",
        message: "Имя пользователя или пароль неверные.",
      });
    }
  };

  return {
    login,
    useAuthToken,
    useAuthUser,
    getUser,
    initAuth,
  };
};
