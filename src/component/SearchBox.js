import React, { useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch} from 'react-redux'

const SearchBox = () => {
    const [keyword,setKeyword] = useState("");
    const dispatch = useDispatch();

    const searchByName=(event)=>{
        event.preventDefault();  
        dispatch({type:"SEARCH_BY_NAME" , payload :{keyword}});
        setKeyword("");
        console.log(keyword);
    }

  return (
    <Form onSubmit={searchByName}>
        <Row>
            <Col lg ={10}>
                <Form.Control type="text" placeholder="이름을 입력해주세요."  
                onChange={(e)=>{setKeyword(e.target.value)}} value={keyword}/>
            </Col>
            <Col lg ={2}><Button variant="primary" type="submit">검색</Button></Col>
        </Row>
    </Form>
  )
}

export default SearchBox