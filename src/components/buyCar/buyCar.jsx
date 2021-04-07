import "./buyCar.scss";
import Table from "../buyCar/table/table";
import PageFooter from "../../public/pageFooter/pageFooter";
import tool from "../../public/tool/tool";
import { connect } from "react-redux";
import { actiontor } from "../../redux/buyCar";
import { bindActionCreators } from "redux";
import { useState, useEffect } from "react";
import { message } from "antd";
import HeaderTab from "../../public/headerTab/headerTab";
import { useHistory } from "react-router-dom";
let BuyCar = (props) => {
	let goods = [];
	let totalPrice = 0;
	let userId = "";
	let history = useHistory();
	let [rowSelectKeys, setRowSelectKeys] = useState([]);
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
				return (
					<img src={text} width={80} height={80} className='shop-img'></img>
				);
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
			render(text, row) {
				return (
					<span className='num'>
						<i
							onClick={() => {
								goodsOperating(props.userData.data[0]._id, row, "subtract");
							}}
							className='iconfont iconjian'
						></i>
						<span className='number'>{text}</span>
						<i
							onClick={() => {
								goodsOperating(props.userData.data[0]._id, row, "add");
							}}
							className='iconfont iconjia'
						></i>
					</span>
				);
			},
		},
		{
			title: "小计",
			dataIndex: "sumPrice",
			render(text, row) {
				return <span className='sumPrice'>{text}</span>;
			},
		},
		{
			title: "操作",
			dataIndex: "actions",
			render(text, row) {
				return (
					<i
						onClick={() => {
							goodsOperating(props.userData.data[0]._id, row, "remove");
						}}
						className='iconfont iconx'
					></i>
				);
			},
		},
	];

	let dataSource = [
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

	useEffect(() => {
		props.getBuyCar(userId);
	}, [props.userData, props.goodsOperatingResult]);
	useEffect(() => {}, [props.goodsChooseData]);
	if (JSON.stringify(props.buyCarData) !== "{}" && props.buyCarData.data) {
		goods = props.buyCarData.data.goods;
	}
	if (JSON.stringify(props.userData) !== "{}" && props.userData.data) {
		userId = props.userData.data[0]._id;
	}
	// if (
	//     JSON.stringify(props.goodsOperatingResult) !== "{}" &&
	//     !(props.goodsOperatingResult instanceof Promise)
	// ) {
	//     props.getBuyCar(userId);
	// }
	dataSource = goods?.map((item, index) => {
		let shopName =
			item.title +
			" " +
			item.color[item.colorChoose].color +
			" " +
			item.vision[item.visionChoose].vision;
		let price =
			item.price +
			item.color[item.colorChoose].price +
			item.vision[item.visionChoose].price;
		let sumPrice = price * item.buyQuantity;
		totalPrice += sumPrice;
		return {
			...item,
			imgs: item.imgUrl,
			shopName,
			price,
			sumPrice,
			num: item.buyQuantity,
			key: index,
		};
	});
	let goodsOperating = (userId, goods, operating) => {
		if (operating === "subtract" && goods.buyQuantity === 1) {
			return;
		}
		props.goodsOperating(userId, goods, operating);
	};
	let rowSelectChange = (rowSelectKeys) => {
		setRowSelectKeys(rowSelectKeys);
	};

	let settlement = () => {
		props.goodsChoose(userId, rowSelectKeys);
	};
	return (
		<div className='buy-car'>
			<HeaderTab></HeaderTab>
			<div className='header'>
				<div className='header-container'>
					<div className='header-logo'>
						<a href='/homePage'></a>
					</div>
					<div className='header-title'>
						<span className='my-buy-car'>我的购物车</span>
						<span className='comment'>
							温馨提示：产品是否购买成功，以最终下单为准哦，请尽快结算
						</span>
					</div>
				</div>
			</div>
			<div className='page-main'>
				<div className='page-main-container'>
					<Table
						rowSelection={{
							selectedRowKeys: rowSelectKeys,
							onChange: rowSelectChange,
						}}
						columns={columns}
						dataSource={dataSource}
						pagination={false}
					></Table>
					<div className='settlement'>
						<div className='settlement-left'>
							<span className='divide'>继续购物</span>
							<span className='divide'>
								共<span className='important'>{dataSource.length}</span>
								件商品，已选择
								<span className='important'>{rowSelectKeys.length}</span>件
							</span>
						</div>
						<div className='settlement-right'>
							<span className='total'>
								合计:
								<span className='total-price'>{totalPrice}</span>元
							</span>
							<span
								className='total-btn'
								onClick={() => {
									if (!tool.isEmpty(rowSelectKeys)) {
										settlement();
										history.push("/buyCheckout");
									} else {
										message.warning("有选中的商品才能去结算哟~~~~");
									}
								}}
							>
								去结算
							</span>
						</div>
					</div>
				</div>
			</div>
			<PageFooter></PageFooter>
		</div>
	);
};

export default connect(
	({ BuyCar, Login }) => ({ ...BuyCar, ...Login }),
	(dispatch, ownProps) => bindActionCreators(actiontor, dispatch)
)(BuyCar);
