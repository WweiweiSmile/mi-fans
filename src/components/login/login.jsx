import "./login.scss";
import { Input } from "antd";
let Login = () => {
    return (
        <div className='login'>
            <div className='login-header'>
                <div className='header-logo'>
                    <a href='http://www.mi.com'></a>
                </div>
            </div>
            <div className='login-content'>
                <div className='content-container'>
                    <div className='login-banner'>
                        <p className='title'>
                            <span className='active'>账号登录</span>
                            <span className=''>账号注册</span>
                        </p>
                        <Input
                            className='input'
                            placeholder='请输入账号'
                            style={{ height: "50px" }}
                        ></Input>
                        <Input
                            className='input'
                            placeholder='请输入密码'
                            style={{ height: "50px" }}
                        ></Input>
                        <div className='btn'>登录</div>
                        <p className='forget-possword'>忘记密码？</p>
                    </div>
                </div>
            </div>
            <div className='login-footer'>
                <div className='footer-container'>
                    <p>
                        <span>简体</span>
                        <span>繁体</span>
                        <span>English</span>
                        <span>常见问题</span>
                        <span>隐私政策</span>
                    </p>
                    <p>
                        小米公司版权所有-京ICP备10046444，京公网安备11010802020134号-京ICP证110507号
                    </p>
                </div>
            </div>
        </div>
    );
};
export default Login;
