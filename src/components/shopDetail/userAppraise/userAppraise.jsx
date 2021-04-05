import "./userAppraise.scss";
import Input from "./replyInput/replyInput";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import shopDetail, {
	actiontor as shopDetailActiontor,
} from "../../../redux/shopDetail";
import { bindActionCreators } from "redux";
const actiontor = { ...shopDetailActiontor };
let UserAppraise = (props) => {
	console.log(props, "userAppraise");
	//  评价种类
	let [appraiseType, setAppraiseType] = useState(0);
	// 评价种类 文本
	let appraiseTypes = [
		"全部",
		"5星评价",
		"4星评价",
		"3星评价",
		"2星评价",
		"1星评价",
	];
	let appraises = [
		{
			imgUrl: ["https://i1.mifile.cn/a2/1615690991_5671155_s1512_2016wh.jpg"],
			userName: "SlightSmiled",
			avatar:
				"https://cdn.cnbj0.fds.api.mi-img.com/b2c-data-mishop/9bd716bcdd5d6e4968d3adc3c5b6353b.jpg",
			appraiseText: "真是个垃圾手机",
			likeNum: 0,
			likeUser: [],
			comment: [
				{
					userName: "小米官方",
					avatar: "//s01.mifile.cn/i/logo.png",
					commentText:
						"我们的志向是星辰大海，厚道的人运气不会太差，十年，我们初心从未改变，远大志向的厚道公司一定会走得更远。让一切美好的事物化为我的祝福，永远陪伴着你。",
					likeNum: 0,
				},
			],
			date: "2021-10-07",
		},
	];
	useEffect(() => {
		let goodsId = props.goodsInfoData.data[0]._id;
		props.getGoodsAppraise(goodsId);
	}, []);
	return (
		<div className='user-appraise'>
			<div className='container-appraise'>
				<div className='comment-top'>
					<div className='title'>大家认为</div>
					<div className='category'>
						{appraiseTypes.map((item, index) => {
							return (
								<div
									kye={index}
									onClick={() => {
										setAppraiseType(index);
									}}
									className={`item-category ${
										index === appraiseType ? "active" : ""
									}`}
								>
									{item}
								</div>
							);
						})}
					</div>
				</div>
				<div className='comment-mid'>
					<div className='mid-left'>
						<div className='top-left'>
							<div className='title'>热门评价</div>
							<div className='is-img-appraise active'>
								<i className='iconfont-hook'></i>
								<span className='title-hook'>只显示带图评价</span>
							</div>
						</div>
						<div className='content-left'>
							<ul className='list-appraise'>
								{appraises.map((item, index) => {
									return (
										<li className='item-appraise' key={index}>
											<div className='top'>
												<div className='time'>
													<div className='avatar'>
														<img src={item.avatar} alt='null'></img>
													</div>
													<p className='users'>{item.userName}</p>
													<p className='times'>{item.date}</p>
												</div>
												<div className='love'>
													<i className='iconfont iconV'></i>
													超爱
												</div>
											</div>
											<div className='comment'>{item.appraiseText}</div>
											<div className='images'>
												{item.imgUrl.map((iItem, iIndex) => {
													return (
														<div className='item-image' key={iIndex}>
															<img src={iItem}></img>
														</div>
													);
												})}
											</div>
											<div className='appreciate'>
												<i className='iconfont icondianzan'></i>
												{item.likeNum}
											</div>
											<div className='reply'>
												<Input
													placeholder='回复楼主'
													allowClear
													enterButton='确定回复'
													size='large'
													// onSearch={onSearch}
												/>
											</div>
											<div className='comment-list'>
												{item.comment.map((cItem, cIndex) => {
													return (
														<div className='comment-item' key={cIndex}>
															<div className='comment-avatar'>
																<img src={cItem.avatar} alt='null' />
															</div>
															<div className='comment-content'>
																<span>{cItem.userName}</span>
																<p>
																	{cItem.commentText}
																	<i className='iconfont icondianzan'></i>
																	{cItem.likeNum}
																</p>
															</div>
														</div>
													);
												})}
											</div>
										</li>
									);
								})}
							</ul>
						</div>
						<div className='more'>加载更多</div>
					</div>
					<div className='mid-right'>
						<div className='right-top'>
							<span className='person-num'>555691</span>
							人购买后满意
						</div>
						<div className='right-satisfaction'>
							<span className='font'>满意度:96.7%</span>
							<div className='bg'></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default connect(
	({ ShopDetail }) => ({ ...ShopDetail }),
	(dispatch) => bindActionCreators(actiontor, dispatch)
)(UserAppraise);
