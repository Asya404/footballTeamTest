<template>
  <div class="usersList">
    <h1>Users List</h1>
    <ul class="usersList__list">
      <header class="usersList__header">
        <div class="usersList__search">
          <input type="text" placeholder="Search for users..." class="usersList__input" v-model="searchInput" />
          <span>🔍</span>
        </div>
        <button class="usersList__button" @click="addUser">+ Add User</button>
      </header>
      <div class="usersList__titles">
        <div>Avatar</div>
        <div>Full Name</div>
        <div>Action</div>
      </div>
      <li v-for="user in paginatedUsers" :key="user.id">
        <img class="usersList__avatar" :src="user.avatar" :alt="user.first_name" />
        <div class="usersList__name">{{ `${user.first_name} ${user.last_name}` }}</div>
        <div class="usersList__action">Edit/Delete</div>
      </li>
    </ul>
    <div class="pagination">
      <button @click="changePage(currentPage - 1)" :disabled="currentPage === 1">«</button>
      <button v-for="page in totalPages" :key="page" @click="changePage(page)" :class="{ active: currentPage === page }">
        {{ page }}
      </button>
      <button @click="changePage(currentPage + 1)" :disabled="currentPage === totalPages">»</button>
    </div>
  </div>
</template>

<script setup>
import { useUserStore, fetchUsers } from "@/store/store";
const store = useUserStore();
const router = useRouter();

onMounted(async () => {
  await fetchUsers(store);
});

const currentPage = ref(1);
const usersPerPage = 3;
const searchInput = ref("");

const filteredUsers = computed(() => {
  return store.users.filter((user) => {
    const fullName = `${user.first_name} ${user.last_name}`.toLowerCase();
    return fullName.includes(searchInput.value.toLowerCase());
  });
});

const totalPages = computed(() => Math.ceil(store.users.length / usersPerPage));

const paginatedUsers = computed(() => {
  const start = (currentPage.value - 1) * usersPerPage;
  return filteredUsers.value.slice(start, start + usersPerPage);
});

const changePage = (page) => {
  if (page > 0 && page <= totalPages.value) currentPage.value = page;
};

const addUser = () => {
  router.push("/users/new");
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

h1 {
  margin-bottom: 1rem;
  font-weight: 400;
  font-size: 1.5rem;
}

@media (min-width: 768px) {
  h1 {
    font-size: 1.9rem;
  }
}
</style>

<style scoped>
.usersList {
  max-width: 800px;
  margin: 5rem auto 0;
  padding: 0 1rem;
}

.usersList__list {
  list-style: none;
  background: #fff;
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
  background: #f5f5f5;
  padding: 0.5rem 2rem 0.5rem 0.5rem;
  border: none;
  border-radius: 3px;
  width: 100%;
  transition: all 0.3s ease;
}

.usersList__input:focus {
  outline: none;
  border-color: #b4b4b4;
  box-shadow: 0 0 5px rgba(150, 150, 150, 0.5);
}

.usersList__search span {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
}

.usersList__button {
  background: #569067;
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
  background: #f5f5f5;
}

.pagination {
  display: flex;
  justify-content: flex-start;
  margin-top: 1rem;
}

.pagination button {
  background: #fff;
  border: none;
  padding: 0.5rem 0.7rem;
  cursor: pointer;
  margin: 0;
  transition: all 0.3s ease;
}

.pagination button:hover {
  background: #f5f5f5;
}

.pagination button.active {
  background: #569067;
  color: #fff;
}

.pagination button:disabled {
  background: #f5f5f5;
  cursor: not-allowed;
}
</style>
