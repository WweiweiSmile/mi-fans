import "./homeBrick.scss";
let HomeBrick = () => {
    let brickGoods = [
        {
            img:
                "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/68217751d12b1bfd2f9766e458b5e2dd.jpg?thumb=1&w=200&h=200&f=webp&q=90",
            title: "Redmi K40 Pro 系列",
            summary: "骁龙888 / E4 旗舰直屏",
            price: "2799元起",
        },
        {
            img:
                "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/68217751d12b1bfd2f9766e458b5e2dd.jpg?thumb=1&w=200&h=200&f=webp&q=90",
            title: "Redmi K40 Pro 系列",
            summary: "骁龙888 / E4 旗舰直屏",
            price: "2799元起",
        },
        {
            img:
                "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/68217751d12b1bfd2f9766e458b5e2dd.jpg?thumb=1&w=200&h=200&f=webp&q=90",
            title: "Redmi K40 Pro 系列",
            summary: "骁龙888 / E4 旗舰直屏",
            price: "2799元起",
        },
        {
            img:
                "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/68217751d12b1bfd2f9766e458b5e2dd.jpg?thumb=1&w=200&h=200&f=webp&q=90",
            title: "Redmi K40 Pro 系列",
            summary: "骁龙888 / E4 旗舰直屏",
            price: "2799元起",
        },
        {
            img:
                "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/68217751d12b1bfd2f9766e458b5e2dd.jpg?thumb=1&w=200&h=200&f=webp&q=90",
            title: "Redmi K40 Pro 系列",
            summary: "骁龙888 / E4 旗舰直屏",
            price: "2799元起",
        },
        {
            img:
                "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/68217751d12b1bfd2f9766e458b5e2dd.jpg?thumb=1&w=200&h=200&f=webp&q=90",
            title: "Redmi K40 Pro 系列",
            summary: "骁龙888 / E4 旗舰直屏",
            price: "2799元起",
        },
        {
            img:
                "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/68217751d12b1bfd2f9766e458b5e2dd.jpg?thumb=1&w=200&h=200&f=webp&q=90",
            title: "Redmi K40 Pro 系列",
            summary: "骁龙888 / E4 旗舰直屏",
            price: "2799元起",
        },
        {
            img:
                "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/68217751d12b1bfd2f9766e458b5e2dd.jpg?thumb=1&w=200&h=200&f=webp&q=90",
            title: "Redmi K40 Pro 系列",
            summary: "骁龙888 / E4 旗舰直屏",
            price: "2799元起",
        },
    ];
    return (
        <div className='home-brick'>
            <div className='home-brick-container'>
                <div className='title-row'>
                    <span className='title'>手机</span>
                    <a href='/#' className='more'>
                        查看全部
                    </a>
                </div>
                <div className='brick-box'>
                    <ul className='banner-list'>
                        <li className='banner-item'>
                            <img
                                src='//cdn.cnbj1.fds.api.mi-img.com/mi-mall/cb1bd61ad71c45a4f67f09b075463944.jpeg?thumb=1&w=234&h=614&f=webp&q=90'
                                alt='null'
                            />
                        </li>
                    </ul>
                    <ul className='brick-list'>
                        {brickGoods.map((item, index) => {
                            return (
                                <li className='brick-item' key={index}>
                                    <img src={item.img}></img>
                                    <p className='brick-title'>{item.title}</p>
                                    <p className='brick-summary'>
                                        {item.summary}
                                    </p>
                                    <p className='brick-price'>{item.price}</p>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
};
export default HomeBrick;
