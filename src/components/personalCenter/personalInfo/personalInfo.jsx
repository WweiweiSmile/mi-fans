import "./personalInfo.scss";
import { useState } from "react";
import { Avatar, Modal, Form, Input, Radio } from "antd";
let PersonalInfo = () => {
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
        <div className='personal-info'>
            <div className='bg-box'>
                <div className='avatar'>
                    <Avatar
                        size={80}
                        src='https://cdn.cnbj1.fds.api.mi-img.com/user-avatar/p01VARnsHpTD/hseAqzlLaD9O42.jpg'
                    ></Avatar>
                    <a>修改头像</a>
                </div>
                <div className='basic-info'>
                    <h3>基本资料</h3>
                    <p>
                        昵称:<span>夜里的灯光</span>
                    </p>
                    <p>
                        性别:<span>男</span>
                    </p>
                    <p>
                        电话:<span>156****1516</span>
                    </p>
                    <a onClick={showModal}>编辑</a>
                    <Modal
                        title='编辑资料'
                        visible={isModalVisible}
                        onOk={handleOk}
                        onCancel={handleCancel}
                    >
                        <Form form={formExample}>
                            <Form.Item name='name' label='姓名'>
                                <Input></Input>
                            </Form.Item>
                            <Form.Item name='sex' label='性别'>
                                <Radio.Group>
                                    <Radio value='男'>男</Radio>
                                    <Radio value='女'>女</Radio>
                                </Radio.Group>
                            </Form.Item>
                        </Form>
                    </Modal>
                </div>
            </div>
        </div>
    );
};
export default PersonalInfo;
