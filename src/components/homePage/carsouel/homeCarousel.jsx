import "./homeCarousel.scss";
import { Carousel } from "antd";
function HomeCarousel(props) {
    let swiper = []
    if(props.swiper.data){
        swiper = props.swiper.data
    }
    const carouselStyle = {
        height: "460px",
        width: "1226px",
    };
    return (
        <div className='home-carousel'>
            <Carousel autoplay>
                {swiper.map((item, index) => {
                    return (
                        <div style={carouselStyle} key={index}>
                            <img src={item.imgUrl} alt='null' style={carouselStyle} />
                        </div>
                    );
                })}
            </Carousel>
        </div>
    );
}
export default HomeCarousel;
