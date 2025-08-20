import http from "./httpUtils";

const apiArticleAdd = async (obj) => {
    return http
        .post("/article", {
            ...obj,
        })
        .then(
            (response) => response,
            (error) => error
        );
};

const apiArticleList = async (menuId, pageNum, pageSize) => {
    try {
        const data = await http.get("/article/list", {
            params: {
                menuId,
                pageNum,
                pageSize,
            }
        });

        return data.data;
    } catch (ex) {
        console.log(ex);
    }
};

const apiArticleGet = async (id) => {
    const data = await http.get("/article", {
        params:{
            id
        }
    })

    return data
}

export { apiArticleAdd, apiArticleList, apiArticleGet };
