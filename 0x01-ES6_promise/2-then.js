export default function handleResponseFromAPI(promise) {
  promise
    .then(() => ({ status: 200, body: 'success' }))
    .catch((error) => error)
    .finally(() => {
      console.log('Got a response from the API');
    });
}
