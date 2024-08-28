import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import axios from "axios";
import Form from "react-bootstrap/Form";
import { InputGroup, FormControl } from 'react-bootstrap';


const ProductDetails = () => {
  /*
    url 파라미터 방식으로 전달받은 값을 가져올 때, useParams를 사용한다
    쿼리 스트링을 사용할 때, useSearchParmas()를 사용한다!


    실습1) axios를 활용하여 상품상세정보를 가진 url로 데이터를 요청하시오.
      (넘겨받은 상품id 활용)

    실습2) 받아온 정보를 보관하는 state에 저장하시오

    실습3) state에 저장된 정보를 화면에 출력하시오.
      (이미지경로, 브랜드, 상품명, 가격, 옵션메뉴)
          * 옵션메뉴는 비워져있는 경우 -> 구매수량 UI
                      데이터가 있는경우 -> Bootstrap의 Forms에 있는 Select컴포넌트로 출력
   */

  const { id } = useParams();
  const [product, setProduct] = useState(null);
  console.log("상품번호 : ", id);
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
      setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
      if (quantity > 1) {
          setQuantity(quantity - 1);
      }
  };

  const getProduct = async () => {
    let data_url = `http://localhost:3004/products/${id}`;

    const res = await axios.get(data_url);
    const data = res.data;

    console.log(data);
    setProduct(data);
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <Container>
      <Row>
        <Col>
          <img src={product?.prd_img} alt="" />
        </Col>
        <Col>
          <p>{product?.prd_brand}</p>
          <p>{product?.prd_name}</p>
          <p>{product?.prd_price}원</p>
          <p>
            {product?.prd_options.length !== 0 ? (
              
              <Form.Select aria-label="Default select example">
                {product?.prd_options.map((item, index) => (
                  <option key={index}>
                    {item?.prd_name} - {item?.prd_price}
                  </option>
                ))}
              </Form.Select>
              
              
            ) : (
              <InputGroup className="mb-3">
              <Button variant="outline-secondary" onClick={handleDecrease}>
                  -
              </Button>
              <FormControl
                  aria-label="Quantity"
                  value={quantity}
                  readOnly
              />
              <Button variant="outline-secondary" onClick={handleIncrease}>
                  +
              </Button>
          </InputGroup>
            )}
          </p>
          <p>
            <Button variant="outline-danger">장바구니</Button>{" "}
            <Button variant="danger">바로구매</Button>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetails;
