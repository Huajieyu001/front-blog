import http from '../axios/httpUtils'

const apiMenuList = async ()=>{
    try{
        return await http.get('/menu/list').then(resp => resp, err => err)
    }
    catch(ex){
        console.log(ex)
    }
}

const apiMenuAdd = async (obj)=>{
    return await http.post('/menu/add', {
        ...obj
    }).then(
        resp => resp,
        err => err
    );
}

const apiMenuUpdate = async(obj)=>{
    return await http.post('./menu/update', {
        ...obj
    }).then(resp=>resp, err=>err);
}

const apiMenuDelete = async(obj)=>{
    return await http.post('./menu/delete', {
        ...obj
    }).then(resp=>resp, err=>err);
}

export { apiMenuList, apiMenuAdd, apiMenuUpdate, apiMenuDelete}