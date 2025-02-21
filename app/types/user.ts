interface User {
  role: "user" | "admin";
  id: string;
  name: string;
  email: string;
  paswsword: string;
}

export default User;
