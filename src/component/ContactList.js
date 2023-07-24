import React, { useEffect, useState } from 'react'
import SearchBox from './SearchBox'
import ContactItem from './ContactItem'
import { useSelector } from 'react-redux'

const ContactList = () => {
    const {contactList,keyword} = useSelector(state=>state);
    //const contactList = useSelector(state => state.contactList);
    //const keyword = useSelector(state => state.keyword);
    
    const [filteredList,setFilteredList] = useState([]);
    
    useEffect(()=>{
        
        if(keyword !== ""){//검색창에 키워드가 입력 됐을때
            //contactList: 목록 (리덕스 라이브러리 사용해서 reducer안에 initailState에 배열로 저장해 놓은 값)
            //                                          includes: 특정 요소를 포함하고 있는지 확인
            let list = contactList.filter((item)=>item.name.includes(keyword));
            //필터한 내용이 담기는 useState 배열
            setFilteredList(list)
            console.log("list",list);
        }else{ 
            let list = contactList
            // 키워드 검색 안했다면 contactList가 필터리스트에 담김 
            setFilteredList(list)
            console.log("filteredList",list);
            
        }
    },[keyword])

  return (
    <div>
        <SearchBox/>
        <div>
        {filteredList.map((item,index)=>(<ContactItem key={index} item={item}/>))}

        </div>
    </div>
  )
}

export default ContactList