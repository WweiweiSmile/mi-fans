import "./index.scss";
import Nav from "../../public/nav/nav";
import HomeCarousel from "./carsouel/homeCarousel";
import HeroGoods from "./heroGoods/heroGoods";
import HomeBanner from "./homeBanner/homeBanner";
import HomeBrick from "./homeBrick/homeBrick";
function HomePage() {
    return (
        <div className='HomePage'>
            <header>
                <div className='header-poster'></div>
                <div className='top-bar'>
                    <div className='container'>
                        <div className='top-bar-nav'>
                            <span>小米商城</span>
                            <span>|</span>
                            <span>小米商城</span>
                            <span>|</span>
                            <span>小米商城</span>
                            <span>|</span>
                            <span>小米商城</span>
                            <span>|</span>
                            <span>小米商城</span>
                            <span>|</span>
                            <span>小米商城</span>
                            <span>|</span>
                            <span>小米商城</span>
                            <span>|</span>
                            <span>小米商城</span>
                        </div>
                        <div className='top-bar-info'>
                            <span>登录</span>
                            <span>|</span>
                            <span>注册</span>
                            <span>|</span>
                            <span>消息通知</span>
                        </div>
                    </div>
                </div>
                <Nav></Nav>
                <HomeCarousel></HomeCarousel>
                <HeroGoods></HeroGoods>
                <div className='home-content'>
                    <HomeBanner></HomeBanner>
                    <HomeBrick></HomeBrick>
                    <HomeBanner></HomeBanner>
                    <HomeBrick></HomeBrick>
                    <HomeBanner></HomeBanner>
                    <HomeBrick></HomeBrick>
                </div>
            </header>
        </div>
    );
}
export default HomePage;
