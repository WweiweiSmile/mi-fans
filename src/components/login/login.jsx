import "./login.scss";
import {Form, Input, message} from "antd";
import {connect} from "react-redux";
import {actiontor} from "../../redux/login";
import {bindActionCreators} from "redux";
import {useEffect, useRef, useState} from "react";

function Login(props) {
    console.log(props)
    let [isRegister, setIsRegister] = useState(false);
    let [user, setUser] = useState({})
    let [form] = Form.useForm();
    console.log(props);
    // compentUpdate
    let isFirstRegister = useRef(true)
    let isFirstLogin = useRef(true)
    useEffect(() => {
        if (isFirstRegister.current) {
            isFirstRegister.current = false
            return;
        }
        if (props.registerData.code === 1000) {
            message.success("注册成功");
        } else if (props.registerData.code === 2000) {
            message.error("注册失败:" + props.registerData.message);
        }
    }, [props.registerData]);
    useEffect(() => {
        if (isFirstLogin.current) {
            isFirstLogin.current = false
            return;
        }
        if (props.loginData.code === 1000) {
            message.success("登录成功");
            props.getUser(user)
        } else if (props.loginData.code === 2000) {
            message.error("登录失败");
        }
    }, [props.loginData])

    let registerChange = (state) => {
        setIsRegister(state);
    };
    let loginBtn = () => {
        setUser(form.getFieldsValue());
        if (isRegister) {
            props.register(user);
            return;
        }
        props.login(user);

    };
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
                            <span
                                className={isRegister ? "" : "active"}
                                onClick={() => {
                                    registerChange(false);
                                }}
                            >
                                账号登录
                            </span>
                            <span
                                onClick={() => {
                                    registerChange(true);
                                }}
                                className={isRegister ? "active" : ""}

                            >
                                账号注册
                            </span>
                        </p>
                        <Form form={form} name='login_form'>
                            <Form.Item name='userName'>
                                <Input
                                    className='input'
                                    placeholder='请输入账号'
                                    style={{height: "50px"}}
                                ></Input>
                            </Form.Item>
                            <Form.Item name='pwd'>
                                <Input
                                    className='input'
                                    placeholder='请输入密码'
                                    style={{height: "50px"}}
                                    type='password'
                                ></Input>
                            </Form.Item>
                        </Form>

                        <div className='btn' onClick={loginBtn}>
                            {isRegister ? "注册" : "登录"}
                        </div>
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
}

export default connect(
    ({Login}) => ({...Login}),
    (dispatch, ownProps) => bindActionCreators(actiontor, dispatch)
)(Login);
