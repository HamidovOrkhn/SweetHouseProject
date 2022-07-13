import * as React from 'react';
import { Container } from 'reactstrap';
import NavMenu from './NavMenu';
import Footer from './foot/Footer';
import Header from './header/Header';
import { I18nextProvider } from 'react-i18next';
import i18n from "../i18n";
export default class Layout extends React.PureComponent<{}, { children?: React.ReactNode }> {
    public render() {
        return (
            <React.Fragment>

                <div className="hotale-body-wrapper clearfix  hotale-with-transparent-header hotale-with-frame">
                    <div className="hotale-body-outer-wrapper mm-page mm-slideout" id="mm-0">
                        <I18nextProvider i18n={i18n}>
                            <Header />
                        </I18nextProvider>
                        {this.props.children}
                        <I18nextProvider i18n={i18n}>
                            <Footer />
                        </I18nextProvider>
                    </div>
                </div>

            </React.Fragment>
        );
    }
}