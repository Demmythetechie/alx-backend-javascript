import { uploadPhoto, createUser } from './utils';

function handleProfileSignup() {
  const promise1 = uploadPhoto();
  const promise2 = createUser();
  const pr = Promise.all([promise1, promise2]).then((values) => {
    console.log(values[0].body, values[1].firstName, values[1].lastName);
  });

  const pr2 = Promise.all([promise1, promise2]).catch(() => {
    console.log('Signup system offline');
  });
  return (pr, pr2);
}

export default handleProfileSignup;
