import "./myOrder.scss";
import { Input } from "antd";
import { useState } from "react";
const { Search } = Input;
let MyOrder = () => {
    //  orderState 0:等待付款 1:待收货 2:已收货
    let [orderState, setOrderState] = useState(2);
    // 等待付款  ,待收货, 已收货
    let orderStates = ["wait-pay", "wait-goods", "have-goods"];
    let orderStateWord = ["等待付款", "待收货", "已收货"];
    return (
        <div className='my-order'>
            <p className='title'>
                我的订单
                <span>请谨防钓鱼链接或诈骗电话，了解更多</span>
            </p>
            <div className='more'>
                <div className='filter-list'>
                    <span className='active'>全部有效订单</span>
                    <span>待支付</span>
                    <span>待收货</span>
                </div>
                <div className='search'>
                    <Search></Search>
                </div>
            </div>
            <div className='order-list'>
                <div className={`order-item ${orderStates[orderState]}`}>
                    <div className='title-row'>
                        <p className='title'>{orderStateWord[orderState]}</p>
                        <div className='summary-row'>
                            <p className='summary'>
                                <span>2021年03月22日 22:16</span>
                                <span>秦巍</span>
                                <span>订单号:332432423324232</span>
                                <span>在线支付</span>
                            </p>
                            <p className='price'>
                                应付金额:
                                <span className='important'>599.00元</span>
                            </p>
                        </div>
                    </div>
                    <div className='order-content'>
                        <div className='shop'>
                            <img
                                src='//cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1595400896.0831679.jpg?thumb=1&w=80&h=80'
                                alt='null'
                                className='shop-img'
                            />
                            <div className='shop-summary'>
                                <p>Redmi 9A 4GB+64GB 砂石黑</p>
                                <p>599元 x 1</p>
                            </div>
                        </div>
                        <div className='btns'>
                            {orderState === 0 ? (
                                <a className='promptly-pay'>立即付款</a>
                            ) : (
                                ""
                            )}
                            <a>订单详情</a>
                            {orderState === 2 ? <a>申请售后</a> : ""}
                            {orderState === 2 ? <a>订单评价</a> : ""}
                            <a>联系客服</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default MyOrder;
