import Axios from 'axios';

export const loggedIn = () =>{
    return {type: 'SIGN_IN'}
}

export const addUserAsync =  (val) => {
    return async (dipatch) => {
        const response = await Axios({
            method: "POST",
            data: {
                username: val.Name,
                email: val.Email,
                password: val.Password
            },
            withCredentials: true,
            url: 'http://localhost:3001/login',
        }).then((res) => {
            if(res.status===201) {loggedIn()}
            return res
        })
        console.log(response.data)
        dipatch({
            type: 'ADD_USER',
            payload: response.data,
        })
    }
}