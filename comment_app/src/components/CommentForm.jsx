import React, { useReducer, useRef } from 'react'
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { addComment } from '../redux/reducers/CommentSlice';
import {useSelector,useDispatch} from 'react-redux'

// 랜덤으로 고유값을 생성해주는 패키지
import {v4 as uuidv4} from 'uuid'

const CommentForm = () => {
    const writerRef = useRef();
    const contentRef = useRef();

    const dispatch = useDispatch();
    const data = useSelector((state)=>state.comment)
    console.log(data);
    
    const handleSumbit=()=>{
        dispatch(addComment({
            id: uuidv4(),
            writer : writerRef.current.value,
            content : contentRef.current.value
        }))
    }

  return (
    <Form>
        <Row className='g-2'>
            <Col lg='8'>
                <Form.Control type='text' placeholder='댓글 내용 작성' ref={contentRef}></Form.Control>
            </Col>
            <Col lg='4'>
                <Form.Control type='text' placeholder='작성자 이름' ref={writerRef}></Form.Control>
            </Col>
        </Row>
        <Row className='my-2'>
            <Col lg='12'>
                {/* w-숫자 : 너비값을 %로 지정(0, 25, 50, 75, 100) */}
                <Button className="w-100" variant="secondary" onClick={handleSumbit}>등록</Button>
            </Col>
        </Row>
    </Form>
  )
}

export default CommentForm