import "./address.scss";
import { Modal } from "antd";
import { useState, useEffect, useRef } from "react";
import tool from "../../../public/tool/tool";
import { Form, Input, Row, Col, Select, Cascader } from "antd";
import { connect } from "react-redux";
import { actiontor as actiontorLogin } from "../../../redux/login";
import { actiontor as actiontorAddress } from "../../../redux/address";
import { bindActionCreators } from "redux";
const actiontor = { ...actiontorAddress, ...actiontorLogin };
const { Option } = Select;
const { TextArea } = Input;
let Address = (props) => {
	let userId = props.userData.data[0]._id;
	let [isModalVisible, setIsModalVisible] = useState(false);
	let [formExample] = Form.useForm();
	let [userAddress, setUserAddress] = useState([]);
	let [isMore, setIsMore] = useState(false);
	let [addressListStyle, setAddressListStyle] = useState({});
	// 地址栏的选择  -1为添加  其他从0开始
	let [addressIndex, setAddressIndex] = useState(-1);
	// 地址栏样式选择
	let [addressActiveIndex, setAddressActiveIndex] = useState(-1);
	// address 上次的值判断是否做了修改

	let [lastAddress, setLastAddress] = useState({});
	const residences = [
		{
			value: "浙江",
			label: "浙江",
			children: [
				{
					value: "杭州",
					label: "杭州",
					children: [
						{
							value: "西湖",
							label: "西湖",
						},
					],
				},
			],
		},
		{
			value: "江苏",
			label: "江苏",
			children: [
				{
					value: "江苏",
					label: "江苏",
					children: [
						{
							value: "中华门",
							label: "中华门",
						},
					],
				},
			],
		},
	];
	useEffect(() => {
		userAddress = setUserAddress([...props.userData.data[0].address]);
	}, [props.userData]);
	useEffect(() => {
		let { userName, pwd } = props.userData.data[0];
		props.getUser({ userName, pwd });
	}, [
		props.pushAddressResult,
		props.deleteAddressResult,
		props.modifyAddressResult,
	]);
	// 显示弹窗
	const showModal = (index) => {
		setIsModalVisible(true);
		setAddressIndex(index);
		setForm(index);
		// 保存该地址的上一次值
		if (index === -1) {
			lastAddress = setLastAddress({});
		} else {
			lastAddress = setLastAddress(userAddress[index]);
		}
	};
	// 删除地址
	let deleteAddress = (index) => {
		props.deleteAddress({ userId, index });
	};
	const handleOk = () => {
		let address = formExample.getFieldsValue(true);
		console.log(address, "address");
		console.log(lastAddress, "lastAddress");
		if (!tool.deepCompare(address, lastAddress)) {
			if (addressIndex === -1) {
				// 添加地址
				props.pushAddress(userId, address);
			} else {
				// 删除地址
				props.modifyAddress({ userId, index: addressIndex, address });
			}
		}
		setIsModalVisible(false);
	};

	const handleCancel = () => {
		setIsModalVisible(false);
	};
	// 重置和回显 地址表单
	const setForm = (index) => {
		let address = [
			{ name: "name", value: "" },
			{ name: "city", value: [] },
			{ name: "detailAddress", value: "" },
			{ name: "phone", value: "" },
		];
		if (index !== -1) {
			// userAddress[index].key();
			address = [];
			let userAddressItem = userAddress[index];
			console.log(userAddressItem);
			for (let i in userAddressItem) {
				address.push({ name: i, value: userAddressItem[i] });
			}
		}
		formExample.setFields(address);
	};
	return (
		<div className='shipping-address'>
			<h1>收货地址</h1>
			<ul className='address-list' style={addressListStyle}>
				<li className='add-address'>
					<i
						className='iconfont iconjia1'
						onClick={() => {
							showModal(-1);
						}}
					></i>
					<p>添加新地址</p>
					<Modal
						title='添加收货地址'
						visible={isModalVisible}
						onOk={handleOk}
						onCancel={handleCancel}
						width={700}
					>
						<Form
							form={formExample}
							labelCol={4}
							wrapperCol={14}
							layout='horizontal'
						>
							<Row gutter={24}>
								<Col span={12}>
									<Form.Item name='name'>
										<Input placeholder='请输入您的姓名'></Input>
									</Form.Item>
								</Col>
								<Col span={12}>
									<Form.Item name='phone'>
										<Input placeholder='请输入您的电话'></Input>
									</Form.Item>
								</Col>
							</Row>
							<Row gutter={24}>
								<Col span={24}>
									<Form.Item
										name='city'
										rules={[
											{
												type: "array",
												required: true,
												message: "请选择地址",
											},
										]}
									>
										<Cascader placeholder='请选择地址' options={residences} />
									</Form.Item>
								</Col>
							</Row>
							<Row gutter={24}>
								<Col span={24}>
									<Form.Item name='detailAddress'>
										<TextArea placeholder='请输入您的详细地址'></TextArea>
									</Form.Item>
								</Col>
							</Row>
						</Form>
					</Modal>
				</li>
				{userAddress.map((item, index) => {
					return (
						<li
							className={`other-address ${
								addressActiveIndex === index ? "active" : ""
							} `}
							onClick={() => {
								setAddressActiveIndex(index);
							}}
							key={index}
						>
							<p className='name'>{item.name}</p>
							<p className='phone'>{item.phone}</p>
							<p className='address'>
								{item.city.map((item, index) => {
									return (
										<span className='city-item' key={index}>
											{item}
										</span>
									);
								})}
							</p>
							<p className='detail-address'>{item.detailAddress}</p>
							<div className='actions'>
								<span
									onClick={() => {
										showModal(index);
									}}
								>
									修改
								</span>
								<span
									onClick={() => {
										deleteAddress(index);
									}}
								>
									删除
								</span>
							</div>
						</li>
					);
				})}
			</ul>
			<div
				className='more'
				onClick={() => {
					isMore
						? setAddressListStyle({ height: "168px" })
						: setAddressListStyle({ height: "auto" });
					isMore ? setIsMore(false) : setIsMore(true);
				}}
			>
				{userAddress.length > 2
					? isMore
						? "收起更多地址"
						: "显示更多地址"
					: ""}
			</div>
		</div>
	);
};
export default connect(
	({ Login, Address }) => ({ ...Login, ...Address }),
	(dispatch, ownProps) => bindActionCreators(actiontor, dispatch)
)(Address);
