import "./homeCarousel.scss";
import { Carousel } from "antd";
function HomeCarousel() {
    const carouselStyle = {
        height: "460px",
        width: "1226px",
    };
    let carouselImg = [
        "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/85fe83512254832000635fb15f048df5.jpg?thumb=1&w=1226&h=460&f=webp&q=90",
        "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0ef4160c861b998239bce9adb82341e7.jpg?thumb=1&w=1226&h=460&f=webp&q=90",
        "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e023dd94c146d0f27f7ae8e98213abff.jpg?thumb=1&w=1226&h=460&f=webp&q=90",
        "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/289e412870426ffb5bcdcfa9ba0676df.jpg?thumb=1&w=1226&h=460&f=webp&q=90",
    ];
    return (
        <div className='home-carousel'>
            <Carousel autoplay>
                {carouselImg.map((item, index) => {
                    return (
                        <div style={carouselStyle}>
                            <img src={item} alt='null' style={carouselStyle} />
                        </div>
                    );
                })}
            </Carousel>
        </div>
    );
}
export default HomeCarousel;
