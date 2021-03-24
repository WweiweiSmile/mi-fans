import { Table } from "antd";
import "./table.scss";
let buyCarTable = (props) => {
    return (
        <div className='buy-car-table'>
            <Table {...props}>{props.childrn}</Table>
        </div>
    );
};
export default buyCarTable;
