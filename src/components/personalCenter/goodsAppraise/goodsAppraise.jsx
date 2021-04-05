import "./goodsAppraise.scss";
import { connect } from "react-redux";
import { actiontor as actiontorLogin } from "../../../redux/login";
import { actiontor as actiontorOrder } from "../../../redux/myOrder";
import { actiontor as actiontorAppraise } from "../../../redux/appraise";
import { bindActionCreators } from "redux";
import { Input, Form, Upload, Rate, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
const { Search, TextArea } = Input;
const actiontor = {
	...actiontorLogin,
	...actiontorOrder,
	...actiontorAppraise,
};
let GoodsAppraise = (props) => {
	console.log(props, "goods appraise");
	let [form] = Form.useForm();
	let goods = [];
	let history = useHistory();
	let { orderId } = useParams();
	//  存放多个评价图片的数组 ,每个评价图片也是一个数组
	let [fileLists, setFileLists] = useState([[]]);
	// n星好评 的数组
	let [appraiseStar, setAppraiseStar] = useState([]);
	useEffect(() => {
		// 获取订单
		props.getOrderOne(orderId);
	}, []);
	if (Object.keys(props.orderOneData).length > 0) {
		goods = props.orderOneData.data.goods;
	}
	// 当 有新的文件上传时
	let handleChange = ({ fileList }, index) => {
		fileLists[index] = fileList;
		setFileLists([...fileLists]);
	};
	// 提交评价按钮
	let submitAppraise = (index, goodsId) => {
		// 获取 商品对应的 评价文本
		let appraiseText = form.getFieldsValue(true)["appraiseText" + index];
		// 获取 商品对应的 评价图片
		let fileList = fileLists[index];
		// 获取上传图片的 访问地址
		let imgUrl = fileList.map((item, index) => {
			return item.response;
		});
		// 评价星级
		let star = appraiseStar[index];
		// 商品下标
		let goodsIndex = index;
		let userId = props.userData.data[0]._id;
		let appraiseOb = {
			appraiseText,
			imgUrl,
			star,
			orderId,
			goodsIndex,
			goodsId,
			userId,
		};
		props.submitAppraise(appraiseOb);
		console.log(appraiseOb, "appraiseOb");
	};
	return (
		<div className='goods-appraise'>
			<p className='title'>
				商品评价
				<span>请谨防钓鱼链接或诈骗电话，了解更多</span>
			</p>
			<div className='goods-appraise-content'>
				<ul className='goods-list'>
					<Form form={form}>
						{goods.map((item, index) => {
							if (item.isAppraise) return;
							return (
								<li className='goods-item' key={index}>
									<div className='goods-info'>
										<img width={80} src={item.imgUrl} alt='' />
										<p className='goods-title'>
											<span>{item.title}</span>
											<span>{item.vision[item.visionChoose].vision}</span>
											<span>{item.color[item.colorChoose].color}</span>
										</p>
										<p className='goods-price'>
											<span>{item.price}</span>
											<span>X</span>
											<span>{item.buyQuantity}</span>
										</p>
										<p className='goods-sumPrice'>{0}</p>
									</div>
									<div className='appraise-grade'>
										<span className='grade-title'>评价:</span>
										<Rate
											value={appraiseStar[index]}
											onChange={(value) => {
												appraiseStar[index] = value;
												setAppraiseStar([...appraiseStar]);
											}}
										></Rate>
									</div>
									<div className='appraise-form'>
										<Form.Item name={`appraiseText${index}`}>
											<TextArea rows={4}></TextArea>
										</Form.Item>
										<Upload
											action='/cs/appraise/upload'
											listType='picture-card'
											fileList={fileLists[index]}
											onPreview={() => {}}
											onChange={(e) => {
												handleChange(e, index);
											}}
										>
											<div>
												<PlusOutlined />
												<div style={{ marginTop: 8 }}>Upload</div>
											</div>
										</Upload>
									</div>
									<Button
										onClick={() => {
											submitAppraise(index, item._id);
										}}
									>
										提交评价
									</Button>
								</li>
							);
						})}
					</Form>
				</ul>
			</div>
		</div>
	);
};
export default connect(
	({ Login, MyOrder, Appraise }) => ({ ...Login, ...MyOrder, ...Appraise }),
	(dispatch, ownProps) => bindActionCreators(actiontor, dispatch)
)(GoodsAppraise);
