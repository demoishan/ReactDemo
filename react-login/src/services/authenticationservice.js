export function authenticate(credentials) {
  let requestOptions = {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    body: JSON.stringify(credentials)
  };

  return fetch("https://reqres.in/api/register", requestOptions)
    .then(res => res.json())
    .then(
      (result) => {
        if (result && result.id) {
          localStorage.setItem('user', JSON.stringify(result));
        }
        return result;
      })
    .catch(
      (error) => {
        return error;
      }
    )
}

export function cleartoken() {
  localStorage.removeItem('user');
}
