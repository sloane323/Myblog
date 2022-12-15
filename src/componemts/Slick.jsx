import { useState } from "react";
import Slider from "react-slick";
import styles from "./Slick.module.css";

const Slick = () => {
  // 슬릭 화면 사용
  // 슬릭과 같은 라이브러리를 사용할때 관련 내용을 확인
  // https://react-slick.neostack.com/
  const settings = {
    dots: true,
    adaptiveHeight: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
  };

  // 슬릭에 출력할 이미지 배열
  const [imgList, setImgList] = useState([
    "chrismasbg_1.jpg",
    "chrismasbg_2.jpg",
    "chrismasbg_3.jpg",
    "chrismasbg_4.jpg",
    "chrismasbg_5.jpg",
    "chrismasbg_6.jpg",
    "chrismasbg_7.jpg",
    "chrismasbg_8.jpg",
  ]);

  return (
    <div className={styles.slicktable}>
      <div className={styles.slickbox}>
        <h2> Merry Christmas </h2>
        {/** 슬라이더의 내용이 커지면 다음페이지로 넘어가기 때문에 이미지 사이즈 조절
         * 이미지를 바로 접근할수 없기에 require로 접근
         */}
        <Slider {...settings}>
          {/* <div>
            <div className={styles.imgbox}> <img style={{width:"100%"}} src={require(`../img/chrismasbg_1.jpg`)} /></div>
          </div> */}

          {imgList.map((image) => (
            <div>
              <div  key="{item}"
                style={{
                  width: "auto",
                  height: "30vh",
                  backgroundImage: "url(" + require("../img/" + image) + ")",
                  backgroundSize: "cover",
                  padding:"30px",
                  boxShadow:"2px 2px 2px 2px black" }}
              ></div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Slick;
