import "./heroGoods.scss";
let HeroGoods = () => {
    const channelImg = [
        {
            img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/82abdba456e8caaea5848a0cddce03db.png?w=48&h=48",
            title: "小米秒杀",
        },
        {
            img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/806f2dfb2d27978e33fe3815d3851fa3.png?w=48&h=48",
            title: "企业团购",
        },
        {
            img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/806f2dfb2d27978e33fe3815d3851fa3.png?w=48&h=48",
            title: "F码通道",
        },
        {
            img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/43a3195efa6a3cc7662efed8e7abe8bf.png?w=48&h=48",
            title: "米粉卡",
        },
        {
            img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f4846bca6010a0deb9f85464409862af.png?w=48&h=48",
            title: "以旧换新",
        },
        {
            img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9a76d7636b08e0988efb4fc384ae497b.png?w=48&h=48",
            title: "话费充值",
        },
    ];
    const heroGoodsImg = [
        {
            img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5d4298059889417157e8492750328492.jpg?w=632&h=340",
        },
        {
            img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8a43378b96501d7e227a9018fe2668c5.jpg?w=632&h=340",
        },
        {
            img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/793913688bfaee26b755a0b0cc8575fd.jpg?w=632&h=340",
        },
    ];
    return (
        <div className='hero-goods'>
            <div className='hero-goods-container'>
                <div className='channel'>
                    <ul className='channel-list'>
                        {channelImg.map((item, index) => {
                            return (
                                <li className='channel-item' key={index}>
                                    <img src={item.img} alt='null' />
                                    <p>{item.title}</p>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className='goods'>
                    <ul className='goods-list'>
                        {heroGoodsImg.map((item, index) => {
                            return (
                                <li className='goods-item' key={index}>
                                    <a href='http://www.baidu.com'>
                                        <img src={item.img} alt='null' />
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
};
export default HeroGoods;
