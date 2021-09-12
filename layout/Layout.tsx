import React, { useState, KeyboardEvent, useRef } from 'react';
import { LayoutProps } from './Layout.props';
import { Sidebar } from './Sidebar/Sidebar';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';
import styles from './Layout.module.css';
import { AppContextProvider, IAppContext } from '../context/app.context';
import { Up } from '../components';
import classNames from 'classnames';


const Layout = ({ children }: LayoutProps): JSX.Element => {
    const [isSkipLinkDisplaed, setIsSkipLinkDisplaed] = useState<boolean>(false);
    const bodyRef = useRef<HTMLDivElement>(null);

    const skipContentAction = (key: KeyboardEvent) => {
        if(key.code == 'Enter' || key.code == 'Space') {
            key.preventDefault();
            bodyRef.current?.focus();
        }
        setIsSkipLinkDisplaed(false);
    };

    return (
       <div className={styles.wrapper}>
           <a 
           onFocus={() => setIsSkipLinkDisplaed(true)}
           onKeyDown={skipContentAction}
           tabIndex={1} 
           className={classNames(styles.skipLink, {
               [styles.displayed]: isSkipLinkDisplaed
           })}
           >Сразу к содержанию</a>

            <Header className={styles.header}/>
            <Sidebar className={styles.sidebar}/>
            <main 
            className={styles.body} 
            ref={bodyRef}
            tabIndex={0}
            role='main'>
                {children}
            </main>
            <Footer className={styles.footer}/>
            <Up/>
       </div>
    );
};

export const withLayout = <T extends Record<string, unknown> & IAppContext> (Component: React.FC<T>) => {
    return function withLayoutComponent(props: T): JSX.Element {
        return (
            <AppContextProvider menu={props.menu} firstCategory={props.firstCategory}>
                <Layout>
                    <Component {...props}/>
                </Layout>
            </AppContextProvider>
        );
    };
};