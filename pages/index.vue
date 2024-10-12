<template>
  <div class="addUser">
    <h1>Add user</h1>
    <form class="addUser__form" @submit.prevent="handleSubmit">
      <div class="addUser__field">
        <label for="firstName">First Name</label>
        <input type="text" v-model="firstName" id="firstName" required />
      </div>
      <div class="addUser__field">
        <label for="lastName">Last Name</label>
        <input type="text" v-model="lastName" id="lastName" required />
      </div>
      <div class="addUser__field">
        <label for="avatarUrl">Avatar URL</label>
        <input type="text" v-model="avatarUrl" id="avatarUrl" required />
      </div>
      <div class="addUser__button"><button type="submit">Update Details</button></div>
    </form>
  </div>
</template>

<script setup>
const firstName = ref("");
const lastName = ref("");
const avatarUrl = ref("");

const handleSubmit = () => {
  console.log("User added:", {
    firstName: firstName.value,
    lastName: lastName.value,
    avatarUrl: avatarUrl.value,
  });
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: #e3e2e2;
  font-family: "Roboto", sans-serif;
}

.addUser {
  max-width: 800px;
  margin: 0 auto;
  margin-top: 5rem;
  padding: 0 1rem;
}

.addUser h1 {
  margin-bottom: 1rem;
  font-weight: 400;
  font-size: 1.5rem;
}

.addUser__form {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  background-color: #fff;
  padding: 2rem 1rem;
  border-radius: 3px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
}

.addUser__field {
  display: flex;
  flex-direction: column;
}

.addUser__field label {
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
}

.addUser__field input {
  margin-bottom: 1rem;
  padding: 0.5rem 0.7rem;
  border-radius: 5px;
  border: 1px solid #ccc;
  outline: none;
  transition: all 0.3s ease;
}

.addUser__field input:focus {
  border-color: #b4b4b4;
  box-shadow: 0 0 5px rgba(150, 150, 150, 0.5);
}

.addUser__button {
  grid-column: span 1;
  width: 100%;
  display: inline-block;
  margin-top: 5rem;
}

.addUser__button button {
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

.addUser__button button:hover {
  background-color: #3e6f4f;
}

@media (min-width: 768px) {
  .addUser {
    padding: initial;
  }

  .addUser h1 {
    font-size: 1.9rem;
  }

  .addUser__form {
    grid-template-columns: 1fr 1fr;
    padding: 5rem 2rem 1rem 2rem;
  }

  .addUser__button {
    grid-column: span 2;
    margin-top: 1rem;
    justify-self: center;
  }

  .addUser__button button {
    width: initial;
  }
}
</style>
