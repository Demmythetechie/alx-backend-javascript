function signUpUser(firstName, lastName) {
  const first = 'firstName';
  const last = 'lastName';
  const promise = Promise.resolve({ [first]: firstName, [last]: lastName });
  return promise;
}
export default signUpUser;
