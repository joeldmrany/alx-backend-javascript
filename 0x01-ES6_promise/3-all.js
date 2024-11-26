import { uploadPhoto, createUser } from "./utils.js"

export function handleProfileSignup() {
  const body = uploadPhoto.resolve.body;
  const firstname = creatUser.resolve.firstName;
  const lastname = creatUser.resolve.lastName;
  return new Promise((resolve, reject) => {
    if (true) {
      resolve(`${body} ${firstname} ${lastname}`);
    } else {
      reject(Error("Signup system offline"));
    }
  }
}
