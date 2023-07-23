
let initailState ={
    contactList:[],
    keyword:""
    
};

function reducer(state=initailState,action) {
    //object destructuring 문법 사용
    const {type,payload} = action
    switch (type) {
        case "ADD_CONTACT"://contactList 배열 안의 값은 유지하되,{name,phoneNumber}를 가져와서 더해줌
            return{...state,contactList:[...state.contactList,{name:payload.name,phoneNumber:payload.phoneNumber}]}
            break;
        case "SEARCH_BY_NAME": 
            state.keyword = payload.keyword
        default:
            return {...state}
    }
}

export default reducer