<template>
  <div class="usersList">
    <h1>Users List</h1>
    <ul class="usersList__list">
      <div class="usersList__header">
        <div class="usersList__search">
          <input type="text" placeholder="Search for users..." class="usersList__input" />
          <span>🔍</span>
        </div>
        <div class="usersList__button"><button>+ Add User</button></div>
      </div>
      <div class="usersList__titles">
        <div>Avatar</div>
        <div>Full Name</div>
        <div>Action</div>
      </div>
      <li v-for="user in users.data" :key="user.id">
        <img class="usersList__avatar" :src="user.avatar" :alt="user.avatar" />
        <div class="usersList__name">{{ user.first_name + " " + user.last_name }}</div>
        <div class="usersList__action">Edit/Delete</div>
      </li>
    </ul>
  </div>
</template>

<script setup>
const users = await $fetch("https://reqres.in/api/users");

console.log(users.data);
</script>

<style scoped>
.usersList {
  max-width: 800px;
  margin: 0 auto;
  margin-top: 5rem;
  padding: 0 1rem;
}

.usersList__list {
  list-style: none;
  background-color: #fff;
  padding: 2rem 1rem;
  border-radius: 3px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
}

.usersList__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.usersList__search {
  position: relative;
  width: 100%;
  max-width: 300px;
}

.usersList__input {
  background-color: #f5f5f5;
  padding: 0.5rem 2rem 0.5rem 0.5rem;
  border: none;
  border-radius: 3px;
  width: 100%;
}

.usersList__search span {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1rem;
}

.usersList__button button {
  background-color: #569067;
  padding: 0.6rem 1rem;
  border: none;
  border-radius: 30px;
  color: #fff;
  cursor: pointer;
}

.usersList__titles,
.usersList__list li {
  display: grid;
  grid-template-columns: 80px 1fr 100px;
  align-items: center;
  padding: 0.5rem 0;
}

.usersList__titles {
  font-weight: bold;
  margin-bottom: 1rem;
}

.usersList__avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
}

.usersList__list li:nth-child(odd) {
  background-color: #f5f5f5;
}

.usersList__list li:last-child {
  margin-bottom: 0;
}
</style>
