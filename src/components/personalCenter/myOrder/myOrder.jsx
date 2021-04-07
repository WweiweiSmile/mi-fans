import "./myOrder.scss";
import tool from "../../../public/tool/tool";
import { connect } from "react-redux";
import { actiontor } from "../../../redux/login";
import { actiontor as actiontorOrder } from "../../../redux/myOrder";
import { bindActionCreators } from "redux";
import { Input, message, Modal } from "antd";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
const { Search } = Input;
const action = { ...actiontor, ...actiontorOrder };
let MyOrder = (props) => {
	console.log(props, "MyOrder");
	let history = useHistory();
	let [orderId, setOrderId] = useState("");
	let [isModalVisible, setIsModelVisible] = useState(false);

	// 等待付款  ,待收货, 已收货
	let orderStates = [
		"have-goods",
		"wait-pay",
		"wait-goods",
		"wait-goods",
		"have-goods",
	];

	let orderStateWord = ["已取消", "下单", "已付款", "发货", "签收完成"];
	let orders = [];
	let userId = "";
	if (JSON.stringify(props.userData) !== "{}") {
		userId = props.userData.data[0]._id;
	}
	if (JSON.stringify(props.orderData) !== "{}") {
		orders = props.orderData.data;
	}
	useEffect(() => {
		return function () {
			props.unPayOrder();
		};
	}, []);
	useEffect(() => {
		props.getOrder(userId);
	}, [props.userData]);
	useEffect(() => {
		if (!tool.isEmpty(props.payOrderResult)) {
			if (props.payOrderResult?.code === 1000) {
				message.success("付款完成!!!!");
				props.getOrder(userId);
			} else {
				message.error("付款失败了!!!!");
			}
		}
	}, [props.payOrderResult]);
	let modalOnOk = () => {
		setIsModelVisible(false);
		// 付款成功 状态为 2:付款
		props.payOrder(orderId);
	};
	let modalOnConcel = () => {
		setIsModelVisible(false);
		// 下单  状态为 1:下单
		// placeOrder(1);
	};
	return (
		<div className='my-order'>
			<Modal
				title='付款'
				getContainer={false}
				visible={isModalVisible}
				onOk={modalOnOk}
				onCancel={modalOnConcel}
				cancelText='取消付款'
				okText='付款完成'
			>
				<p className='pay-title'>扫描二维码进行付款</p>
				<div className='pay-img'>
					<img src='https://qr.api.cli.im/newqr/create?data=%E5%9E%83%E5%9C%BE&level=H&transparent=0&bgcolor=%23FFFFFF&forecolor=%2F%2Fstatic.clewm.net%2Fcli%2Fimages%2Fbeautify%2Fnew%2Fforecolor%2F24.png&blockpixel=12&marginblock=2&logourl=&size=400&logoshape=no&embed_text_fontfamily=simhei.ttc&eye_use_fore=1&background=&wper=0&hper=0&tper=0&lper=0&qrcode_eyes=pin-3.png&outcolor=&incolor=&body_type=0&qr_rotate=0&text=&fontfamily=msyh.ttf&fontsize=30&fontcolor=&logo_pos=0&kid=bizcliim&time=1617394602&key=b64995f7448a8c430f202f8615215cd5'></img>
				</div>
			</Modal>
			<p className='title'>
				我的订单
				<span>请谨防钓鱼链接或诈骗电话，了解更多</span>
			</p>
			<div className='more'>
				<div className='filter-list'>
					<span className='active'>全部有效订单</span>
					<span>待支付</span>
					<span>待收货</span>
				</div>
				<div className='search'>
					<Search></Search>
				</div>
			</div>
			<div className='order-list'>
				{orders.map((item, index) => {
					let address = item.address;
					let goods = item.goods;
					let sumPrice = 0;
					goods.map((item, index) => {
						sumPrice += item.price * item.buyQuantity;
					});
					let isAllAppraise = goods.every((item, index) => {
						return !item.isAppraise;
					});
					return (
						<div
							className={`order-item ${orderStates[item.status]}`}
							key={index}
						>
							<div className='title-row'>
								<p className='title'>{orderStateWord[item.status]}</p>
								<div className='summary-row'>
									<p className='summary'>
										<span>{item.date}</span>
										<span>{address.name}</span>
										<span>订单号:{item._id}</span>
										<span>在线支付</span>
									</p>
									<p className='price'>
										应付金额:
										<span className='important'>{sumPrice}元</span>
									</p>
								</div>
							</div>
							<div className='order-content'>
								<div className='shop-list'>
									{goods.map((gItem, gIndex) => {
										return (
											<div className='shop' key={gIndex}>
												<img
													src={gItem.imgUrl}
													alt='null'
													className='shop-img'
												/>
												<div className='shop-summary'>
													<p>
														{gItem.title +
															"  " +
															gItem.color[gItem.colorChoose].color +
															"  " +
															gItem.vision[gItem.visionChoose].vision}
													</p>
													<p>
														{gItem.price}元 x {gItem.buyQuantity}
													</p>
												</div>
											</div>
										);
									})}
								</div>
								<div className='btns'>
									{item.status === 1 ? (
										<a
											className='promptly-pay'
											onClick={() => {
												setIsModelVisible(true);
												setOrderId(item._id);
											}}
										>
											立即付款
										</a>
									) : (
										""
									)}
									<a
										onClick={() => {
											history.push("/personalCenter/detailOrder/" + item._id);
										}}
									>
										订单详情
									</a>
									{item.status === 4 ? <a>申请售后</a> : ""}
									{item.status === 4 && isAllAppraise ? (
										<a href={"/personalCenter/goodsAppraise/" + item._id}>
											订单评价
										</a>
									) : (
										""
									)}
									<a>联系客服</a>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};
export default connect(
	({ Login, MyOrder }) => ({
		...Login,
		...MyOrder,
	}),
	(dispatch, ownProps) => bindActionCreators(action, dispatch)
)(MyOrder);
