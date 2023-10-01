import { users } from "./constants.js";

export const getUserName = (userId) => users[userId].name;