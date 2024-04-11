export default function uploadPhoto(filename) {
  const promise = new Promise((reject) => {
    const err = new Error(`${filename} cannot be processed`);
    reject(err);
  });
  return promise;
}
