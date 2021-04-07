import "./shopDetail.scss";
import HeaderTab from "../../public/headerTab/headerTab";
import Nav from "../../public/nav/nav";
import PageFooter from "../../public/pageFooter/pageFooter";
import Overview from "./overview/overview";
import UserAppraise from "./userAppraise/userAppraise";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actiontor } from "../../redux/shopDetail";
import { useParams } from "react-router-dom";
let ShopDetail = (props) => {
	let [isOverview, setIsOverview] = useState(true);
	let { id } = useParams();
	useEffect(() => {
		props.getGoodsInfo(id);
	}, []);
	console.log(props, "shopDetail");
	return (
		<div className='shop-detail'>
			<HeaderTab></HeaderTab>
			<Nav></Nav>
			<div className='nav-bar'>
				<div className='detail-nav-bar'>
					<span className='title'>
						{JSON.stringify(props.goodsInfoData) !== "{}"
							? props.goodsInfoData.data[0].title
							: "手机名"}
					</span>
					<div>
						<a className='con' onClick={() => setIsOverview(true)}>
							概述
						</a>
						<a className='con' onClick={() => setIsOverview(false)}>
							用户评价
						</a>
					</div>
				</div>
			</div>
			{isOverview ? (
				<Overview goodsInfo={props.goodsInfoData}></Overview>
			) : (
				<UserAppraise></UserAppraise>
			)}
			<PageFooter></PageFooter>
		</div>
	);
};
export default connect(
	({ ShopDetail }) => ({
		...ShopDetail,
	}),
	(dispatch, ownProps) => bindActionCreators(actiontor, dispatch)
)(ShopDetail);
