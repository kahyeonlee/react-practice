import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const GoodDetail = () => {
  const {id} = useParams();
  const [menu,setMenu] = useState(null);

  const getGood = async()=>{
    let data_url = `http://localhost:3004/goods_list/${id}`
    const res = await axios.get(data_url);
    const data = res.data;

    console.log(data);
    setMenu(data);
  }

  useEffect(()=>{
    getGood();
  },[])

  return (
    <div className="goods-detail-box">
      <div className="goods-detail-box-thumb">
        <img
          src={menu?.detail.sub_thumb}
          alt="도시락이미지"
        />
      </div>

      <div className="goods-detail-box-info">
        <div className="goods-detail-title">
          <div>
            {
              menu?.new?
              <em className="goods-new">new</em>
              :menu?.best?
              <em className="goods-best">best</em>
              :""
            }
          </div>
          <div className="goods-detail-name"> {menu?.name}</div>
          <div className="goods-detail-txt">
            {menu?.detail.txt}
          </div>
          <div className="goods-detail-price-box">
            <strong>{menu?.price}</strong>원
          </div>
        </div>
        <div className="goods-detail-summary">
          {menu?.detail.summary}  
        </div>
      </div>
    </div>
  );
};

export default GoodDetail;
