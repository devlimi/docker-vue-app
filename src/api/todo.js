import http from '../api/http'

const getTodo = (id =null) => { //null은 기본값 셋팅
    return http.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
}
// const getToList =(id = null)=>{
//     return http.get(`localhost:7200//searches/${id}`)
// }

export { getTodo}