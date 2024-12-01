function signUpUser(firstName, lastName) {
  return new Promise((resolve) => {
    const person = (firstName, lastName) => new (class {
      constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
      }
    })(firstName, lastName);
    resolve(person(firstName, lastName));
  });
}
export default signUpUser;
