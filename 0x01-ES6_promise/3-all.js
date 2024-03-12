import { uploadPhoto, createUser } from './utils.js';

function handleProfileSignup() {
  const promise1 = uploadPhoto();
  const promise2 = createUser();

  const prs = Promise.all([promise1, promise2]);
  const pr = prs.then((values) => {
    console.log(values[0].body, values[1].firstName, values[1].lastName);
  });

  const pr2 = prs.catch(() => {
    console.log('Signup system offline');
  });
  return (prs);
}

export default handleProfileSignup;
