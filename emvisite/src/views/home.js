import React, { Component } from 'react';
import TableProducts from '../components/table';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            isLoaded: false,
            clientToken: 'QLuFegJM_yuUFA3HWft62LpA5ZufBbsj_1579273589'
        };
    }

    async componentDidMount() {
       fetch('/products', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer QLuFegJM_yuUFA3HWft62LpA5ZufBbsj_1579273589'
            },
        })
        .then(response => response.json())
        .then(data => {
            //console.table(data)
            this.setState({'products': data, isLoaded: true});
        }).catch(e => {
            console.log(e);
            return e;
        });
    }

    render () {
        var {products, isLoaded} = this.state;
        
        return (
            <div>
                <div className="cover-home">
                    <h1>Todo lo que necesitas para tu mascota</h1>
                </div>
                { (isLoaded) ? (
                <TableProducts products={products}/>):(
                    <h1> No hay productos</h1>
                )}
            </div>
        );
    }
}

export default Home;