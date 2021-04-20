import Axios from 'axios'

// const login = (username, password) => {
//     let result = Axios.post('localhost:8000/users/login', {
//         username: username,
//         password: password
//       });

//     return result

// }

export async function login (username, password) {
    console.log('request : username : ' + username + 'password:'+password)
    let result = await Axios.post('http://127.0.0.1:8000/users/login', { username: username, password: password }, {
    headers: {
        'Content-Type': 'application/json'
    }
    });
    console.log(result)
    
    return result
}