import { writable } from 'svelte/store';

export const loginStore = writable([{email:"",password:""}]);
export const registerStore = writable([{data:""}]);