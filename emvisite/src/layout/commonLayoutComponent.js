import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import '../App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import { Link } from 'react-router-dom';


class CommonLayoutComponent extends Component{
    constructor(props){
        super(props);
        this.createRef = this.createRef.bind(this);
    }

    createRef(element) {
        console.log(element);
    }

    Navigation() {
        return (<Navigation>
        <Link to="/">Inicio</Link>
        <Link to="/">Productos</Link>
        <Link to="/quiero-ser-cliente">Quiero ser cliente</Link>
        <Link to="/">Descarga la App</Link>
        <Link to="/nosotros">Nosotros</Link>
        <Link to="/ingresar">Inicia sesión</Link>
    </Navigation>)
    }

    render() {
        return (
            <div className="demo-big-content">
            <Layout>
                <Header className="header-styles" title="Distribuidora EMVI" scroll>
                    {this.Navigation()}
                </Header>
                <Drawer title="Distribuidora EMVI">
                    {this.Navigation()}
                </Drawer>
                <Content className="main-content">
                    <div className="page-content">
                        <div key="dashboard">
                            <div className="Content" ref={this.createRef}>
                                {this.props.children}
                            </div>
                        </div>
                    </div>
                </Content>
            </Layout>
            </div>
        );
    }
}

const CommonLayoutRoute = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={matchProps => (
            <CommonLayoutComponent {...matchProps}>
                <Component {...matchProps} />
            </CommonLayoutComponent>
        )} />
    )
};

export default CommonLayoutRoute;
