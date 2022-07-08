import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';
import { BlogDetailsInitial } from '../../interfaces/blog/BlogTypes';
import { InitialState } from '../../interfaces/home/GlobalTypes';
import Pagination from '../rooms/Pagination';
/*import Pagination from './Pagination';*/
class Blogs extends React.Component<any, InitialState<BlogDetailsInitial[]>> {
    constructor(props: any) {
        super(props);
        this.state = {
            init: {
                page: 0,
                code: 200,
                data: []
            }

        };
    }
    GetRoutePage(): number {
        const queryParams = new URLSearchParams(window.location.search)
        const term: string = queryParams.get("page") === null ? "" : queryParams.get("page")!.toString();
        return parseInt(term);
    }
    componentDidMount() {
        fetch('/api/blog/blogs?page=' + this.state.init.page).then((response) => {
            return response.json();
        }).then((data) => {
            this.setState({ init: data });
            console.log(this.state.init)
        })
    }

    public render() {
        return (
            <React.Fragment>
                <div className="hotale-page-title-wrap  hotale-style-custom hotale-center-align" data-aos="fade-bottom"
                    data-aos-duration="1000">
                    <div
                        className="hotale-header-transparent-substitute"
                        style={{ height: "149.3px" }}
                    />
                    <div className="hotale-page-title-overlay" />
                    <div className="hotale-page-title-container hotale-container">
                        <div className="hotale-page-title-content hotale-item-pdlr">
                            <h1 className="hotale-page-title">Bloglar</h1>
                        </div>
                    </div>
                </div>{" "}
                <div></div>
                <div className="hotale-page-wrapper" id="hotale-page-wrapper" data-aos="fade-top"
                    data-aos-duration="1000">
                    <div className="gdlr-core-page-builder-body">
                        <div
                            className="gdlr-core-pbf-wrapper "
                            style={{ padding: "80px 0px 15px 0px" }}
                        >
                            <div className="gdlr-core-pbf-background-wrap" />
                            <div className="gdlr-core-pbf-wrapper-content gdlr-core-js ">
                                <div className="gdlr-core-pbf-wrapper-container clearfix gdlr-core-container">
                                    <div className="gdlr-core-pbf-element">
                                        <div className="tourmaster-room-item clearfix  tourmaster-room-item-style-grid2">
                                            <div
                                                className="tourmaster-room-item-holder gdlr-core-js-2 clearfix"
                                                data-layout="fitrows"
                                            >

                                                <div className="gdlr-core-pbf-element">
                                                    <div
                                                        className="gdlr-core-blog-item gdlr-core-item-pdb clearfix  gdlr-core-style-blog-image"
                                                        style={{ paddingBottom: "0px" }}
                                                    >
                                                        <div
                                                            className="gdlr-core-blog-item-holder gdlr-core-js-2 clearfix"
                                                            data-layout="fitrows"
                                                        >
                                                            {

                                                                this.state.init.data.map((value, index) => {
                                                                    return (
                                                                        <div key={index} className="gdlr-core-item-list  gdlr-core-item-pdlr gdlr-core-item-mgb gdlr-core-column-20"  >
                                                                            <div className="gdlr-core-blog-modern  gdlr-core-with-image gdlr-core-hover-overlay-content gdlr-core-opacity-on-hover gdlr-core-zoom-on-hover gdlr-core-style-1 gdlr-core-outer-frame-element" >
                                                                                <div className="gdlr-core-blog-modern-inner">
                                                                                    <div className="gdlr-core-blog-thumbnail gdlr-core-media-image">
                                                                                        <img
                                                                                            style={{ width: "400px", height: "400px" }}
                                                                                            src={require("../" + value.blogPicture)}
                                                                                            alt=""
                                                                                            title="BlogImage"
                                                                                        />
                                                                                    </div>
                                                                                    <div
                                                                                        className="gdlr-core-blog-modern-content  gdlr-core-center-align"
                                                                                        style={{ paddingBottom: "40px" }}
                                                                                    >
                                                                                        <h3
                                                                                            className="gdlr-core-blog-title gdlr-core-skin-title"
                                                                                            style={{
                                                                                                fontSize: "25px",
                                                                                                fontWeight: 700,
                                                                                                letterSpacing: "0px",
                                                                                            }}
                                                                                        >
                                                                                            <Link to={"/blogs/details/" + value.id} >{value.headText}</Link>
                                                                                        </h3>
                                                                                        <div className="gdlr-core-blog-info-wrapper gdlr-core-skin-divider">
                                                                                            <span className="gdlr-core-blog-info gdlr-core-blog-info-font gdlr-core-skin-caption gdlr-core-blog-info-date">
                                                                                                <span className="gdlr-core-blog-info-sep">•</span>
                                                                                                <span className="gdlr-core-head">
                                                                                                    <i className="gdlr-icon-clock" />
                                                                                                </span>
                                                                                                <a href="../2021/12/17/index.html">{value.createdDate}</a>
                                                                                            </span>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    )
                                                                })
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    <Pagination pageCount={this.state.init.page} currentPage={0} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </React.Fragment >
        );
    }
}

export default connect()(Blogs);