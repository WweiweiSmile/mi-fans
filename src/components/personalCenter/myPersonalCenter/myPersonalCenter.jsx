import "./myPersonalCenter.scss";
import { Avatar } from "antd";
let MyPersonalCenter = () => {
    return (
        <div className='my-personal-center'>
            <div className='box-bg'>
                <div className='protal-main'>
                    <div className='avatar'>
                        <Avatar
                            size={160}
                            src='https://cdn.cnbj1.fds.api.mi-img.com/user-avatar/p01VARnsHpTD/hseAqzlLaD9O42.jpg'
                        ></Avatar>
                    </div>
                    <div className='person-summary'>
                        <p className='user'>夜里的灯光</p>
                        <p className='time'>晚上好~</p>
                        <p className='modify-info'>修改个人信息</p>
                    </div>
                    <div className='user-info'>
                        <p>账户安全:普通</p>
                        <p>绑定手机:156******16</p>
                        <p>绑定邮箱:111*******qq.com</p>
                    </div>
                </div>
                <div className='protal-content'>
                    <ul>
                        <li>
                            <div className='item-avatar'>
                                <Avatar
                                    size={100}
                                    src='//s01.mifile.cn/i/user/portal-icon-1.png'
                                ></Avatar>
                            </div>
                            <div className='item-detail'>
                                <h3>
                                    待支付的订单:<span className='num'>3</span>
                                </h3>
                                <p>查看待支付的订单</p>
                            </div>
                        </li>
                        <li>
                            <div className='item-avatar'>
                                <Avatar
                                    size={100}
                                    src='//s01.mifile.cn/i/user/portal-icon-2.png'
                                ></Avatar>
                            </div>
                            <div className='item-detail'>
                                <h3>
                                    待收货的订单:<span className='num'>3</span>
                                </h3>
                                <p>查看待收货的订单</p>
                            </div>
                        </li>
                        <li>
                            <div className='item-avatar'>
                                <Avatar
                                    size={100}
                                    src='//s01.mifile.cn/i/user/portal-icon-3.png'
                                ></Avatar>
                            </div>
                            <div className='item-detail'>
                                <h3>
                                    待评价的商品数:
                                    <span className='num'>3</span>
                                </h3>
                                <p>查看待评价的商品</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
export default MyPersonalCenter;
