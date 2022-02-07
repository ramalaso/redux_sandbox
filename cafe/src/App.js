import logo from './logo.svg';
import './App.css';

import OrderCounter from './components/order-counter';
import OrderForm from './components/order-form';
import OrderList from './components/order-list';
import { Provider } from 'react-redux';
import { Component } from 'react';
// import store from './store';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			orders: [
				{ id: 1, order: 'Chocolate', amount: 1 },
				{ id: 2, order: 'Pique', amount: 1 },
			],
		};
	}

	addOrder = (order) => {
		let { orders } = this.state;
		orders.push(order);
		this.setState({ orders });
	};

	render() {
		return (
			// <Provider store={store}>
			<div className='App'>
				<OrderForm addOrder={this.addOrder} />
				<hr />
				<OrderCounter count={this.state.orders.length} />
				<OrderList orders={this.state.orders} />
			</div>
			// </Provider>
		);
	}
}

export default App;
