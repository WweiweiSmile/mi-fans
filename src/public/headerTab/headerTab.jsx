import "./headerTab.scss";
import { connect } from "react-redux";
import { actiontor } from "../../redux/login";
import { bindActionCreators } from "redux";
import { useHistory } from "react-router-dom";
let HeaderTab = (props) => {
    let history = useHistory();
    let userData;
    if (JSON.stringify(props.userData) !== "{}") {
        userData = props.userData.data[0];
        window.sessionStorage.setItem("user", JSON.stringify(userData));
    } else {
        let user = window.sessionStorage.getItem("user");
        user = JSON.parse(user);
        console.log(user, "header user");
        if (user) {
            props.saveUserToRedux({ data: [user] });
        }
    }
    return (
        <div className='header-tab'>
            {/* <div className='header-poster'></div> */}
            <div className='top-bar'>
                <div className='container'>
                    <div className='top-bar-nav'>
                        <span>小米商城</span>
                        <span>|</span>
                        <span>小米商城</span>
                        <span>|</span>
                        <span>小米商城</span>
                        <span>|</span>
                        <span>小米商城</span>
                        <span>|</span>
                        <span>小米商城</span>
                        <span>|</span>
                        <span>小米商城</span>
                        <span>|</span>
                        <span>小米商城</span>
                        <span>|</span>
                        <span>小米商城</span>
                    </div>
                    <div className='top-bar-info'>
                        {userData ? (
                            <span
                                onClick={() => {
                                    history.push("/personalCenter");
                                }}
                            >
                                {userData.userName}
                            </span>
                        ) : (
                            <span>
                                <span
                                    onClick={() => {
                                        history.push("/login");
                                    }}
                                >
                                    登录
                                </span>
                                <span>|</span>
                                <span
                                    onClick={() => {
                                        history.push("/login");
                                    }}
                                >
                                    注册
                                </span>
                            </span>
                        )}

                        <span>|</span>
                        <span
                            onClick={() => {
                                history.push("/buyCar");
                            }}
                        >
                            购物车
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default connect(
    ({ Login }) => ({ ...Login }),
    (dispatch, ownProps) => bindActionCreators(actiontor, dispatch)
)(HeaderTab);
