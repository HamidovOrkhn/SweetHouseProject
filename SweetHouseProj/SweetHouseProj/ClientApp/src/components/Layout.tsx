import * as React from 'react';
import { Container } from 'reactstrap';
import NavMenu from './NavMenu';
import Footer from './foot/Footer';
import Header from './header/Header';
export default class Layout extends React.PureComponent<{}, { children?: React.ReactNode }> {
    public render() {
        return (
            <React.Fragment>

                <div className="hotale-body-wrapper clearfix  hotale-with-transparent-header hotale-with-frame">
                    <div className="hotale-body-outer-wrapper mm-page mm-slideout" id="mm-0">
                        <Header/>
                        {this.props.children}
                        <Footer />
                    </div>
                </div>

            </React.Fragment>
        );
    }
}