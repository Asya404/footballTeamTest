<template>
  <div class="editUser">
    <h1>Edit User</h1>
    <p class="editUser__description">Update the details of the selected user.</p>
    <form class="editUser__form">
      <div class="editUser__field">
        <label for="firstName">First Name</label>
        <input type="text" v-model="firstName" id="firstName" required />
      </div>
      <div class="editUser__field">
        <label for="lastName">Last Name</label>
        <input type="text" v-model="lastName" id="lastName" required />
      </div>
      <div class="editUser__field">
        <label for="avatarUrl">Avatar URL</label>
        <input type="text" v-model="avatarUrl" id="avatarUrl" required />
      </div>
      <div class="editUser__button">
        <button type="button" @click="handleSubmit">Save Changes</button>
      </div>
    </form>
  </div>
</template>

<script setup>
const route = useRoute();
const router = useRouter();
const userId = route.params.id;
console.log("User ID:", userId);
const userData = await $fetch(`https://reqres.in/api/users/${userId}`);

const firstName = ref(userData.data.first_name);
const lastName = ref(userData.data.last_name);
const avatarUrl = ref(userData.data.avatar);

const handleSubmit = async () => {
  try {
    await $fetch(`https://reqres.in/api/users/${userId}`, {
      method: "PUT",
      body: {
        first_name: firstName.value,
        last_name: lastName.value,
        avatar: avatarUrl.value,
      },
    });
    await router.push("/users");
  } catch (error) {
    console.error("Error updating user:", error);
  }
};
</script>

<style scoped>
.editUser {
  max-width: 800px;
  margin: 0 auto;
  margin-top: 5rem;
  padding: 0 1rem;
}

.editUser__description {
  margin-bottom: 1rem;
  font-size: 1rem;
  color: #666;
}

.editUser__form {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  background-color: #fff;
  padding: 2rem 1rem;
  border-radius: 3px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
}

.editUser__field {
  display: flex;
  flex-direction: column;
}

.editUser__field label {
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
}

.editUser__field input {
  margin-bottom: 1rem;
  padding: 0.5rem 0.7rem;
  border-radius: 5px;
  border: 1px solid #ccc;
  outline: none;
  transition: all 0.3s ease;
}

.editUser__field input:focus {
  border-color: #b4b4b4;
  box-shadow: 0 0 5px rgba(150, 150, 150, 0.5);
}

.editUser__button {
  grid-column: span 1;
  width: 100%;
  display: inline-block;
}

.editUser__button button {
  width: 100%;
  display: inline-block;
  padding: 0.7rem 1rem;
  color: #fff;
  border: none;
  border-radius: 5px;
  background-color: #569067;
  cursor: pointer;
  transition: all 0.3s ease;
}

.editUser__button button:hover {
  background-color: #3e6f4f;
}
</style>
