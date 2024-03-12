function handleResponseFromAPI(promise) {
  promise.then(() => ({ body: 'success', status: 200 }));

  promise.catch(() => '');

  promise.finally(() => {
    console.log('Got a response from the API');
  });
}
export default handleResponseFromAPI;
