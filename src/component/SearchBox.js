import React, { useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector} from 'react-redux'

const SearchBox = () => {
    const [keyword,setKeyword] = useState("");// 검색어 저장하는 state
    let dispatch = useDispatch();

    const searchByName=(event)=>{
        //preventDefault : 창이 새로고침 안되도록 하기
        event.preventDefault();  
        dispatch({type:"SEARCH_BY_NAME" , payload :{keyword}});
      
        console.log(keyword);
    }

  return (
    <Form onSubmit={searchByName}>
        <div className='searchByName'>
            <Row>
                <Col lg ={10}>
                    <Form.Label>검색 목록</Form.Label>   
                    <Form.Control type="text" placeholder="이름을 입력해주세요."  
                    onChange={(e)=>{setKeyword(e.target.value)}} value={keyword}/>
                </Col>
                <Col lg ={2}><Button variant="primary" type="submit" className='searchBtn'>검색</Button></Col>
            </Row>
        </div>
    </Form>
  )
}

export default SearchBox