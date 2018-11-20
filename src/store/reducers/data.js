const getlist = {
    data:[]
}

export default function dataList(state=getlist,action){
    const {type,payload} = action;
    switch(type){
        case 'getlist':
            return {...state,data:payload}
        default:
            return state
    }
}