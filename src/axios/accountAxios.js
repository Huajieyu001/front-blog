import http from "./httpUtils";


const apiLogin = async (obj) => {
    return http
        .post("/account/login", {
            ...obj,
        })
        .then(
            (response) => response,
            (error) => error
        );
};

const apiSignup = async (obj) => {
    return http
        .post("/account/signup", {
            ...obj,
        })
        .then(
            (response) => response,
            (error) => error
        );
};

const apiGetCode = async (obj) => {
    return http
        .get("/account/getCode", {
            params: {
                ...obj
            }
        })
        .then(
            (response) => response,
            (error) => error
        );
};

export { apiLogin, apiSignup, apiGetCode }