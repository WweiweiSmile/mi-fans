import "./nav.scss";
import CategoryChildren from "./categoryChildren/categoryChildren";
import NavChildren from "./navChildren/navChildren";
import {actiontor} from "../../redux/nav"
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Input } from "antd";
import {useState,useEffect} from "react";

const { Search } = Input;

function Nav(props) {
    console.log(props,'nav')
    useEffect(()=>{
        props.getMiPhone();
        props.getRedmiPhone();
    },[])
    return (
        <div className='nav'>
            <header>
                <div className='site-header'>
                    <div className='container'>
                        <div className='header-logo'>
                            <a href='https://www.mi.com/index.html'></a>
                        </div>
                        <div className='header-nav'>
                            <ul className='nav-list'>
                                <li className='nav-item'>
                                    全部商品分类
                                    <div className='site-category'>
                                        <ul className='category-list'>
                                            <li className='category-item'>
                                                <span>手机 电话卡</span>
                                                <CategoryChildren goodsInfo={props.phoneData}></CategoryChildren>
                                            </li>
                                            <li className='category-item'>
                                                <span>电视 盒子</span>
                                            </li>
                                            <li className='category-item'>
                                                <span>笔记本 显示器</span>
                                            </li>
                                            <li className='category-item'>
                                                <span>家电插线板</span>
                                            </li>
                                            <li className='category-item'>
                                                <span>出行 穿戴</span>
                                            </li>
                                            <li className='category-item'>
                                                <span>智能 路由器</span>
                                            </li>
                                            <li className='category-item'>
                                                <span>电源 配件</span>
                                            </li>
                                            <li className='category-item'>
                                                <span>健康 儿童</span>
                                            </li>
                                            <li className='category-item'>
                                                <span>耳机 音箱</span>
                                            </li>
                                            <li className='category-item'>
                                                <span>生活 箱包</span>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className='nav-item'>
                                    小米手机
                                    <NavChildren goodsInfo={props.miPhoneData}></NavChildren>
                                </li>
                                <li className='nav-item'>Redmi 红米
                                    <NavChildren goodsInfo={props.redmiPhoneData}></NavChildren></li>
                                <li className='nav-item'>电视</li>
                                <li className='nav-item'>笔记本</li>
                                <li className='nav-item'>家电</li>
                                <li className='nav-item'>路由器</li>
                                <li className='nav-item'>智能硬件</li>
                                <li className='nav-item'>智能硬件</li>

                            </ul>
                        </div>
                        <div className='header-search'>
                            <Search style={{ width: 300 }}></Search>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}
export default connect(
    ({ nav,HomePage }) => ({
        ...nav,...HomePage
    }),
    (dispatch, ownProps) => bindActionCreators(actiontor, dispatch)
)(Nav);
