
let initailState ={
    contactList:[],
    keyword:""
    
};

function reducer(state=initailState,action) {
    //object destructuring 문법 사용
    const {type,payload} = action
    switch (type) {
        case "ADD_CONTACT": //contactList 배열 안의 값은 유지하되,{name,phoneNumber}를 가져와서 더해줌

        // 기존 상태 객체를 변경하지 않고, 기존 상태를 복사한 후 새로운 상태를 생성하는 방식
//            return{...state,contactList:[...state.contactList,{name:payload.name,phoneNumber:payload.phoneNumber}]}
//            break;

        // state 객체를 직접 수정하는 방식-> push 사용하여 기존 contactList 배열에 직접 새 데이터를 추가하는 방식
            state.contactList.push({name:payload.name,
                                    phoneNumber : payload.phoneNumber});
            break;

        case "SEARCH_BY_NAME": 

        //state 객체를 복제하고, 새로운 keyword 값을 추가하여 새로운 상태 객체를 생성하는 방식
//        return { ...state,keyword : payload.keyword};
//      default:
//            return {...state}

            //state 객체의 keyword 속성에 직접 새로운 값을 할당하는 방식
            state.keyword = payload.keyword
            break;
    };
        return {...state};
}

export default reducer