import "swiper/css";
import "swiper/css/pagination"
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Mousewheel, Pagination } from 'swiper';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useState } from "react";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";
SwiperCore.use([Mousewheel, Pagination]);
const Homepage = () => {
    const Women = [
        {
            path: 'women1',
          
        },
        {
            
        },
      
    ];
    const Men = [
        {
            path: 'men1',
           
        },
     
    ];
    const Kids = [
        {
          
            cat: 'kids'
        },
        
    ];
    const [activeIndexs, setactiveIndex] = useState(0);
    const [indexNo, setIndex] = useState(0);
    const category = ['Women', 'Men', 'Kids'];
    return (
        <Container activeIndexs={activeIndexs}>
            <Navbar style={{ display: "none" }} activeIndexs={activeIndexs} setIndex={setIndex}/>
            <Swiper
                direction={'vertical'}
                slidesPerView={1}
                mousewheel={true}
                pagination={{
                    "clickable": true,
                }}
                onTouchMove={(e) => setactiveIndex(e.activeIndex===0?1:e.activeIndex===1?2:e.activeIndex)}
                className="mySwiper"
                onScroll={(e) => setactiveIndex(e.activeIndex)}
            >
                {eval(category[indexNo])?.map((ele, index) => (
                    <SwiperSlide className="swiper-slide" key={index}>
                        <Link to={`/products`} state={{ query: ele.path }}>
                            {ele.img ?
                                <img src={ele.img} alt={ele.img} className={`main${category[indexNo]}${index}`}/>
                                :
                                <video autoPlay loop muted controls={ele.cat === 'kids' ? false : true} >
                                    <source src={ele.video} type="video/mp4" />
                                </video>
                            }
                        </Link>
                    </SwiperSlide>
                ))};
                <div className="nextPrevButtons">
                    {indexNo > 0 ?
                        <button onClick={() => setIndex(prev => prev - 1)}>
                            <ArrowBackIosIcon fontSize='small' />
                            <span>{category[indexNo - 1]}</span>
                        </button>
                        :
                        <span></span>
                    }
                    {indexNo !== category.length - 1 &&
                        <button onClick={() => setIndex(prev => prev + 1)}>
                            <span>{category[indexNo + 1]}</span>
                            <ArrowForwardIosIcon fontSize='small' />
                        </button>
                    }
                </div>
            </Swiper>
        </Container >
    );
}

const Container = styled.div`
    width: 100%;
    height: 100vh;
    position:absolute;
    cursor:pointer;
    z-index:-5;
    .mySwiper {
        width: 100%;
        height: 100%;
        
    }
    .swiper-slide{
        width:100%;
        height:100vh;
        
    }
    .swiper-slide img{
        width:100%;
        height:100vh;
        object-fit:fill;
        
    }
    .swiper-slide video{
        width:100%;
        height:100vh;
        object-fit:cover;
    }
    .swiper-pagination-bullet-active {
        background-color: #000 !important;
    }
    .swiper-pagination {
        margin-top: 250px !important;
    }
    .nextPrevButtons{
        width:100%;
        position:absolute;
        display:flex;
        align-items:center;
        justify-content:space-between;
        z-index:5;
        top:45vh;
    }
    .nextPrevButtons>button{
       background-color:transparent;
       border:none;
       display:flex;
       align-items:center;
       font-weight:200;
       color:${(props)=>(props.activeIndexs % 2 === 0?"white":"black")};
    }

    .nextPrevButtons>button svg{
        font-size:30px;
        fill:${(props)=>(props.activeIndexs % 2 === 0?"white":"black")};
    }

    @media only screen and (min-width: 769px) and (max-width:1110px){
        .swiper-slide img{
            object-fit:cover;
            
        }
    }

    @media only screen and (min-width: 481px) and (max-width:768px){
        .swiper-slide img{
            object-fit:cover;
        }
    }
    
    @media only screen and (min-width:320px) and (max-width:480px){
        .swiper-slide img{
            object-fit:cover;
        }

        .swiper-slide  .mainWomen4{
            transform: rotate(90deg);
            object-fit: contain;
            width:100vh;
            object-position:0px 100%;
            background-color:#e3edea;
        }

        .swiper-slide  .mainWomen6{
            transform: rotate(-90deg);
            object-fit: contain;
            width:100vh;
            object-position:0px 15%;
            background-color:#c2d5e4;
        }

        .swiper-slide  .mainMen1{
            object-position:60% 0%;
        }

        .swiper-slide  .mainKids2{
            object-position:71% 0%;
        }
    }

    @media only screen and (max-width: 320px){
        .swiper-slide img{
            object-fit:cover;
        }
    }
`



export default Homepage