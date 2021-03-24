import "./buyCar.scss";
import Table from "../buyCar/table/table";
import pageFooter from "../../public/pageFooter/pageFooter";
import PageFooter from "../../public/pageFooter/pageFooter";
let BuyCar = () => {
    const columns = [
        {
            title: "全选",
            dataIndex: "selectAll",
            reder(text) {
                return "";
            },
        },
        {
            title: "",
            dataIndex: "imgs",
            render(text) {
                return <img src={text} className='shop-img'></img>;
            },
        },
        {
            title: "商品名称",
            dataIndex: "shopName",
        },
        {
            title: "单价",
            dataIndex: "price",
        },
        {
            title: "数量",
            dataIndex: "num",
            align: "center",

            render() {
                return (
                    <span className='num'>
                        <i className='iconfont iconjian'></i>
                        <span className='number'>33</span>
                        <i className='iconfont iconjia'></i>
                    </span>
                );
            },
        },
        {
            title: "小计",
            dataIndex: "sumPrice",
        },
        {
            title: "操作",
            dataIndex: "actions",
            render() {
                return <i className='iconfont iconx'></i>;
            },
        },
    ];
    const dataSource = [
        {
            selectAll: "",
            imgs:
                "//cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1560169782.26895892.jpg?thumb=1&w=80&h=80",
            shopName: "垃圾商品",
            price: "22",
            sumPrice: "33",
            actions: "",
            key: 0,
        },
        {
            selectAll: "",
            imgs:
                "//cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1560169782.26895892.jpg?thumb=1&w=80&h=80",
            shopName: "垃圾商品",
            price: "22",
            sumPrice: "33",
            actions: "",
            key: 1,
        },
        {
            selectAll: "",
            imgs:
                "//cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1560169782.26895892.jpg?thumb=1&w=80&h=80",
            shopName: "垃圾商品",
            price: "22",
            sumPrice: "33",
            actions: "",
            key: 2,
        },
    ];
    return (
        <div className='buy-car'>
            <div className='header'>
                <div className='header-container'>
                    <div className='header-logo'>
                        <a href='https://www.mi.com/index.html'></a>
                    </div>
                    <div className='header-title'>
                        <span className='my-buy-car'>我的购物车</span>
                        <span className='comment'>
                            温馨提示：产品是否购买成功，以最终下单为准哦，请尽快结算
                        </span>
                    </div>
                    <div className='topbar'>
                        <div className='topbar-info'>
                            <span className='user-name'>
                                夜里的灯光
                                <i className='iconfont iconxia'></i>
                            </span>
                            <span>我的订单</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='page-main'>
                <div className='page-main-container'>
                    <Table
                        rowSelection={{ type: "checkbox" }}
                        columns={columns}
                        dataSource={dataSource}
                        pagination={false}
                    ></Table>
                    <div className='settlement'>
                        <div className='settlement-left'>
                            <span className='divide'>继续购物</span>
                            <span className='divide'>
                                共<span className='important'>9</span>
                                件商品，已选择
                                <span className='important'>9</span>件
                            </span>
                        </div>
                        <div className='settlement-right'>
                            <span className='total'>
                                合计:
                                <span className='total-price'>6609.7</span>元
                            </span>
                            <span className='total-btn'>去结算</span>
                        </div>
                    </div>
                </div>
            </div>
            <PageFooter></PageFooter>
        </div>
    );
};

export default BuyCar;
