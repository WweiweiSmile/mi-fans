import "./detailOrder.scss";
import { connect } from "react-redux";
import { actiontor as actiontorLogin } from "../../../redux/login";
import { actiontor as actiontorOrder } from "../../../redux/myOrder";
import { bindActionCreators } from "redux";
import { Button, Steps } from "antd";
import { useEffect, useRef, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
let { Step } = Steps;
let actiontor = { ...actiontorOrder, ...actiontorLogin };
let DetailOrder = (props) => {
    console.log(props, "/personalCenter/detailOrder");
    let history = useHistory();
    let { orderId } = useParams();
    let orderStateWord = ["已取消", "下单", "已付款", "发货", "签收完成"];
    let stepsWorld = ["已下单", "已付款", "已发货", "签收完成"];
    let sumPrice = 0;
    let order = {
        _id: "xxxxx",
        status: 4,
        goods: [],
        sumPrice: 0,
        address: null,
    };
    if (JSON.stringify(props.orderOneData) !== "{}") {
        order = props.orderOneData.data;
    }
    useEffect(() => {
        props.getOrderOne(orderId);
    }, []);
    return (
        <div className='detail-order'>
            <div className='detail-order-content'>
                <div className='box-header'>
                    <p className='title'>
                        订单详情
                        <span>请谨防钓鱼链接或诈骗电话，了解更多</span>
                    </p>
                    <p className='order-id'>
                        <span className='order-text'>订单号:{order._id}</span>
                        <span className='order-btns'>
                            <Button>联系客服</Button>
                            <Button>申请售后</Button>
                        </span>
                    </p>
                </div>
                <div className='order-steps'>
                    <p className='order-steps-title'>
                        {orderStateWord[order.status]}
                    </p>
                    <div className='steps-content'>
                        <Steps
                            // type='navigation'
                            size='small'
                            current={0}
                            onChange={() => {}}
                            className='site-navigation-steps'
                        >
                            {stepsWorld.map((item, index) => {
                                index = index + 1;
                                return (
                                    <Step
                                        key={index}
                                        title={stepsWorld[index - 1]}
                                        // subTitle='00:00:05'
                                        status={
                                            order.status >= index
                                                ? "finish"
                                                : item.status === index - 1
                                                ? "process"
                                                : "wait"
                                        }
                                    />
                                );
                            })}
                            {/* <Step
                                title='已下单'
                                subTitle='00:00:05'
                                status='finish'
                            />
                            <Step
                                title='已付款'
                                subTitle='00:01:02'
                                status='finish'
                            />
                            <Step
                                title='已发货'
                                subTitle='00:02:03'
                                status='process'
                            />
                            <Step
                                title='签收完成'
                                subTitle='00:02:03'
                                status='wait'
                            /> */}
                        </Steps>
                    </div>

                    <div className='logistics'>
                        <div className='logistics-content'>
                            <span className='logistics-company'>
                                物流公司:顺风
                            </span>
                            <span className='logistics-id'>运单号:xxxxxx</span>
                        </div>
                    </div>
                    <div className='goods-list'>
                        {order.goods.map((item, index) => {
                            return (
                                <div className='goods-item' key={index}>
                                    <img src={item.imgUrl} alt='' />
                                    <span className='goods-title'>
                                        {item.title +
                                            "  " +
                                            item.color[item.colorChoose].color +
                                            " " +
                                            item.vision[item.visionChoose]
                                                .vision}
                                    </span>
                                    <span className='price-and-num'>
                                        {item.price} * {item.buyQuantity}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className='receipt'>
                    <p className='receipt-title'>收货信息</p>
                    <p>
                        <span className='info-one'>姓名:</span>
                        <span className='info-two'>{order.address?.name}</span>
                    </p>
                    <p>
                        <span className='info-one'>联系电话:</span>
                        <span className='info-two'>{order.address?.phone}</span>
                    </p>
                    <p>
                        <span className='info-one'>收货地址:</span>
                        <span className='info-two'>
                            {order.address
                                ? order.address?.city?.join(" ") +
                                  "   " +
                                  order.address?.detailAddress
                                : ""}
                        </span>
                    </p>
                </div>
                <div className='pay-mode'>
                    <p className='pay-mode-title'>支付方式</p>
                    <p className='pay-mode-content'>
                        <span className='info-one'>支付方式:</span>
                        <span className='info-two'>在线支付</span>
                    </p>
                </div>
                <div className='detail-tail'>
                    <p>
                        <span className='tail-one'>商品总价:</span>
                        <span className='tail-two'>{order.sumPrice}元</span>
                    </p>
                    <p>
                        <span className='tail-one'>运费:</span>
                        <span className='tail-two'>0元</span>
                    </p>
                    <p>
                        <span className='tail-one'>实付金额</span>
                        <span className='tail-two important'>
                            {order.sumPrice}元
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default connect(
    ({ Login, MyOrder }) => ({ ...Login, ...MyOrder }),
    (dispatch, ownProps) => bindActionCreators(actiontor, dispatch)
)(DetailOrder);
