import axios from "axios";


const favoriteApi= axios.create({

    baseURL: "http://localhost:3001",
})

export default favoriteApi