import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';
import { Col, Row } from 'reactstrap';

interface PaginationProps {
    currentPage: number,
    pageCount: number
}
class Pagination extends React.Component<PaginationProps, any> {
    GetPages(pages: number, currentPage: number) {
        console.log(this.props)
        var content = [];
        for (var i = 0; i < pages; i++) {
            content.push(<li className={i === currentPage ? "page-item active" : "page-item" }><a className="page-link" href="#">{i+1}</a></li>);
        }
        return content;
    }
    public render() {
        return (
                    <div className="pagination-holder">
                        <nav aria-label="Page navigation example">
                            <ul className="pagination">
                                <li className="page-item">
                                    <a className="page-link" href="#" aria-label="Previous">
                                        <span aria-hidden="true">«</span>
                                        <span className="sr-only">Previous</span>
                                    </a>
                                </li>
                                {this.GetPages(this.props.pageCount, this.props.currentPage)}
                                <li className="page-item">
                                    <a className="page-link" href="#" aria-label="Next">
                                        <span aria-hidden="true">»</span>
                                        <span className="sr-only">Next</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>

        );
    }
}

export default Pagination;





