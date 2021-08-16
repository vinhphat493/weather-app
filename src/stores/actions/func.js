export const handleError = (errorCode) => {
  let error;
  switch (errorCode) {
    case 401:
      error =
        'It looks like the API did not authorize your request. Please ensure you have a valid API key.';
      break;
    case 404:
      error =
        'No results found. Check your query again or try searching for a different location.';
      break;
    case 429:
      error =
        "It looks like you've made too many requests to the server. Please wait a while before trying again.";
      break;
    default:
      error = 'Server error';
      break;
  }
  return error;
};
