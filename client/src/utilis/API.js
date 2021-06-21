import axios from "axios";
const API = ("dotenv")

export default{
    getBook: function (query){
        return axios.get('https://www.googleapis.com/books/v1/volumes/zyTCAlFPjgYC?key=yourAPIKey');
    },

    deleteBook: function (id){
        return axios.delete("/api/books/" + id).then(result => result.data);
    
    },
}