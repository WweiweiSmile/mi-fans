import "./footer.scss";
let Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='footer-service'>
                    <ul className='list-service'>
                        <li className='item-service'>
                            <a>预约维修服务</a>
                        </li>
                        <li className='item-service'>
                            <a>7天无理由退货</a>
                        </li>
                        <li className='item-service'>
                            <a>15天免费换货</a>
                        </li>
                        <li className='item-service'>
                            <a>满99元包邮</a>
                        </li>
                        <li className='item-service'>
                            <a>520余家售后网点</a>
                        </li>
                    </ul>
                </div>
                <div className='links-contact'>
                    <div className='footer-links'>
                        <dl className='col-links'>
                            <dt>帮助中心</dt>
                            <dd>账户管理</dd>
                            <dd>购物指南</dd>
                            <dd>订单操作</dd>
                        </dl>
                        <dl className='col-links'>
                            <dt>服务支持</dt>
                            <dd>售后政策</dd>
                            <dd>自助服务</dd>
                            <dd>相关下载</dd>
                        </dl>
                        <dl className='col-links'>
                            <dt>线下门店</dt>
                            <dd>小米之家</dd>
                            <dd>服务网点</dd>
                            <dd>授权体验店</dd>
                        </dl>
                        <dl className='col-links'>
                            <dt>关于小米</dt>
                            <dd>了解小米</dd>
                            <dd>加入小米</dd>
                            <dd>投资者关系</dd>
                            <dd>企业社会责任</dd>
                            <dd>廉洁举报</dd>
                        </dl>
                        <dl className='col-links'>
                            <dt>关注我们</dt>
                            <dd>新浪微博</dd>
                            <dd>官方微信</dd>
                            <dd>联系我们</dd>
                            <dd>公益基金会</dd>
                        </dl>
                        <dl className='col-links'>
                            <dt>特色服务</dt>
                            <dd>F码通道</dd>
                            <dd>礼物码</dd>
                            <dd>防伪查询</dd>
                        </dl>
                    </div>
                    <div className='footer-contact'>
                        <dl>
                            <dt>400-100-5678</dt>
                            <dd className='work-time'>
                                8:00-18:00(仅收市话费)
                            </dd>
                            <dd className='person-serve'>
                                <a>
                                    <i></i>人工客服
                                </a>
                            </dd>
                            <dd className='attention-mi'>
                                关注小米：
                                <a>
                                    <i></i>
                                </a>
                                <a>
                                    <i></i>
                                </a>
                            </dd>
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Footer;
