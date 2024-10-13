import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    users: [],
  }),
});

export const fetchUsers = async (store) => {
  const response = await $fetch("https://reqres.in/api/users");
  store.users = response.data;
};

export const addUser = (store, user) => {
  store.users.push(user);
};
