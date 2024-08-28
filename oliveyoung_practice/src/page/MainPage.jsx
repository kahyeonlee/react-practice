import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";

/*
  실습1) 화면이 최초에 렌더링이 되었을 때, axios를 활용해서 화장품정보를 가진 url로 데이터를 요청하기
  실습2) 받아온 데이터를 콘솔창에 출력하시오.
  실습3) state에ㅔ 저장된 화장품정보를 map함수를 활용해서 출력하시오.
         Card 컴포넌트 : 상품이미지, 브랜드명, 상품명, 가격, 플래그

  실습4) 화장품이미지를 클릭했을 때 상품상세페이지로 이동하도록 구현하시오.
         * 페이지 이동 시, 상품번호를 전달
        ex)
         /products/1
         /products?id=1
*/

const MainPage = () => {

  const navigate = useNavigate();
  const [productList, setProductList] = useState(null);

  // json-server로부터 화장품 정보를 가져오는 함수
  const getProductList = async () => {
    let data_url = "http://localhost:3004/products";
    const res = await axios.get(data_url);
    const data = res.data;
    setProductList(data);
    console.log(data);
  };

  // 처음 렌더링 했을때 호출
  useEffect(() => {
    getProductList();
  }, []);

  // 상품상세 페이지를 이동하는 함수
  const goToPrdDetail=(id)=>{
    navigate(`/prdDetail/${id}`)
  }

  return (
    <Container>
      <Row>
        {productList?.map((product) => (
          <Col key={product.id}>
            <Card className="card">
              <Card.Img variant="top" src={product.prd_img} onClick={()=>goToPrdDetail(product.id)}/>
              <Card.Body>
                <Card.Title className="card_title">
                  <p>{product.prd_brand}</p>
                  <p className="card_prdname">{product.prd_name}</p>
                </Card.Title>
                <Card.Text className="card_text">
                  {product.prd_price}원
                </Card.Text>
                <p>
                  {(product.prd_flag).map((flag)=>(
                  <span 
                    className="prd_flag rounded-pill" 
                    style={{ background: 
                      flag === '세일'? '#f65c60':
                      flag === '쿠폰'?  '#9bce26':
                      flag === '증정'?  '#6fcff7': '#f374b7',

                      width: flag === '오늘드림' ? '60px' : '40px'
                    }}>
                    {flag}
                  </span>
                  ))}
                </p>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default MainPage;
