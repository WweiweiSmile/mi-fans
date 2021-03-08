import "./navChildren.scss";
function NavChildren(props) {
    let goodsInfo = [
        {
            img:
                "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/963679eaf3937351e154600ab3448460.png?thumb=1&w=160&h=110&f=webp&q=90",
            title: "小米11",
            price: "3999元起",
        },
        {
            img:
                "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/963679eaf3937351e154600ab3448460.png?thumb=1&w=160&h=110&f=webp&q=90",
            title: "小米11",
            price: "3999元起",
        },
    ];
    return (
        <div className='nav-children'>
            <div className='nav-children-container'>
                <ul className='children-list'>
                    {goodsInfo.map((item, index) => {
                        return (
                            <li className='children-item' key={index}>
                                <img src={item.img} alt={item.title}></img>
                                <p className='title'>{item.title}</p>
                                <p className='price'>{item.price}</p>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}
export default NavChildren;
