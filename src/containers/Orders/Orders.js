import React, { Component } from "react";
import Order from '../../components/Order/Order';
import axios from '../../axiosOrders';
import withError from '../../hoc/withErrorHandler/withErrorHandler';
class Orders extends Component {
    state = {
        orders: [],
        loadin: true
    }
    componentDidMount() {
        axios.get('/orders.json')
            .then(res => {
                console.log(res);
                const fetchedOrders = [];
                for (let key in res.data) {
                    fetchedOrders.push({
                        ...res.data[key],
                        id: key
                    });
                }
                this.setState({
                    orders: fetchedOrders,
                    loadin: false
                })
            })
            .catch(err => {
                this.setState({ loadin: false })
            })

    }

    render() {
        return (
            <div>
                {this.state.orders.map(order => (
                    <Order
                        key={order.id}
                        ingredients={order.ingredients}
                        price={+order.price}
                    />
                ))}
            </div>
        );
    }
}

export default withError(Orders, axios);