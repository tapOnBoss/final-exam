import {link} from "react-router-dom";
import {Row, Col, BreadcrumbItem} from "reactstrap";

// meaning breadcrumb is current page and title is previous page
const Breadcrumb = props => {
    return(
        <Row>
            <col xs="12">
                <div>
                    <h4>{props.breadcrumbItem}</h4>
                    <div>
                        <ol>
                            <BreadcumbItem>
                            <link to="#">{props.title}</link>
                            </BreadcumbItem>
                            <BreadcumbItem>
                            <link to="#">{props.title}</link>
                            </BreadcumbItem>
                        </ol>
                    </div>
                </div>
            </col>
        </Row>
    );
};

export default Breadcrumb;