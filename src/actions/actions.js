import axios from "axios";
//var searchImageAction = {
    export default function uploadLogoImage(formData){
    
     const url = "http://localhost:5001/";

    return axios.post(
        url,
        formData,
        { 
            headers: {'Content-Type': 'multipart/form-data'}
        }
    )
    .then(function (response) {
        return response;
    })
    .catch(function (error) {
        return error
    });
}
// export default  function login(){

// }
//}
//module.exports = searchImageAction;