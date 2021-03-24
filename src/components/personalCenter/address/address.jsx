import "./address.scss";
import { Modal } from "antd";
import { useState } from "react";
import { Form, Input, Row, Col, Select, Cascader } from "antd";
const { Option } = Select;
const { TextArea } = Input;
let Address = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    let [formExample] = Form.useForm();
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
        <div className='shipping-address'>
            <h1>收货地址</h1>
            <ul>
                <li className='add-address'>
                    <i className='iconfont iconjia1' onClick={showModal}></i>
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
                                        name='residence'
                                        rules={[
                                            {
                                                type: "array",
                                                required: true,
                                                message: "请选择地址",
                                            },
                                        ]}
                                    >
                                        <Cascader
                                            placeholder='请选择地址'
                                            options={residences}
                                        />
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
                <li className='other-address'>
                    <p className='name'>秦巍</p>
                    <p className='phone'>156****1516</p>
                    <p className='address'>重庆 重庆市 渝北区 木耳镇</p>
                    <p className='detail-address'>
                        重庆渝北区空港乐园D4区 2栋17-9
                    </p>
                    <div className='actions'>
                        <span>修改</span>
                        <span>删除</span>
                    </div>
                </li>
                <li className='other-address'>
                    <p className='name'>秦巍</p>
                    <p className='phone'>156****1516</p>
                    <p className='address'>重庆 重庆市 渝北区 木耳镇</p>
                    <p className='detail-address'>
                        重庆渝北区空港乐园D4区 2栋17-9
                    </p>
                    <div className='actions'>
                        <span>修改</span>
                        <span>删除</span>
                    </div>
                </li>
                <li className='other-address'>
                    <p className='name'>秦巍</p>
                    <p className='phone'>156****1516</p>
                    <p className='address'>重庆 重庆市 渝北区 木耳镇</p>
                    <p className='detail-address'>
                        重庆渝北区空港乐园D4区 2栋17-9
                    </p>
                    <div className='actions'>
                        <span>修改</span>
                        <span>删除</span>
                    </div>
                </li>
            </ul>
        </div>
    );
};
export default Address;
