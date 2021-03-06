import "./homeBrick.scss";
import { useState } from "react";
import { useHistory } from "react-router-dom";
let HomeBrick = (props) => {
    let brickGoodsData = [
        [
            {
                imgUrl:
                    "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/68217751d12b1bfd2f9766e458b5e2dd.jpg?thumb=1&w=200&h=200&f=webp&q=90",
                title: "Redmi K40 Pro 系列",
                summary: "骁龙888 / E4 旗舰直屏",
                price: "2799元起",
            },
            {
                imgUrl:
                    "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/68217751d12b1bfd2f9766e458b5e2dd.jpg?thumb=1&w=200&h=200&f=webp&q=90",
                title: "Redmi K40 Pro 系列",
                summary: "骁龙888 / E4 旗舰直屏",
                price: "2799元起",
            },
            {
                imgUrl:
                    "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/68217751d12b1bfd2f9766e458b5e2dd.jpg?thumb=1&w=200&h=200&f=webp&q=90",
                title: "Redmi K40 Pro 系列",
                summary: "骁龙888 / E4 旗舰直屏",
                price: "2799元起",
            },
            {
                imgUrl:
                    "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/68217751d12b1bfd2f9766e458b5e2dd.jpg?thumb=1&w=200&h=200&f=webp&q=90",
                title: "Redmi K40 Pro 系列",
                summary: "骁龙888 / E4 旗舰直屏",
                price: "2799元起",
            },
            {
                imgUrl:
                    "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/68217751d12b1bfd2f9766e458b5e2dd.jpg?thumb=1&w=200&h=200&f=webp&q=90",
                title: "Redmi K40 Pro 系列",
                summary: "骁龙888 / E4 旗舰直屏",
                price: "2799元起",
            },
            {
                imgUrl:
                    "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/68217751d12b1bfd2f9766e458b5e2dd.jpg?thumb=1&w=200&h=200&f=webp&q=90",
                title: "Redmi K40 Pro 系列",
                summary: "骁龙888 / E4 旗舰直屏",
                price: "2799元起",
            },
            {
                imgUrl:
                    "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/68217751d12b1bfd2f9766e458b5e2dd.jpg?thumb=1&w=200&h=200&f=webp&q=90",
                title: "Redmi K40 Pro 系列",
                summary: "骁龙888 / E4 旗舰直屏",
                price: "2799元起",
            },
            {
                imgUrl:
                    "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/68217751d12b1bfd2f9766e458b5e2dd.jpg?thumb=1&w=200&h=200&f=webp&q=90",
                title: "Redmi K40 Pro 系列",
                summary: "骁龙888 / E4 旗舰直屏",
                price: "2799元起",
            },
        ],
        [
            {
                imgUrl:
                    "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/68217751d12b1bfd2f9766e458b5e2dd.jpg?thumb=1&w=200&h=200&f=webp&q=90",
                title: "Redmi K40 Pro 系列",
                summary: "骁龙888 / E4 旗舰直屏",
                price: "2799元起",
            },
            {
                imgUrl:
                    "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/68217751d12b1bfd2f9766e458b5e2dd.jpg?thumb=1&w=200&h=200&f=webp&q=90",
                title: "Redmi K40 Pro 系列",
                summary: "骁龙888 / E4 旗舰直屏",
                price: "2799元起",
            },
        ],
    ];
    let history = useHistory();
    if (props?.brickGoodsData && props?.brickGoodsData[0]?.data) {
        props.brickGoodsData.map((item, index) => {
            brickGoodsData[index] = item.data;
        });
    }
    let titleListData = props.titleListData;
    let state = props.state;
    let brickBannerData =
        state === "手机"
            ? [
                  "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/cb1bd61ad71c45a4f67f09b075463944.jpeg?thumb=1&w=234&h=614&f=webp&q=90",
              ]
            : [
                  "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/116fc43816b87192be4e67cf762e8da5.jpeg?thumb=1&w=234&h=300&f=webp&q=90",
                  "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/1e82177bd8c8cd140e0e582ecaa886dc.jpg?thumb=1&w=234&h=300&f=webp&q=90",
              ];
    // const [brickBanner, setBrickBanner] = useState([]);

    const [titleIndex, setTitleIndex] = useState(0);
    const more = (
        <a href='/#' className='more'>
            查看全部
        </a>
    );
    const titleList = (
        <ul className='title-list'>
            {titleListData.map((item, index) => {
                return (
                    <li className='title-item' key={index}>
                        <span
                            className={titleIndex === index ? "active" : ""}
                            onMouseMove={() => {
                                setTitleIndex(index);
                            }}
                        >
                            {item}
                        </span>
                    </li>
                );
            })}
        </ul>
    );
    return (
        <div className='home-brick'>
            <div className='home-brick-container'>
                <div className='title-row'>
                    <span className='title'>{state}</span>
                    {state === "手机" ? more : titleList}
                </div>
                <div className='brick-box'>
                    <ul className='banner-list'>
                        {brickBannerData.map((item, index) => {
                            return (
                                <li
                                    key={index}
                                    className={
                                        state === "手机"
                                            ? "banner-item-phone"
                                            : "banner-item"
                                    }
                                >
                                    <img src={item} alt='null' />
                                </li>
                            );
                        })}
                    </ul>
                    <ul className='brick-list'>
                        {brickGoodsData[titleIndex].map((item, index) => {
                            return (
                                <li className='brick-item' key={index}>
                                    <a
                                        href='#'
                                        onClick={(e) => {
                                            history.push(
                                                `/shopDetail/${item._id}`
                                            );
                                        }}
                                    >
                                        <img src={item.imgUrl}></img>
                                        <p className='brick-title'>
                                            {item.title}
                                        </p>
                                        <p className='brick-summary'>
                                            {item.summary}
                                        </p>
                                        <p className='brick-price'>
                                            {item.price}
                                        </p>
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
export default HomeBrick;
