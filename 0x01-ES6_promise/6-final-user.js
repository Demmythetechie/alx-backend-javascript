import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const promise1 = signUpUser(firstName, lastName);
  const promise2 = uploadPhoto(fileName);
  return Promise.allSettled([promise1, promise2]).then((response) => {
    res.map((o) => ({
      status: o.status,
      value: o.status === 'fulfilled' ? o.value : String(o.reason),
    }))
  });
}
