export default function handleResponseFromAPI(promise) {
  promise
    // eslint-disable-next-line no-unused-vars
    .then((response) => {
      console.log('Got a response from the API');
      return {
        status: 200,
        body: 'success',
      };
    })
    // eslint-disable-next-line no-unused-vars
    .catch((error) => new Error());
}
