import http from '../axios/httpUtils'

const apiMenuList = async ()=>{
    try{
        const data = await http.get('/menu/list').then(res => res, err => err)
        return data.data
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

export { apiMenuList, apiMenuAdd}