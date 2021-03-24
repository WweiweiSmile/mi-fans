import "./personalCenter.scss";
import HeaderTab from "../../public/headerTab/headerTab";
import Nav from "../../public/nav/nav";
import PageFooter from "../../public/pageFooter/pageFooter";
import MyOrder from "./myOrder/myOrder";
import MyPersonalCenter from "./myPersonalCenter/myPersonalCenter";
import Address from "./address/address";
import { Menu } from "antd";
import { useState } from "react";
const { SubMenu } = Menu;
let PersonalCenter = () => {
    let [select, setSelect] = useState(1);
    let selcts = [""];
    selcts.push(<MyOrder></MyOrder>);
    selcts.push(<MyPersonalCenter></MyPersonalCenter>);
    selcts.push(<Address></Address>);

    return (
        <div className='personal-center'>
            <HeaderTab></HeaderTab>
            <Nav></Nav>
            <div className='personal-container'>
                <div className='left-sider'>
                    <Menu
                        style={{ width: 234 }}
                        defaultSelectedKeys={["1"]}
                        defaultOpenKeys={[
                            "orderCenter",
                            "personalCenter",
                            "afterSala",
                            "userManage",
                        ]}
                        mode='inline'
                        onSelect={(ob) => {
                            setSelect(ob.key);
                        }}
                    >
                        <SubMenu key='orderCenter' title='订单中心'>
                            <Menu.Item key='1'>我的订单</Menu.Item>
                        </SubMenu>
                        <SubMenu key='personalCenter' title='个人中心'>
                            <Menu.Item key='2'>我的个人中心</Menu.Item>
                            <Menu.Item key='3'>收货地址</Menu.Item>
                        </SubMenu>
                        <SubMenu key='afterSala' title='售后服务'>
                            <Menu.Item key='8'>服务记录</Menu.Item>
                            <Menu.Item key='9'>申请服务</Menu.Item>
                            <Menu.Item key='10'>快递报销</Menu.Item>
                        </SubMenu>
                        <SubMenu key='userManage' title='账户管理'>
                            <Menu.Item key='11'>个人信息</Menu.Item>
                            <Menu.Item key='12'>修改密码</Menu.Item>
                        </SubMenu>
                    </Menu>
                </div>
                <div className='content'>
                    {selcts[select]}

                    {/* <MyOrder></MyOrder> */}
                    {/* <MyPersonalCenter></MyPersonalCenter> */}
                </div>
            </div>
            <PageFooter></PageFooter>
        </div>
    );
};
export default PersonalCenter;