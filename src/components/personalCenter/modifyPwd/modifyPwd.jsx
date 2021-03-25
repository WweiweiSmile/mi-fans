import "./modifyPwd.scss";
import { useState } from "react";
import { Avatar, Modal, Input, Form } from "antd";
let ModifyPwd = () => {
    let [isModalVisible, setIsModalVisible] = useState(false);
    let [formExample] = Form.useForm();
    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        console.log(formExample.getFieldsValue(true));
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    return (
        <div className='modify-pwd'>
            <div className='bg-box'>
                <div className='top'>
                    <Avatar
                        size={80}
                        src='https://cdn.cnbj1.fds.api.mi-img.com/user-avatar/p01VARnsHpTD/hseAqzlLaD9O42.jpg'
                    ></Avatar>
                    <span className='name'>夜里的灯光</span>
                </div>
                <ul className='modify-pwd-content'>
                    <li>
                        <div className='before'>
                            <i className='iconfont iconmima'></i>
                            <div className='modify-pwd-summary'>
                                <h3>账号密码</h3>
                                <p>用于保护账号信息和登录安全</p>
                            </div>
                        </div>
                        <a className='btn' onClick={showModal}>
                            修改
                        </a>
                        <Modal
                            title='编辑资料'
                            visible={isModalVisible}
                            onOk={handleOk}
                            onCancel={handleCancel}
                        >
                            <Form form={formExample}>
                                <Form.Item name='oldPwd' label='旧密码'>
                                    <Input></Input>
                                </Form.Item>
                                <Form.Item name='newPwd' label='新密码'>
                                    <Input></Input>
                                </Form.Item>
                                <Form.Item name='reNewPwd' label='重复新密码'>
                                    <Input></Input>
                                </Form.Item>
                            </Form>
                        </Modal>
                    </li>

                    <li>
                        <div className='before'>
                            <i className='iconfont iconyouxiang'></i>
                            <div className='modify-pwd-summary'>
                                <h3>安全邮箱</h3>
                                <p>用于登录账号和重置密码</p>
                            </div>
                        </div>
                        <a className='btn'>修改</a>
                    </li>
                    <li>
                        <div className='before'>
                            <i className='iconfont iconshouji'></i>
                            <div className='modify-pwd-summary'>
                                <h3>安全手机</h3>
                                <p>用于登录账号,重置密码或其他安全验证</p>
                            </div>
                        </div>
                        <a className='btn'>修改</a>
                    </li>
                    <li>
                        <div className='before'>
                            <i className='iconfont iconbaoxiangui'></i>
                            <div className='modify-pwd-summary'>
                                <h3>密保问题</h3>
                                <p>用于安全验证,建议设置</p>
                            </div>
                        </div>
                        <a className='btn'>修改</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};
export default ModifyPwd;
