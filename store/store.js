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
