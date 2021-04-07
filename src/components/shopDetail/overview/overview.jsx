import Carousel from "../detailCarousel/detailCarousel";
import LazyLoad from "react-lazyload";
import tool from "../../../public/tool/tool";
import { useEffect, useState } from "react";
import { Modal, message } from "antd";
import { connect } from "react-redux";
import { actiontor as actiontorLogin } from "../../../redux/login";
import { actiontor as actiontorShopDetail } from "../../../redux/shopDetail";
import { bindActionCreators } from "redux";
import "./overview.scss";
let actiontor = { ...actiontorLogin, ...actiontorShopDetail };
let Overview = (props) => {
	console.log(props, "overview");
	let goodsInfo = {};
	let userData = {};
	let productCarouselImg = [
		"https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1596073775.20786486.jpg",
		"https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1596073806.17964652.jpg",
		"https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1596073795.54981742.jpg",
	];
	let carouselImgStyle = {
		width: "560px",
		height: "560px",
	};
	let listImg = [
		"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0afbfa8fccea7ede2524194c9781f4d5.jpg",
		"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/626aebdf48d130dab12d91c9892fe96e.jpg",
		"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c79e71c3791a07ac8e0c27e296fd46ee.jpg",
		"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d685995327fcf487b98b745aee20dde0.jpeg",
		"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/db461be6e96ca37f36addee3d838cd78.jpg",
		"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/01221b85cd29d4d730a2096049c7eaa1.jpg",
		"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/07a79d52868544895383df5260fdea9c.jpg",
		"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e3d5d8e5e6ff59e7742e68b6dd64d96d.jpg",
		"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4a9b2ef5351f6d3e0e2dbd02d959313d.jpg",
		"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3c05fe1831f528c21fb2689443171535.jpg",
		"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1a5f9f2feb7ec6c053762ea709dbfab9.jpg",
		"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/af13ebd7ee354a2b12f8d72ad2f9edb1.jpg",
		"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3bf74a4e6e17e54ce632b6e28f7815b1.jpg",
		"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/471ef2b6277a88a503301b607fa9e2f5.jpg",
		"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/682a5caed871d50a15da40d0e687286c.jpg",
		"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/742ea70d16de9683d28728b860fc0409.jpg",
		"https://i8.mifile.cn/b2c-mimall-media/1a84b2b629512205bf528aae91361efb.jpg",
		"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a482afa34053b1b32ece1023475af7fb.jpeg",
	];
	let visions = [];
	let colors = [];
	let addressCity = ["无"];
	let [isParameter, setIsParameter] = useState(false);
	let [visionActive, setVisionActive] = useState(0);
	let [colorActive, setColorActive] = useState(0);
	let [isModalVisible, setIsModalVisible] = useState(false);
	let [paginationCurren, setPaginationCurren] = useState(0);
	let [addressCityCurren, setAddressCityCurren] = useState(0);
	if (JSON.stringify(props.goodsInfo) !== "{}") {
		goodsInfo = props.goodsInfo.data[0];
		listImg = isParameter ? goodsInfo.parameterImg : goodsInfo.overviewImg;
		visions = goodsInfo.vision;
		colors = goodsInfo.color;
		productCarouselImg = goodsInfo.productImg;
	}
	if (JSON.stringify(props.userData) !== "{}") {
		userData = props.userData.data[0];
		addressCity = userData.address[addressCityCurren].city;
	}
	useEffect(() => {
		return function () {
			props.unJoinBuyCar();
		};
	}, []);
	useEffect(() => {
		if (!tool.isEmpty(props.joinBuyCarData)) {
			if (props.joinBuyCarData?.code === 1000) {
				message.success("加入购物车成功");
			} else {
				message.error("加入购物车失败");
			}
		}
	}, [props.joinBuyCarData]);

	const handleOk = () => {
		setIsModalVisible(false);
	};

	const handleCancel = () => {
		setIsModalVisible(false);
	};
	let joinBuyCar = () => {
		if (JSON.stringify(props.userData) === "{}") {
			message.error("请登录后再执行该操作!");
			return;
		}
		let userId = userData?._id;
		let goods = {
			...goodsInfo,
			colorChoose: colorActive,
			visionChoose: visionActive,
			buyQuantity: 1,
		};
		props.joinBuyCar(userId, goods);
	};
	return (
		<div className='overview'>
			<div className='product-box'>
				<div className='container'>
					<div className='product-carousel'>
						<Carousel>
							{productCarouselImg.map((item, index) => {
								return (
									<div key={index}>
										<img src={item} alt='null' style={carouselImgStyle} />
									</div>
								);
							})}
						</Carousel>
					</div>
					<div className='product-introduction'>
						<p className='introduction-title'>
							{JSON.stringify(props.goodsInfo) !== "{}"
								? goodsInfo.title
								: "手机名"}
						</p>
						<div className='introduction-summary'>
							<span className='important'></span>
							{JSON.stringify(props.goodsInfo) !== "{}"
								? goodsInfo.introduce
								: "手机介绍"}
						</div>
						<p className='merchant'>小米自营</p>
						<p className='price'>
							<span className='price-now'>{goodsInfo.price} 元</span>
							{/* <del className='price-old'>3999元</del> */}
						</p>
						<div className='line'></div>
						<div className='production-address'>
							<div className='detail-address'>
								{addressCity.map((item, index) => {
									return <span key={index}>{item}</span>;
								})}
								{/* <span>重庆</span>
                                <span>重庆市</span>
                                <span>渝北区</span>
                                <span>木耳镇</span> */}
								<a
									className='modify'
									onClick={() => {
										setIsModalVisible(true);
									}}
								>
									修改
								</a>
								<Modal
									title='修改地址'
									visible={isModalVisible}
									onOk={handleOk}
									onCancel={handleCancel}
									width={600}
									getContainer={false}
								>
									<p className='my-address'>我的收货地址</p>
									{JSON.stringify(props.userData) !== "{}" ? (
										<div>
											<div className='address-content'>
												{userData.address.map((item, index) => {
													return (
														<div
															className='address-item'
															key={index}
															onClick={() => {
																setAddressCityCurren(index);
																setIsModalVisible(false);
															}}
														>
															<div>
																<p className='title-row'>
																	<span>{item.name}</span>
																	<span>{item.phone}</span>
																</p>
																<p className='address-row'>
																	{item.city.map((item, index) => {
																		return <span key={index}>{item}</span>;
																	})}
																</p>
															</div>
														</div>
													);
												})}
											</div>
										</div>
									) : (
										<div className='no-login'>请登录后,选择地址!</div>
									)}
								</Modal>
							</div>
							<div className='is-have'>该地区有现货</div>
						</div>
						<div className='select'>
							<p className='title'> 选择版本</p>
							{visions.map((item, index) => {
								return (
									<span
										onClick={() => {
											setVisionActive(index);
										}}
										className={`box-select  ${
											visionActive === index ? "active" : ""
										}`}
										key={index}
									>
										{item.vision}
									</span>
								);
							})}
						</div>
						<div className='select'>
							<p className='title'>选择颜色</p>
							{colors.map((item, index) => {
								return (
									<span
										onClick={() => {
											setColorActive(index);
										}}
										className={`box-select  ${
											colorActive === index ? "active" : ""
										}`}
										key={index}
									>
										{item.color}
									</span>
								);
							})}
							{/* <span className='box-select  active'>国风雅灰</span>
                            <span className='box-select'>钛银黑</span>
                            <span className='box-select'>冰海蓝</span>
                            <span className='box-select'>蜜桃金</span> */}
						</div>
						<div className='select-list'>
							<p className='summary-list'>
								<span>小米10</span>
								<span>
									全网通版
									<span>
										{visions[visionActive] ? visions[visionActive].vision : ""}
									</span>
								</span>
								<span>
									{colors[colorActive] ? colors[colorActive].color : ""}
								</span>
							</p>
							<p className='sum-price'>
								总计：
								{goodsInfo.price +
									(colors[colorActive] ? colors[colorActive].price : 0) +
									(visions[visionActive] ? visions[visionActive].price : 0)}
								元
							</p>
						</div>
						<div className='settlement'>
							<span
								className='add-buy-car'
								onClick={() => {
									joinBuyCar();
								}}
							>
								加入购物车
							</span>
						</div>
					</div>
				</div>
			</div>
			<div className='detail-img'>
				<p className='tab-img'>
					<span
						onClick={() => {
							setIsParameter(false);
						}}
					>
						商品概述
					</span>
					<span className='separate'>|</span>
					<span
						onClick={() => {
							setIsParameter(true);
						}}
					>
						商品参数
					</span>
				</p>
				<div className='list-img'>
					{listImg.map((item, index) => {
						return (
							<LazyLoad key={index}>
								<img src={item} alt='null'></img>
							</LazyLoad>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default connect(
	({ Login, ShopDetail }) => ({ ...Login, ...ShopDetail }),
	(dispatch, ownProps) => bindActionCreators(actiontor, dispatch)
)(Overview);
