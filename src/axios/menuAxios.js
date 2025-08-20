import http from '../axios/httpUtils'

const getMenus = async ()=>{
    try{
        const data = await http.get('/title/list').then(res => res, err => err)
        return data.data
    }
    catch(ex){
        console.log(ex)
    }
}

export {getMenus}