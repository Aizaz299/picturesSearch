import axios from 'axios'

export default axios.create({
 
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization:'Client-ID aSYI81rvCekBxkVA9jQ6QKr_qXmPw3x7jeNtvRzO8ME'
        }

});