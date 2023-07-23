import React, { useEffect, useState } from 'react'
import SearchBox from './SearchBox'
import ContactItem from './ContactItem'
import { useSelector } from 'react-redux'

const ContactList = () => {
    const contactList = useSelector(state=>state.contactList)
    const keyword = useSelector(state=>state.keyword)
    const [filteredList,setFilteredList] = useState([])

    
    useEffect(()=>{
        if(keyword!== ""){//검색란에 키워드가 입력 됐을때
            let list = contactList.filter((item)=>item.name.includes(keyword));
            setFilteredList(list)
        }else{
            setFilteredList(contactList)
        }
        console.log(filteredList);
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