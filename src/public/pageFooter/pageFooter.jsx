import "./pageFooter.scss";
import Footer from "./footer/footer";
import Info from "./info/info";
let PageFooter = () => {
    return (
        <div className='page-footer'>
            <Footer></Footer>
            <Info></Info>
        </div>
    );
};
export default PageFooter;
