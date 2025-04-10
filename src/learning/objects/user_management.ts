import { User } from "./user.ts";

// ? Vytvoření instance třídy (objektu) User s názvem (const) adminUser
const adminUser = new User("admin", "admin", 55, "ales@blabla.cz");

console.log(adminUser.getUsername());
adminUser.logUser();
adminUser.setAge(28);
adminUser.logUser();
adminUser.internalMethod(); // * Můžu být volaná jen uvnitř objektu
// adminUser.role = "admin"; // * Property role je readonly, nemůžu měnit

console.log(adminUser.getEmail()); // * undefined
