import React, { Component } from 'react';

export default class OrderList extends Component {
	deleteOder = (e) => {
		console.log(parseInt(e.target.getAttribute('data-id')));
	};

	loadOrders = (orders) => {
		let list = [];
		for (let i = 0; i < orders.length; i++) {
			list.push(
				<div className='d-flex flex-row px-3 order-row' key={i}>
					<div className='flex-fill w-100 p-2'>{orders[i].order}</div>
					<div className='flex-fill flex-shrink-1 py-2 px-4'>{orders[i].amount}</div>
					<div className='flex-fill flex-shrink p-1'>
						<button className='btn btn-danger' data-id={orders[i].id} onClick={this.deleteOder}>
							Delete
						</button>
					</div>
				</div>
			);
		}
		return list;
	};

	render() {
		let orders = this.props.orders;
		return <div className='pt-3'>{this.loadOrders(orders)}</div>;
	}
}
