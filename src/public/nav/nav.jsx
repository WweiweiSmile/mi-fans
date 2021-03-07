import "./nav.scss";
import CategoryChildren from "./categoryChildren/categoryChildren";
import NavChildren from "./navChildren/navChildren";
import { Input } from "antd";
function Nav() {
    const { Search } = Input;

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
                                            </li>
                                            <li className='category-item'>
                                                <span>手机 电话卡</span>
                                                <CategoryChildren></CategoryChildren>
                                            </li>
                                            <li className='category-item'>
                                                <span>手机 电话卡</span>
                                            </li>
                                            <li className='category-item'>
                                                <span>手机 电话卡</span>
                                            </li>
                                            <li className='category-item'>
                                                <span>手机 电话卡</span>
                                            </li>
                                            <li className='category-item'>
                                                <span>手机 电话卡</span>
                                            </li>
                                            <li className='category-item'>
                                                <span>手机 电话卡</span>
                                            </li>
                                            <li className='category-item'>
                                                <span>手机 电话卡</span>
                                            </li>
                                            <li className='category-item'>
                                                <span>手机 电话卡</span>
                                            </li>
                                            <li className='category-item'>
                                                <span>手机 电话卡</span>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className='nav-item'>
                                    小米手机
                                    <NavChildren></NavChildren>
                                </li>
                                <li className='nav-item'>小米手机</li>
                                <li className='nav-item'>小米手机</li>
                                <li className='nav-item'>小米手机</li>
                                <li className='nav-item'>小米手机</li>
                                <li className='nav-item'>小米手机</li>
                                <li className='nav-item'>小米手机</li>
                                <li className='nav-item'>小米手机</li>
                            </ul>
                        </div>
                        <div className='header-search'>
                            <Search style={{ width: 200 }}></Search>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}
export default Nav;
