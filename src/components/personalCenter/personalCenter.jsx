import "./personalCenter.scss";
import HeaderTab from "../../public/headerTab/headerTab";
import Nav from "../../public/nav/nav";
import PageFooter from "../../public/pageFooter/pageFooter";
import MyOrder from "./myOrder/myOrder";
import MyPersonalCenter from "./myPersonalCenter/myPersonalCenter";
import Address from "./address/address";
import PersonalInfo from "./personalInfo/personalInfo";
import ModifyPwd from "./modifyPwd/modifyPwd";
import DetailOrder from "./detailOrder/detailOrder";
import GoodsAppraise from "./goodsAppraise/goodsAppraise";
import { Switch, Route, useHistory } from "react-router-dom";

import { Menu } from "antd";
import { useState } from "react";
const { SubMenu } = Menu;
let PersonalCenter = () => {
    let history = useHistory();
    // selects.push(<MyOrder></MyOrder>);
    // selects.push(<MyPersonalCenter></MyPersonalCenter>);
    // selects.push(<Address></Address>);
    // selects.push(<PersonalInfo></PersonalInfo>);
    // selects.push(<ModifyPwd></ModifyPwd>);
    return (
        <div className='personal-center'>
            <HeaderTab></HeaderTab>
            <Nav></Nav>
            <div className='personal-container'>
                <div className='left-sider'>
                    <Menu
                        style={{ width: 234 }}
                        defaultSelectedKeys={["/personalCenter/myOrder"]}
                        defaultOpenKeys={[
                            "orderCenter",
                            "personalCenter",
                            "afterSala",
                            "userManage",
                        ]}
                        mode='inline'
                        onSelect={(ob) => {
                            history.push(ob.key);
                        }}
                    >
                        <SubMenu key='orderCenter' title='订单中心'>
                            <Menu.Item key='/personalCenter/myOrder'>
                                我的订单
                            </Menu.Item>
                        </SubMenu>
                        <SubMenu key='personalCenter' title='个人中心'>
                            <Menu.Item key='/personalCenter/me'>
                                我的个人中心
                            </Menu.Item>
                            <Menu.Item key='/personalCenter/address'>
                                收货地址
                            </Menu.Item>
                        </SubMenu>
                        <SubMenu key='afterSala' title='售后服务'>
                            <Menu.Item key='8'>服务记录</Menu.Item>
                            <Menu.Item key='9'>申请服务</Menu.Item>
                            <Menu.Item key='10'>快递报销</Menu.Item>
                        </SubMenu>
                        <SubMenu key='userManage' title='账户管理'>
                            <Menu.Item key='/personalCenter/personalInfo'>
                                个人信息
                            </Menu.Item>
                            <Menu.Item key='/personalCenter/modifyPwd'>
                                修改密码
                            </Menu.Item>
                        </SubMenu>
                    </Menu>
                </div>
                <div className='content'>
                    <Switch>
                        <Route
                            path='/personalCenter/myOrder'
                            component={MyOrder}
                        ></Route>
                        <Route
                            path='/personalCenter/me'
                            component={MyPersonalCenter}
                        ></Route>
                        <Route
                            path='/personalCenter/address'
                            component={Address}
                        ></Route>
                        <Route
                            path='/personalCenter/personalInfo'
                            component={PersonalInfo}
                        ></Route>
                        <Route
                            path='/personalCenter/modifyPwd'
                            component={ModifyPwd}
                        ></Route>
                        <Route
                            path='/personalCenter/detailOrder/:orderId'
                            component={DetailOrder}
                        ></Route>
                        <Route
                            path={"/personalCenter/goodsAppraise/:orderId"}
                            component={GoodsAppraise}
                        ></Route>
                    </Switch>
                    {/* {selects[select]} */}

                    {/* <MyOrder></MyOrder> */}
                    {/* <MyPersonalCenter></MyPersonalCenter> */}
                </div>
            </div>
            <PageFooter></PageFooter>
        </div>
    );
};
export default PersonalCenter;
