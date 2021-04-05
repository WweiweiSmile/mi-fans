import "./buyCheckout.scss";
import Table from "../buyCar/table/table";
import PageFooter from "../../public/pageFooter/pageFooter";
import { Button, Modal } from "antd";
import { connect } from "react-redux";
import { actiontor } from "../../redux/buyCheckout";
import { bindActionCreators } from "redux";
import { useState, useEffect } from "react";
import HeaderTab from "../../public/headerTab/headerTab";
import PersonalAddress from "../personalCenter/address/address.jsx";
import address from "../personalCenter/address/address.jsx";
let BuyCheckout = (props) => {
    console.log(props, "buyCheckout");
    let userId = "";
    // 商品
    let goods = [];
    // 商品件数
    let goodsNum = 0;
    // 商品总价
    let sumPrice = 0;
    // 选中收货地址的下标
    let [addressIndex, setAddressIndex] = useState(-1);
    let [isModalVisible, setIsModelVisible] = useState(false);
    if (JSON.stringify(props.userData) !== "{}") {
        userId = props.userData.data[0]._id;
    }
    if (JSON.stringify(props.goodsChooseData) !== "{}") {
        goods = props.goodsChooseData.data;
    }
    console.log(userId, props.userData, "userId 前");

    useEffect(() => {
        console.log(userId, props.userData, "userId 后");
        props.getGoodsChoose(userId);
    }, [props.userData]);
    // 获取选中地址的下标
    let getAddressIndex = (index) => {
        setAddressIndex(index);
    };

    let modalOnOk = () => {
        setIsModelVisible(false);
        // 付款成功 状态为 2:付款
        placeOrder(2);
    };
    let modalOnConcel = () => {
        setIsModelVisible(false);
        // 下单  状态为 1:下单
        placeOrder(1);
    };
    //下单
    let placeOrder = (status) => {
        let address = props.userData.data[0].address[addressIndex];
        let order = { userId, goods, address, status, sumPrice };
        props.placeOrder(order);
    };
    return (
        <div className='buy-checkout'>
            <HeaderTab></HeaderTab>
            <Modal
                title='付款'
                getContainer={false}
                visible={isModalVisible}
                onOk={modalOnOk}
                onCancel={modalOnConcel}
                cancelText='取消付款'
                okText='付款完成'
            >
                <p className='pay-title'>扫描二维码进行付款</p>
                <div className='pay-img'>
                    <img src='https://qr.api.cli.im/newqr/create?data=%E5%9E%83%E5%9C%BE&level=H&transparent=0&bgcolor=%23FFFFFF&forecolor=%2F%2Fstatic.clewm.net%2Fcli%2Fimages%2Fbeautify%2Fnew%2Fforecolor%2F24.png&blockpixel=12&marginblock=2&logourl=&size=400&logoshape=no&embed_text_fontfamily=simhei.ttc&eye_use_fore=1&background=&wper=0&hper=0&tper=0&lper=0&qrcode_eyes=pin-3.png&outcolor=&incolor=&body_type=0&qr_rotate=0&text=&fontfamily=msyh.ttf&fontsize=30&fontcolor=&logo_pos=0&kid=bizcliim&time=1617394602&key=b64995f7448a8c430f202f8615215cd5'></img>
                </div>
            </Modal>
            <div className='header'>
                <div className='header-container'>
                    <div className='header-logo'>
                        <a href='https://www.mi.com/index.html'></a>
                    </div>
                    <div className='header-title'>
                        <span className='my-buy-car'>确定订单</span>
                        <span className='comment'>
                            温馨提示：产品是否购买成功，以最终下单为准哦，请尽快结算
                        </span>
                    </div>
                </div>
            </div>
            <div className='buy-checkout-container'>
                <PersonalAddress
                    getAddressIndex={getAddressIndex}
                ></PersonalAddress>
                <div className='goods-list'>
                    <h3>商品列表</h3>
                    <ul>
                        {goods.map((item, index) => {
                            let imgUrl = item.imgUrl;
                            let title =
                                item.title +
                                "  " +
                                item.color[item.colorChoose].color +
                                "  " +
                                item.vision[item.visionChoose].vision;
                            goodsNum += item.buyQuantity;
                            sumPrice += item.price * item.buyQuantity;
                            return (
                                <li key={index}>
                                    <div className='goods-title-area'>
                                        <img src={imgUrl}></img>
                                        <span>{title}</span>
                                    </div>
                                    <div className='goods-price-area'>
                                        <span className='goods-price'>
                                            {item.price}
                                        </span>
                                        <span>x</span>
                                        <span className='goods-quantity'>
                                            {item.buyQuantity}
                                        </span>
                                    </div>
                                    <div className='goods-sum-price'>
                                        {item.price * item.buyQuantity}
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>

                <div className='distribute'>
                    <div>
                        <h3>
                            配送方式<span>包邮</span>
                        </h3>
                    </div>
                </div>
                <div className='goods-info'>
                    <h3>商品信息</h3>
                    <p>
                        <span className='one'>商品件数:</span>
                        <span className='two'>{goodsNum}件</span>
                    </p>
                    <p>
                        <span className='one'>商品总价:</span>
                        <span className='two'>{sumPrice}元</span>
                    </p>
                    <p>
                        <span className='one'>应付金额:</span>
                        <span className='two'>
                            <span className='sum-price'>{sumPrice}</span>元
                        </span>
                    </p>
                </div>
                <div className='btns'>
                    <Button>返回购物车</Button>
                    <Button
                        onClick={() => {
                            setIsModelVisible(true);
                        }}
                    >
                        立即下单
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default connect(
    ({ BuyCheckout, Login }) => ({ ...BuyCheckout, ...Login }),
    (dispatch, ownProps) => bindActionCreators(actiontor, dispatch)
)(BuyCheckout);
