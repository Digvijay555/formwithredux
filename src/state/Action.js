// const saveData = (data)=>{
//     return (dispatch) =>{
//         dispatch({
//             type:"save",
//             payload:data
//         })
//     }
// }

const saveData = (data) =>{
    return{
        type:"save",
        payload:data
    }
}

export default saveData

