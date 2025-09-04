import http from "./httpUtils";

const apiGeneratePostSignature = ()=>{
    return http.get('/oss/generatePostSignature').then(resp=>resp, err=>err);
}


export { apiGeneratePostSignature }