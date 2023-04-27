import{Link} from "react-router-dom";
import { Row, Col, BreadcrumbItem } from "reactstrap";

const Breadcrumb = (props) => {
    return(
    <Row>
        <Col xs="12">
            <div className="page-title align-items-center justify-content-between">
                <h4 className="mb-2 font-size-18">{props.title}</h4>
                <div className="page-title-right">
                    <ol>
                        <BreadcrumbItem>
                            <Link to="#" > {props.breadcrumbItem} <Link/>
                        </BreadcrumbItem>
                    </ol>
                </div>
            </div>
        </Col>
    </Row>
    );
};

export default Breadcrumb;