import React from 'react'
import { Col, Row } from 'react-bootstrap'

const ContactItem = ({item}) => {
  return (
        <Row>
            <Col lg ={2}><img width={50} src='https://i1.sndcdn.com/avatars-000373844735-9n06kq-t500x500.jpg'/></Col>
            <Col lg ={10}>
                <div>{item.name}</div>
                <div>{item.phoneNumber}</div>
            </Col>
        </Row>
  )
}

export default ContactItem