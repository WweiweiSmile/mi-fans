import "./categoryChildren.scss";
function CategoryChildren(props) {
    let childrenList = [
        [
            {
                img:
                    "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/a51c1afa4db8e47e62fad1f6fa4a8970.png?thumb=1&w=40&h=40&f=webp&q=90",
                title: "小米11",
            },
            {
                img:
                    "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/a51c1afa4db8e47e62fad1f6fa4a8970.png?thumb=1&w=40&h=40&f=webp&q=90",
                title: "小米11",
            },
            {
                img:
                    "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/a51c1afa4db8e47e62fad1f6fa4a8970.png?thumb=1&w=40&h=40&f=webp&q=90",
                title: "小米11",
            },
            {
                img:
                    "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/a51c1afa4db8e47e62fad1f6fa4a8970.png?thumb=1&w=40&h=40&f=webp&q=90",
                title: "小米11",
            },
            {
                img:
                    "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/a51c1afa4db8e47e62fad1f6fa4a8970.png?thumb=1&w=40&h=40&f=webp&q=90",
                title: "小米11",
            },
            {
                img:
                    "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/a51c1afa4db8e47e62fad1f6fa4a8970.png?thumb=1&w=40&h=40&f=webp&q=90",
                title: "小米11",
            },
        ],
        [
            {
                img:
                    "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/a51c1afa4db8e47e62fad1f6fa4a8970.png?thumb=1&w=40&h=40&f=webp&q=90",
                title: "小米是个垃圾",
            },
            {
                img:
                    "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/a51c1afa4db8e47e62fad1f6fa4a8970.png?thumb=1&w=40&h=40&f=webp&q=90",
                title: "小米11",
            },
            {
                img:
                    "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/a51c1afa4db8e47e62fad1f6fa4a8970.png?thumb=1&w=40&h=40&f=webp&q=90",
                title: "小米11",
            },
            {
                img:
                    "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/a51c1afa4db8e47e62fad1f6fa4a8970.png?thumb=1&w=40&h=40&f=webp&q=90",
                title: "小米11",
            },
            {
                img:
                    "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/a51c1afa4db8e47e62fad1f6fa4a8970.png?thumb=1&w=40&h=40&f=webp&q=90",
                title: "小米11",
            },
            {
                img:
                    "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/a51c1afa4db8e47e62fad1f6fa4a8970.png?thumb=1&w=40&h=40&f=webp&q=90",
                title: "小米11",
            },
        ],
    ];
    let children = childrenList.map((col, index) => {
        return (
            <ul className='category-col-list' key={index}>
                {col.map((item, index) => {
                    return (
                        <li className='category-col-item' key={index}>
                            <img src={item.img}></img>
                            {item.title}
                        </li>
                    );
                })}
            </ul>
        );
    });
    return <div className='category-children'>{children}</div>;
}
export default CategoryChildren;
