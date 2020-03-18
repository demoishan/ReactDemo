export function getuser(id) {
    let requestOptions = {
        method: 'GET',
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    };

    return fetch("https://reqres.in/api/users/" + id, requestOptions)
        .then(res => res.json())
        .then(
            (result) => {
                return result;
            })
        .catch(
            (error) => {
                return error;
            }
        )
}

export function getuserlist(page, per_page) {
    let requestOptions = {
        method: 'GET',
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    };

    return fetch("https://reqres.in/api/users?page=" + page + "&per_page=" + per_page, requestOptions)
        .then(res => res.json())
        .then(
            (result) => {
                return result;
            })
        .catch(
            (error) => {
                return error;
            }
        )
}