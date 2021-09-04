import React from 'react';
import { LayoutProps } from './Layout.props';
import { Sidebar } from './Sidebar/Sidebar';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';


const Layout = ({ children }: LayoutProps): JSX.Element => {
    return (
       <>
            <Header/>
            <div>
                <Sidebar/>
                <div>
                    {children}
                </div>
            </div>
            <Footer/>
       </>
    );
};

export const withLayout = <T extends Record<string, unknown> > (Component: React.FC<T>) => {
    return function withLayoutComponent(props: T): JSX.Element {
        return (
            <Layout>
                <Component {...props}/>
            </Layout>
        );
    };
};