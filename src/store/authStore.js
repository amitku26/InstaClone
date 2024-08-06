// import { create } from "zustand";

// const useAuthStore = create((set) => ({
// 	user: JSON.parse(localStorage.getItem("user-info")),
// 	login: (user) => set({ user }),
// 	logout: () => set({ user: null }),
// 	setUser: (user) => set({ user }),
// }));

// export default useAuthStore;

import { create } from 'zustand';

const useAuthStore = create((set) => {
  const getUserFromLocalStorage = () => {
    try {
      const user = localStorage.getItem('user-info');
      return user ? JSON.parse(user) : null;
    } catch (error) {
      console.error('Failed to parse user-info from localStorage:', error);
      return null;
    }
  };

  return {
    user: getUserFromLocalStorage(),
    login: (user) => {
      localStorage.setItem('user-info', JSON.stringify(user));
      set({ user });
    },
    logout: () => {
      localStorage.removeItem('user-info');
      set({ user: null });
    },
    setUser: (user) => {
      localStorage.setItem('user-info', JSON.stringify(user));
      set({ user });
    }
  };
});

export default useAuthStore;
