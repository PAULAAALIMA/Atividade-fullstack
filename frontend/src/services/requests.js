import { BASE_URL } from '../constants/url'
import axios from 'axios'

const token = localStorage.getItem('token')

export const getPostAll = (salvarPost)=>{
    axios.get(`${BASE_URL}/post`, {headers:{'Authorization': token}})
    .then((response) =>{
        salvarPost(response.data)
    })
    .catch((err)=>{console.log(err.response)})
}

export const createComment = (postId, comment) =>{
    const body = {
        'postId': postId,
        'comment': comment

    }

axios.post(`${BASE_URL}/comments/create`, body, {headers: {Authorization: token}})
.then((response) => {
    getPostAll()

})

.catch((error)=>{
    console.error("Erro ao criar comentario: ", error)
})
}