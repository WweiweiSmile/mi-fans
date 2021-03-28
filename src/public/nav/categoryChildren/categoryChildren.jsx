import "./categoryChildren.scss";

function CategoryChildren(props) {
    let childrenList = [
        [
            {
                imgUrl:
                    "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/a51c1afa4db8e47e62fad1f6fa4a8970.png?thumb=1&w=40&h=40&f=webp&q=90",
                title: "小米11",
            },
            {
                imgUrl:
                    "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/a51c1afa4db8e47e62fad1f6fa4a8970.png?thumb=1&w=40&h=40&f=webp&q=90",
                title: "小米11",
            },
            {
                imgUrl:
                    "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/a51c1afa4db8e47e62fad1f6fa4a8970.png?thumb=1&w=40&h=40&f=webp&q=90",
                title: "小米11",
            },
            {
                imgUrl:
                    "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/a51c1afa4db8e47e62fad1f6fa4a8970.png?thumb=1&w=40&h=40&f=webp&q=90",
                title: "小米11",
            },
            {
                imgUrl:
                    "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/a51c1afa4db8e47e62fad1f6fa4a8970.png?thumb=1&w=40&h=40&f=webp&q=90",
                title: "小米11",
            },
            {
                imgUrl:
                    "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/a51c1afa4db8e47e62fad1f6fa4a8970.png?thumb=1&w=40&h=40&f=webp&q=90",
                title: "小米11",
            },
        ],
        [
            {
                imgUrl:
                    "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/a51c1afa4db8e47e62fad1f6fa4a8970.png?thumb=1&w=40&h=40&f=webp&q=90",
                title: "小米是个垃圾",
            },
            {
                imgUrl:
                    "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/a51c1afa4db8e47e62fad1f6fa4a8970.png?thumb=1&w=40&h=40&f=webp&q=90",
                title: "小米11",
            },
            {
                imgUrl:
                    "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/a51c1afa4db8e47e62fad1f6fa4a8970.png?thumb=1&w=40&h=40&f=webp&q=90",
                title: "小米11",
            },
            {
                imgUrl:
                    "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/a51c1afa4db8e47e62fad1f6fa4a8970.png?thumb=1&w=40&h=40&f=webp&q=90",
                title: "小米11",
            },
            {
                imgUrl:
                    "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/a51c1afa4db8e47e62fad1f6fa4a8970.png?thumb=1&w=40&h=40&f=webp&q=90",
                title: "小米11",
            },
            {
                imgUrl:
                    "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/a51c1afa4db8e47e62fad1f6fa4a8970.png?thumb=1&w=40&h=40&f=webp&q=90",
                title: "小米11",
            },
        ],
    ];
    if (props?.goodsInfo?.data) {
        let data = props.goodsInfo.data
        let newData = []
        for(let i=0,len = data.length; i<len; i+=6){
            newData.push(data.slice(i,i+6))
        }
        childrenList = newData;
    }
    let children = childrenList.map((col, index) => {
        return (
            <ul className='category-col-list' key={index}>
                {col.map((item, index) => {
                    return (
                        <li className='category-col-item' key={index}>
                            <img src={item.imgUrl}></img>
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
