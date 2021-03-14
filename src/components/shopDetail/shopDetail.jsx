import "./shopDetail.scss";
import HeaderTab from "../../public/headerTab/headerTab";
import Nav from "../../public/nav/nav";
import PageFooter from "../../public/pageFooter/pageFooter";
// import Overview from "./overview/overview";
import UserAppraise from "./userAppraise/userAppraise";
// import { Carousel } from "antd";

let ShopDetail = () => {
    return (
        <div className='shop-detail'>
            <HeaderTab></HeaderTab>
            <Nav></Nav>
            <div className='nav-bar'>
                <div className='detail-nav-bar'>
                    <span className='title'>小米10</span>
                    <div>
                        <a className='con'>概述</a>
                        <a className='con'>用户评价</a>
                    </div>
                </div>
            </div>
            <UserAppraise></UserAppraise>

            <PageFooter></PageFooter>
        </div>
    );
};
export default ShopDetail;
