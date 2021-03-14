import { Carousel } from "antd";
import "./detailCarousel.scss";
let DetailCarousel = (props) => {
    return (
        <div className='detail-carousel'>
            <Carousel {...props}>{props.children}</Carousel>
        </div>
    );
};
export default DetailCarousel;
