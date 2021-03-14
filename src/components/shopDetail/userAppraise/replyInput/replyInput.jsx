import { Input } from "antd";
import "./replyInput.scss";
const { Search } = Input;

let ReplyInput = (props) => {
    return (
        <div className='reply-input'>
            <Search {...props}>{props.chidren}</Search>
        </div>
    );
};
export default ReplyInput;
