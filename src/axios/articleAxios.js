import http from "./httpUtils";

const apiArticleAdd = async (obj) => {
    return http
        .post("/article/add", {
            ...obj,
        })
        .then(
            (response) => response,
            (error) => error
        );
};

const apiArticleList = async (menuId, pageNum, pageSize) => {
    try {
        return await http.get("/article/list", {
            params: {
                menuId,
                pageNum,
                pageSize,
            }
        });
    } catch (ex) {
        console.log(ex);
    }
};

const apiArticleGet = async (id) => {
    const data = await http.get("/article/get", {
        params:{
            id
        }
    })
    return data
}

const apiArticleDelete = async(id)=>{
    return http.post('/article/delete', {
        id
    }).then(resp=>resp, err=>err)
}

const apiArticleUpdate = async (obj) => {
    return http
        .post("/article/update", {
            ...obj,
        })
        .then(
            (response) => response,
            (error) => error
        );
};

export { apiArticleAdd, apiArticleDelete, apiArticleUpdate, apiArticleList, apiArticleGet };
