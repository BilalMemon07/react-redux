


const setData =(Data)=>{
    return (dispatch)=>{
dispatch({type:'SETDATA', data:Data})

    }
}

export {
    setData
} 