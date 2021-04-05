import "./address.scss";
import { Modal } from "antd";
import { useState, useEffect, useRef } from "react";
import { Form, Input, Row, Col, Select, Cascader } from "antd";
import { connect } from "react-redux";
import { actiontor } from "../../../redux/login";
import { bindActionCreators } from "redux";
const { Option } = Select;
const { TextArea } = Input;
let Address = (props) => {
    let getAddressIndex = props.getAddressIndex;
    const [isModalVisible, setIsModalVisible] = useState(false);
    let [formExample] = Form.useForm();
    let [userAddress, setUserAddress] = useState([]);
    let [isMore, setIsMore] = useState(false);
    let [addressListStyle, setAddressListStyle] = useState({});
    let [addressIndex, setAddressIndex] = useState(-1);
    let [addressActiveIndex, setAddressActiveIndex] = useState(-1);
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
        userAddress = setUserAddress([
            ...props.userData.data[0].address,
            ...props.userData.data[0].address,
        ]);
    }, [props.userData]);
    const showModal = (index) => {
        setIsModalVisible(true);
        setAddressIndex(index);
        setForm(index);
    };

    const handleOk = () => {
        console.log(formExample.getFieldsValue(true));
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
                {userAddress.map((item, index) => {
                    return (
                        <li
                            className={`other-address ${
                                addressActiveIndex === index ? "active" : ""
                            } `}
                            onClick={() => {
                                setAddressActiveIndex(index);
                                getAddressIndex(index);
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
                            <p className='detail-address'>
                                {item.detailAddress}
                            </p>
                            <div className='actions'>
                                <span
                                    onClick={() => {
                                        showModal(index);
                                    }}
                                >
                                    修改
                                </span>
                                <span>删除</span>
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
                {userAddress.length > 3
                    ? isMore
                        ? "收起更多地址"
                        : "显示更多地址"
                    : ""}
            </div>
        </div>
    );
};
export default connect(
    ({ Login }) => ({ ...Login }),
    (dispatch, ownProps) => bindActionCreators(actiontor, dispatch)
)(Address);
