import { Client } from "./client";

const signupApi = async data => {
  console.log("api", data);
  // const { firstName, lastName, email, password } = data;
  const res = await Client.post("/users/signup", {
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    password: data.password
  });
  return res;
};

export { signupApi };
