import "./index.scss";
import HeaderTab from "../../public/headerTab/headerTab";
import Nav from "../../public/nav/nav";
import HomeCarousel from "./carsouel/homeCarousel";
import HeroGoods from "./heroGoods/heroGoods";
import HomeBanner from "./homeBanner/homeBanner";
import HomeBrick from "./homeBrick/homeBrick";
import PageFooter from "../../public/pageFooter/pageFooter";
function HomePage() {
    return (
        <div className='HomePage'>
            <HeaderTab></HeaderTab>
            <Nav></Nav>
            <HomeCarousel></HomeCarousel>
            <HeroGoods></HeroGoods>
            <div className='home-content'>
                <HomeBanner></HomeBanner>
                <HomeBrick state='手机'></HomeBrick>
                <HomeBanner></HomeBanner>
                <HomeBrick state='家电'></HomeBrick>
                <HomeBanner></HomeBanner>
                <HomeBrick state='智能'></HomeBrick>
            </div>
            <PageFooter></PageFooter>
        </div>
    );
}
export default HomePage;
