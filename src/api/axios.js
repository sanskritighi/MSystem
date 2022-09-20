import axios from "axios";


export default axios.create(
    {
        baseURL:'https://whispering-depths-07276.herokuapp.com/api'
    }
);