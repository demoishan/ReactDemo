import qs from 'qs';
import { baseUrl } from '../../Config/Config';

export function LoginPost(obj) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
        body: qs.stringify({
            username: obj.email,
            password: obj.password,
            "grant_type": "password"
        })
    };

    const result = fetch(baseUrl + "token", requestOptions)
        .then(async response => {
            const data = await response.json();
            console.log(data);
            localStorage.setItem('user', JSON.stringify(data))

        })
        .catch(error => {
            console.error('There was an error!');
            alert('Errorrrrr');
        });

    return result;
}

export function Logout1() {
    localStorage.removeItem('user')
    return true
}