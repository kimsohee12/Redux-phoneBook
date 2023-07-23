import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';

function BasicExample() {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const dispatch = useDispatch();

  const addContact=(event)=>{
    event.preventDefault();                   // name:name,phoneNumber:phoneNumber
    dispatch({type : "ADD_CONTACT", payload : {name,phoneNumber}});
    setName("");
    setPhoneNumber("");
  }
  return (
    <Form onSubmit={addContact}>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>이름</Form.Label>
        <Form.Control type="text" placeholder="이름을 입력해주세요." onChange={(e)=>{setName(e.target.value)}} value={name}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formTel">
        <Form.Label>연락처</Form.Label>
        <Form.Control type="text" placeholder="연락처를 입력해주세요." onChange={(e)=>{setPhoneNumber(e.target.value)}} value={phoneNumber}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
      </Form.Group>
      <Button variant="primary" type="submit">
        추가 
      </Button>
    </Form>
  );
}

export default BasicExample;