import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import '../App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import { Link } from 'react-router-dom';

class HomeLayoutComponent extends Component{
    constructor(props){
        super(props);
        this.createRef = this.createRef.bind(this);
        
        this.state = {
            scrollTop: 0,
            scrollClass: ''
          };
      
        this.onScrollHandler = this.onScrollHandler.bind(this);
    
        window.addEventListener("scroll", this.onScrollHandler);
    }

    onScrollHandler(e) {
        this.setState({ scrollTop: window.scrollY });
        let cssClass = '';
        if(window.scrollY > 60) {
        cssClass = 'scrolled';
        } else {
        cssClass = '';
        }
        console.log(cssClass)
        this.setState({scrollClass: cssClass})
    }

    createRef(element) {
        //console.log(element);
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
                    <Header className={`header-home ${this.state.scrollClass}`} transparent title="Distribuidora EMVI">
                        {this.Navigation()}
                    </Header>
                    
                    <Drawer title="Distribuidora EMVI">
                        {this.Navigation()}
                    </Drawer>
                    <Content>
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

const HomeLayoutRoute = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={matchProps => (
            <HomeLayoutComponent {...matchProps}>
                <Component {...matchProps} />
            </HomeLayoutComponent>
        )} />
    )
};

export default HomeLayoutRoute;
