import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    users: [],
    usersFetched: false,
  }),
});

export const fetchUsers = async (store) => {
  if (!store.usersFetched) {
    const response = await $fetch("https://reqres.in/api/users");
    store.users = response.data;
    store.usersFetched = true;
  }
};

export const addUser = (store, user) => {
  store.users.push(user);
};

export const updateUser = (store, userId, updatedUser) => {
  const index = store.users.findIndex((user) => user.id === userId);
  console.log(userId);
  if (index !== -1) {
    store.users[index] = { ...store.users[index], ...updatedUser };
  }
};

export const deleteUser = (store, userId) => {
  store.users = store.users.filter((user) => user.id !== userId);
};
