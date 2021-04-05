import "./index.scss";
import HeaderTab from "../../public/headerTab/headerTab";
import Nav from "../../public/nav/nav";
import HomeCarousel from "./carsouel/homeCarousel";
import HeroGoods from "./heroGoods/heroGoods";
import HomeBanner from "./homeBanner/homeBanner";
import HomeBrick from "./homeBrick/homeBrick";
import PageFooter from "../../public/pageFooter/pageFooter";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actiontor } from "../../redux/homePage";
import { useState, useEffect } from "react";
function HomePage(props) {
    console.log(props, "homePage");
    useEffect(() => {
        props.getHeroGoods();
        props.getSwiper();
        props.getBanner();
        props.getPhone();
        props.getTelevision();
        props.getLaptop();
    }, []);
    return (
        <div className='HomePage'>
            <HeaderTab></HeaderTab>
            <Nav></Nav>
            <HomeCarousel swiper={props.swiperData}></HomeCarousel>
            <HeroGoods heroGoods={props.heroGoodsData}></HeroGoods>
            <div className='home-content'>
                <HomeBanner
                    banner={props.bannerData.data}
                    type='phone'
                ></HomeBanner>
                <HomeBrick
                    state='手机'
                    brickGoodsData={[props.phoneData]}
                    titleListData={["手机"]}
                ></HomeBrick>
                <HomeBanner
                    banner={props.bannerData.data}
                    type={"homeAppliance"}
                ></HomeBanner>
                <HomeBrick
                    state='家电'
                    brickGoodsData={[props.televisionData]}
                    titleListData={["电视"]}
                ></HomeBrick>
                <HomeBanner
                    banner={props.bannerData.data}
                    type={"ai"}
                ></HomeBanner>
                <HomeBrick
                    state='智能'
                    brickGoodsData={[props.laptopData]}
                    titleListData={["出行"]}
                ></HomeBrick>
            </div>
            <PageFooter></PageFooter>
        </div>
    );
}
export default connect(
    ({ HomePage }) => ({
        ...HomePage,
    }),
    (dispatch, ownProps) => bindActionCreators(actiontor, dispatch)
)(HomePage);
