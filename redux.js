let initialState = {
	orders: [
		{ type: 'NEW_ORDER', payload: { id: 1, order: 'Coffee', amount: 1 } },
		{ type: 'NEW_ORDER', payload: { id: 2, order: 'Cake', amount: 10 } },
		{ type: 'NEW_ORDER', payload: { id: 3, order: 'Sandwich', amount: 5 } },
	],
	users: [
		{ id: 1, name: 'John', age: 34 },
		{ id: 2, name: 'Mark', age: 28 },
		{ id: 3, name: 'Nick', age: 44 },
	],
};

//reducer
let orders_reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'NEW_ORDER': {
			let newState = { ...state, orders: [...state.orders, action.payload] };
			return newState;
		}
		case 'CHANGE_AMOUNT': {
			let { id, amount } = action.payload;
			let newState = { ...state };
			newState.orders.map((item) => {
				if (item.id === id) {
					item.amount = amount;
				}
			});
			return newState;
		}
		case 'DELETE_ORDER': {
			let { id } = action.payload;
			let newState = { ...state };
			newState.orders = newState.orders.filter((item) => item.id !== id);
			return newState;
		}
		case 'CHANGE_AGE': {
			let { id, age } = action.payload;
			let newstate = { ...state };
			newstate.users.map((item) => {
				if (item.id === id) {
					item.age = age;
				}
			});
		}
		default:
			return state;
	}
};

let user_reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'CHANGE_AGE': {
			let { id, age } = action.payload;
			let newstate = { ...state };
			newstate.users.map((item) => {
				if (item.id === id) {
					item.age = age;
				}
			});
		}
		default:
			return state;
	}
};

let action4 = { type: 'CHANGE_AMOUNT', payload: { id: 1, amount: 3 } };

let action5 = { type: 'DELETE_ORDER', payload: { id: 3 } };

let action6 = { type: 'CHANGE_AGE', payload: { id: 1, age: 45 } };

let rootReducer = Redux.combineReducers(user_reducer, orders_reducer);
//store
let store = Redux.createStore(rootReducer);
store.subscribe(() => {
	console.log('State has been changed.', store.getState());
});

//Dispathing actions change and delete
store.dispatch(action4);
store.dispatch(action5);
store.dispatch(action6);
