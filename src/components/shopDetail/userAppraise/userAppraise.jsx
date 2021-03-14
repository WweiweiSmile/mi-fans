import "./userAppraise.scss";
import Input from "./replyInput/replyInput";
let UserAppraise = () => {
    return (
        <div className='user-appraise'>
            <div className='container-appraise'>
                <div className='comment-top'>
                    <div className='title'>大家认为</div>
                    <div className='category'>
                        <div className='item-category active'>全部</div>
                        <div className='item-category'>全部</div>
                        <div className='item-category'>全部</div>
                        <div className='item-category'>全部</div>
                        <div className='item-category'>全部</div>
                        <div className='item-category'>全部</div>
                    </div>
                </div>
                <div className='comment-mid'>
                    <div className='mid-left'>
                        <div className='top-left'>
                            <div className='title'>热门评价</div>
                            <div className='is-img-appraise active'>
                                <i className='iconfont-hook'></i>
                                <span className='title-hook'>
                                    只显示带图评价
                                </span>
                            </div>
                        </div>
                        <div className='content-left'>
                            <ul className='list-appraise'>
                                <li className='item-appraise'>
                                    <div className='top'>
                                        <div className='time'>
                                            <div className='avatar'>
                                                <img
                                                    src='https://cdn.cnbj0.fds.api.mi-img.com/b2c-data-mishop/9bd716bcdd5d6e4968d3adc3c5b6353b.jpg'
                                                    alt='null'
                                                ></img>
                                            </div>
                                            <p className='users'>用户名</p>
                                            <p className='times'>2020-11-30</p>
                                        </div>
                                        <div className='love'>
                                            <i className='iconfont iconV'></i>
                                            超爱
                                        </div>
                                    </div>
                                    <div className='comment'>
                                        是个很不错的手机
                                    </div>
                                    <div className='images'>
                                        <div className='item-image'>
                                            <img src='https://i1.mifile.cn/a2/1615690991_5671155_s1512_2016wh.jpg'></img>
                                        </div>
                                    </div>
                                    <div className='appreciate'>
                                        <i className='iconfont icondianzan'></i>
                                        点赞
                                    </div>
                                    <div className='reply'>
                                        <Input
                                            placeholder='回复楼主'
                                            allowClear
                                            enterButton='确定回复'
                                            size='large'
                                            // onSearch={onSearch}
                                        />
                                    </div>
                                    <div className='comment-list'></div>
                                </li>
                            </ul>
                        </div>
                        <div className='more'></div>
                    </div>
                    <div className='mid-right'></div>
                </div>
            </div>
        </div>
    );
};
export default UserAppraise;
