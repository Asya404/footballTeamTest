import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    users: [],
    usersFetched: false,
  }),
});

export const loadUsers = (store) => {
  const usersFromLS = JSON.parse(localStorage.getItem("users"));
  if (usersFromLS) {
    store.users = usersFromLS;
    store.usersFetched = true;
  }
};

export const fetchUsers = async (store) => {
  if (!store.usersFetched) {
    const response = await $fetch("https://reqres.in/api/users");
    store.users = response.data;
    localStorage.setItem("users", JSON.stringify(store.users));
    store.usersFetched = true;
  }
};

export const addUser = (store, user) => {
  store.users.unshift(user);
  localStorage.setItem("users", JSON.stringify(store.users));
};

export const updateUser = (store, userId, updatedUser) => {
  const index = store.users.findIndex((user) => user.id === userId);
  if (index !== -1) {
    store.users[index] = { ...store.users[index], ...updatedUser };
    localStorage.setItem("users", JSON.stringify(store.users));
  }
};

export const deleteUser = (store, userId) => {
  store.users = store.users.filter((user) => user.id !== userId);
  localStorage.setItem("users", JSON.stringify(store.users));
};
