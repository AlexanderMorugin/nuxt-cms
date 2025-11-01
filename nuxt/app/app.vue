<template>
  <div>
    <!-- <form class="form" @submit.prevent="submit">
      <input
        id="firstName"
        type="text"
        placeholder="firstName"
        v-model="formData.firstName"
      />
      <input
        id="lastName"
        type="text"
        placeholder="lastName"
        v-model="formData.lastName"
      />
      <input
        id="email"
        type="email"
        placeholder="email"
        v-model="formData.email"
      />
      <input
        id="password"
        type="text"
        placeholder="password"
        v-model="formData.password"
      /> -->
    <!-- <span v-if="errorDB">Пользователь стакой почтой уже существует.</span> -->

    <!-- <button type="submit">Submit</button> -->
    <!-- </form> -->

    {{ users }}
  </div>
</template>

<script setup>
const users = ref([]);
// const errorDB = ref(false);

const formData = ref({
  email: "",
  firstName: "",
  lastName: "",
  password: "",
});

const submit = async () => {
  const {
    data: user,
    status,
    // error,
  } = await useFetch("/api/user", {
    method: "POST",
    body: { ...formData.value },
  });

  console.log(status.value);

  // if (error) {
  //   errorDB.value = true;
  // }
};

const getUsers = async () => {
  const { data: usersFromDb, status } = await useFetch("/api/users", {
    method: "GET",
  });

  users.value = usersFromDb.value;

  console.log(status.value);
};

onMounted(() => {
  getUsers();
});
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  width: 100%;
  max-width: 400px;
}
</style>
