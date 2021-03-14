import Carousel from "../detailCarousel/detailCarousel";
import LazyLoad from "react-lazyload";
import "./overview.scss";
let Overview = () => {
    let productCarouselImg = [
        "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1596073775.20786486.jpg",
        "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1596073806.17964652.jpg",
        "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1596073795.54981742.jpg",
    ];
    let carouselImgStyle = {
        width: "560px",
        height: "560px",
    };
    let listImg = [
        "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0afbfa8fccea7ede2524194c9781f4d5.jpg",
        "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/626aebdf48d130dab12d91c9892fe96e.jpg",
        "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c79e71c3791a07ac8e0c27e296fd46ee.jpg",
        "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d685995327fcf487b98b745aee20dde0.jpeg",
        "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/db461be6e96ca37f36addee3d838cd78.jpg",
        "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/01221b85cd29d4d730a2096049c7eaa1.jpg",
        "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/07a79d52868544895383df5260fdea9c.jpg",
        "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e3d5d8e5e6ff59e7742e68b6dd64d96d.jpg",
        "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4a9b2ef5351f6d3e0e2dbd02d959313d.jpg",
        "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3c05fe1831f528c21fb2689443171535.jpg",
        "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1a5f9f2feb7ec6c053762ea709dbfab9.jpg",
        "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/af13ebd7ee354a2b12f8d72ad2f9edb1.jpg",
        "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3bf74a4e6e17e54ce632b6e28f7815b1.jpg",
        "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/471ef2b6277a88a503301b607fa9e2f5.jpg",
        "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/682a5caed871d50a15da40d0e687286c.jpg",
        "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/742ea70d16de9683d28728b860fc0409.jpg",
        "https://i8.mifile.cn/b2c-mimall-media/1a84b2b629512205bf528aae91361efb.jpg",
        "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a482afa34053b1b32ece1023475af7fb.jpeg",
    ];
    return (
        <div className='overview'>
            <div className='product-box'>
                <div className='container'>
                    <div className='product-carousel'>
                        <Carousel>
                            {productCarouselImg.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <img
                                            src={item}
                                            alt='null'
                                            style={carouselImgStyle}
                                        />
                                    </div>
                                );
                            })}
                        </Carousel>
                    </div>
                    <div className='product-introduction'>
                        <p className='introduction-title'>小米10</p>
                        <div className='introduction-summary'>
                            <span className='important'>
                                「8米金兑换100元优惠券；限时买赠价值897元三人体检套餐；购机最高享12期免息」
                            </span>
                            骁龙865处理器 / 1亿像素8K电影相机 / 双模5G /
                            新一代LPDDR5内存 / 对称式立体声 /
                            90Hz刷新率+180Hz采样率 / UFS 3.0高速存储 /
                            全面适配Wi-Fi 6 / 超强VC液冷散热 /
                            30W极速闪充+30W无线闪充+10W无线反充 / 4780mAh大电量
                            / 多功能NFC
                        </div>
                        <p className='merchant'>小米自营</p>
                        <p className='price'>
                            <span className='price-now'>3399 元</span>
                            <del className='price-old'>3999元</del>
                        </p>
                        <div className='line'></div>
                        <div className='production-address'>
                            <div className='detail-address'>
                                <span>重庆</span>
                                <span>重庆市</span>
                                <span>渝北区</span>
                                <span>木耳镇</span>
                                <a className='modify'>修改</a>
                            </div>
                            <div className='is-have'>该地区有现货</div>
                        </div>
                        <div className='select'>
                            <p className='title'>选择版本</p>
                            <span className='box-select  active'>
                                8GB+128GB
                            </span>
                            <span className='box-select'>8GB+256GB</span>
                            <span className='box-select'>12GB+256GB</span>
                        </div>
                        <div className='select'>
                            <p className='title'>选择颜色</p>
                            <span className='box-select  active'>国风雅灰</span>
                            <span className='box-select'>钛银黑</span>
                            <span className='box-select'>冰海蓝</span>
                            <span className='box-select'>蜜桃金</span>
                        </div>
                        <div className='select-list'>
                            <p className='summary-list'>
                                <span>小米10</span>
                                <span>全网通版8GB+128GB</span>
                                <span>国风雅灰</span>
                            </p>
                            <p className='sum-price'>总计：3399元</p>
                        </div>
                        <div className='settlement'>
                            <span className='add-buy-car'>加入购物车</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='detail-img'>
                <p className='tab-img'>
                    <span>商品概述</span>
                    <span className='separate'>|</span>
                    <span>商品参数</span>
                </p>
                <div className='list-img'>
                    {listImg.map((item, index) => {
                        return (
                            <LazyLoad key={index}>
                                <img src={item} alt='null'></img>
                            </LazyLoad>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Overview;
