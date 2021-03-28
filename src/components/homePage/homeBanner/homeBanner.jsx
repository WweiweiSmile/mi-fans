import "./homeBanner.scss";

let HomeBanner = (props) => {
    let bannerImg =
        "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/431e5fd6bfd1b67d096928248be18303.jpg?thumb=1&w=1226&h=120&f=webp&q=90";
    bannerImg =""
    if(props.banner){
        props.banner.map((item, index) => {
            if (item.type === props.type) {
                bannerImg = item.imgUrl;
            }
        })
    }

    return (
        <div className='home-banner'>
            <div className='home-banner-container'>
                <img src={bannerImg} alt='null'/>
            </div>
        </div>
    );
};
export default HomeBanner;
