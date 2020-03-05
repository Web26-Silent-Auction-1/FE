import axios from "axios";

export const axiosWithAuth = () => {
    const token = window.localStorage.getItem('token')

    //return instance of axios
    return axios.create({
        // RETURN BASE URL FROM BACK END
        baseURL: 'https://bw-silent-auction-1.herokuapp.com/',
        headers: {
            authorization: token
        }
    })
}