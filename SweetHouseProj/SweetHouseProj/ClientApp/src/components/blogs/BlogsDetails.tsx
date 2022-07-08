import * as React from 'react';
import { connect } from 'react-redux';
import parse from "html-react-parser";
import { BlogDetails } from '../../interfaces/blog/BlogTypes';
class BlogsDetails extends React.Component<any, BlogDetails> {
    constructor(props: any) {
        super(props);
        this.state = {
            data: {
                id:0,
                blogPicture: "",
                bodyText: "",
                createdDate: "",
                updatedDate: "",
                headText:""
                
            }
        };
    }

    async componentDidMount() {
        const { slug } = this.props.match.params;
        fetch('/api/blog/details/' + slug).then((response) => {
            return response.json();
        }).then((data) => {
            this.setState({ data: data });
            console.log(this.state)
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
                            <h1 className="hotale-page-title">Blog Haqqında</h1>
                        </div>
                    </div>
                </div>{" "}
                <div className="hotale-page-wrapper" id="hotale-page-wrapper" data-aos="fade-bottom"
                    data-aos-duration="1000">
                    <div className="gdlr-core-page-builder-body">
                        <div
                            className="gdlr-core-pbf-sidebar-wrapper  gdlr-core-sticky-sidebar gdlr-core-js "
                            id="gdlr-core-sidebar-wrapper-1"
                        >
                            <div className="gdlr-core-pbf-sidebar-container gdlr-core-line-height-0 clearfix gdlr-core-js gdlr-core-container">
                                <div
                                    className="gdlr-core-pbf-sidebar-content gdlr-core-pbf-sidebar-padding gdlr-core-line-height"
                                    style={{ padding: "60px 0px 0px 0px" }}
                                >
                                    <div className="gdlr-core-pbf-sidebar-content-inner">
                                        <div className="gdlr-core-pbf-column gdlr-core-column-60 gdlr-core-column-first">
                                            <div className="gdlr-core-pbf-column-content-margin gdlr-core-js ">
                                                <div className="gdlr-core-pbf-column-content clearfix gdlr-core-js ">
                                                    <div className="gdlr-core-pbf-element">
                                                        <div className="gdlr-core-image-item gdlr-core-item-pdb  gdlr-core-center-align gdlr-core-item-pdlr">
                                                            <div
                                                                className="gdlr-core-image-item-wrap gdlr-core-media-image  gdlr-core-image-item-style-round"
                                                                style={{
                                                                    borderWidth: "0px",
                                                                    borderRadius: "20px",
                                                                    MozBorderRadius: "20px",
                                                                    WebkitBorderRadius: "20px",
                                                                }}
                                                            >
                                                                <img
                                                                    src={this.state.data.blogPicture ? require('../' + this.state.data.blogPicture):""}
                                                                    alt=""
                                                                    width={1150}
                                                                    height={490}
                                                                    title="Blog"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="gdlr-core-pbf-column gdlr-core-column-60 gdlr-core-column-first"
                                            id="gdlr-core-column-1"
                                        >
                                            <div
                                                className="gdlr-core-pbf-column-content-margin gdlr-core-js "
                                                style={{
                                                    margin: "0px 0px 0px 0px",
                                                    padding: "10px 0px 20px 0px",
                                                }}
                                            >
                                                <div className="gdlr-core-pbf-background-wrap" />
                                                <div className="gdlr-core-pbf-column-content clearfix gdlr-core-js ">
                                                    <div className="gdlr-core-pbf-element">
                                                        <div
                                                            className="tourmaster-room-title-item tourmaster-item-mglr tourmaster-item-pdb clearfix"
                                                            style={{ paddingBottom: "35px" }}
                                                        >
                                                            <h3 className="tourmaster-room-title-item-title">
                                                                {this.state.data.headText}
                                                            </h3>
                                                            <div className="gdlr-core-blog-info-wrapper gdlr-core-skin-divider">
                                                                <span className="gdlr-core-blog-info gdlr-core-blog-info-font gdlr-core-skin-caption gdlr-core-blog-info-date" style={{ fontSize: "14px"}}>
                                                                    Tarix :
                                                                    <span className="gdlr-core-head" style={{ marginLeft:"10px" }}>
                                                                        <i className="gdlr-icon-clock" />
                                                                    </span>
                                                                    <a>{this.state.data.createdDate}</a>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="gdlr-core-pbf-element">
                                                        <div className="gdlr-core-divider-item gdlr-core-divider-item-normal gdlr-core-item-pdlr gdlr-core-center-align">
                                                            <div className="gdlr-core-divider-line gdlr-core-skin-divider" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="gdlr-core-pbf-column gdlr-core-column-20">
                                            <div className="gdlr-core-pbf-column-content-margin gdlr-core-js ">
                                                <div className="gdlr-core-pbf-column-content clearfix gdlr-core-js " />
                                            </div>
                                        </div>
                                        <div
                                            className="gdlr-core-pbf-column gdlr-core-column-60 gdlr-core-column-first"
                                            id="gdlr-core-column-6"
                                        >
                                            <div
                                                className="gdlr-core-pbf-column-content-margin gdlr-core-js "
                                                style={{ padding: "10px 0px 0px 0px" }}
                                            >
                                                <div className="gdlr-core-pbf-background-wrap" />
                                                <div className="gdlr-core-pbf-column-content clearfix gdlr-core-js ">
                                                    <div className="gdlr-core-pbf-element">
                                                        <div className="gdlr-core-text-box-item gdlr-core-item-pdlr gdlr-core-item-pdb gdlr-core-left-align">
                                                            <div
                                                                className="gdlr-core-text-box-item-content"
                                                                style={{ fontSize: "18px", textTransform: "none" }}
                                                            >
                                                                <p>
                                                                    {this.state.data.bodyText}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="gdlr-core-pbf-column gdlr-core-column-60 gdlr-core-column-first"
                                            id="gdlr-core-column-7"
                                        >
                                            <div
                                                className="gdlr-core-pbf-column-content-margin gdlr-core-js "
                                                style={{
                                                    margin: "0px 0px 0px 0px",
                                                    padding: "0px 0px 25px 0px",
                                                }}
                                            >
                                                <div className="gdlr-core-pbf-background-wrap" />
                                                <div className="gdlr-core-pbf-column-content clearfix gdlr-core-js ">
                                                    <div className="gdlr-core-pbf-element">
                                                        <div className="gdlr-core-divider-item gdlr-core-divider-item-normal gdlr-core-item-pdlr gdlr-core-center-align">
                                                            <div className="gdlr-core-divider-line gdlr-core-skin-divider" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                               
                            </div>
                        </div>
                     
                        {/*<div*/}
                        {/*    className="gdlr-core-pbf-wrapper "*/}
                        {/*    style={{ padding: "20px 0px 0px 0px" }}*/}
                        {/*>*/}
                        {/*    <div className="gdlr-core-pbf-background-wrap" />*/}
                        {/*    <div className="gdlr-core-pbf-wrapper-content gdlr-core-js ">*/}
                        {/*        <div className="gdlr-core-pbf-wrapper-container clearfix gdlr-core-container">*/}
                        {/*            <div*/}
                        {/*                className="gdlr-core-pbf-column gdlr-core-column-60 gdlr-core-column-first"*/}
                        {/*                id="gdlr-core-column-27"*/}
                        {/*            >*/}
                        {/*                <div*/}
                        {/*                    className="gdlr-core-pbf-column-content-margin gdlr-core-js "*/}
                        {/*                    style={{ margin: "0px 0px 0px 0px", padding: "30px 0px 0px 0px" }}*/}
                        {/*                >*/}
                        {/*                    <div className="gdlr-core-pbf-background-wrap" />*/}
                        {/*                    <div className="gdlr-core-pbf-column-content clearfix gdlr-core-js ">*/}
                        {/*                        <div className="gdlr-core-pbf-element">*/}
                        {/*                            <div*/}
                        {/*                                className="gdlr-core-title-item gdlr-core-item-pdb clearfix  gdlr-core-center-align gdlr-core-title-item-caption-top gdlr-core-item-pdlr"*/}
                        {/*                                style={{ paddingBottom: "60px" }}*/}
                        {/*                            >*/}
                        {/*                                <div className="gdlr-core-title-item-title-wrap ">*/}
                        {/*                                    <h3*/}
                        {/*                                        className="gdlr-core-title-item-title gdlr-core-skin-title  class-test"*/}
                        {/*                                        style={{*/}
                        {/*                                            fontSize: "31px",*/}
                        {/*                                            fontWeight: 500,*/}
                        {/*                                            letterSpacing: "0px",*/}
                        {/*                                            textTransform: "none",*/}
                        {/*                                        }}*/}
                        {/*                                    >*/}
                        {/*                                        More Rooms*/}
                        {/*                                        <span className="gdlr-core-title-item-title-divider gdlr-core-skin-divider" />*/}
                        {/*                                    </h3>*/}
                        {/*                                </div>*/}
                        {/*                            </div>*/}
                        {/*                        </div>*/}
                        {/*                    </div>*/}
                        {/*                </div>*/}
                        {/*            </div>*/}
                        {/*            <div*/}
                        {/*                className="gdlr-core-pbf-column gdlr-core-column-60 gdlr-core-column-first"*/}
                        {/*                id="gdlr-core-column-28"*/}
                        {/*            >*/}
                        {/*                <div*/}
                        {/*                    className="gdlr-core-pbf-column-content-margin gdlr-core-js "*/}
                        {/*                    style={{ padding: "0px 0px 20px 0px" }}*/}
                        {/*                >*/}
                        {/*                    <div className="gdlr-core-pbf-background-wrap" />*/}
                        {/*                    <div className="gdlr-core-pbf-column-content clearfix gdlr-core-js ">*/}
                        {/*                        <div className="gdlr-core-pbf-element">*/}
                        {/*                            <div*/}
                        {/*                                className="tourmaster-room-item clearfix  tourmaster-room-item-style-grid"*/}
                        {/*                                id="gdlr-core-room-1"*/}
                        {/*                            >*/}
                        {/*                                <div*/}
                        {/*                                    className="gdlr-core-flexslider flexslider gdlr-core-js-2 "*/}
                        {/*                                    data-type="carousel"*/}
                        {/*                                    data-column={3}*/}
                        {/*                                    data-move={1}*/}
                        {/*                                    data-nav="navigation-outer"*/}
                        {/*                                    data-nav-parent="self"*/}
                        {/*                                    data-vcenter-nav={1}*/}
                        {/*                                >*/}
                        {/*                                    <div*/}
                        {/*                                        className="flex-viewport"*/}
                        {/*                                        style={{ overflow: "hidden", position: "relative" }}*/}
                        {/*                                    >*/}
                        {/*                                        <Cards />*/}
                        {/*                                    </div>*/}
                        {/*                                    <div*/}
                        {/*                                        className="gdlr-core-flexslider-custom-nav  gdlr-core-style-navigation-outer gdlr-core-center-align"*/}
                        {/*                                        style={{ marginTop: "-60px" }}*/}
                        {/*                                    >*/}
                        {/*                                        <i*/}
                        {/*                                            className="icon-arrow-left flex-prev"*/}
                        {/*                                            style={{*/}
                        {/*                                                color: "rgb(196, 196, 196)",*/}
                        {/*                                                fontSize: "34px",*/}
                        {/*                                                left: "-90px",*/}
                        {/*                                                marginTop: "-247.562px",*/}
                        {/*                                            }}*/}
                        {/*                                        />*/}
                        {/*                                        <i*/}
                        {/*                                            className="icon-arrow-right flex-next"*/}
                        {/*                                            style={{*/}
                        {/*                                                color: "rgb(196, 196, 196)",*/}
                        {/*                                                fontSize: "34px",*/}
                        {/*                                                right: "-90px",*/}
                        {/*                                                marginTop: "-247.562px",*/}
                        {/*                                            }}*/}
                        {/*                                        />*/}
                        {/*                                    </div>*/}
                        {/*                                </div>*/}
                        {/*                            </div>*/}
                        {/*                        </div>*/}
                        {/*                    </div>*/}
                        {/*                </div>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>
                </div>

            </React.Fragment>
        );
    }
}

export default connect()(BlogsDetails);





