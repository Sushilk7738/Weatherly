import axios from 'axios'

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true,
    xsrfCookieName: 'csrftoken',
    xsrfHeaderName: 'X-CSRFToken',
})

export const getCsrfToken = async () => {
    const response = await api.get('/csrf/')
    return response.data.csrfToken
}

export const registerUser = (data)=> {
    return api.post('/register/', data)
}

export const loginUser = (data) =>{
    return api.post('/login/', data)
}

export const checkSession = ()=> {
    return api.get('/session-check/')
}

export const logoutUser = (csrfToken)=> {
    return api.post(
        '/logout/',
        {},
        {
            headers: {
                'X-CSRFToken': csrfToken,
            }
        }
    )
}



export default api;