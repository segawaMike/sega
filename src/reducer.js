export const getBasketTotal = (basket) => basket?.reduce((amount,item) => item.price + amount, 0);



export const initialState = {
	basket:[],
	user: null,
};


function reducer(state, action) {
	console.log(action);
	switch(action.type){
		case 'ADD__TO__BASKET':
		//logic for add to basket
		return{
			...state,
				basket:[...state.basket, action.item]
		};
		break;
		case 'REMOVE__FROM__BASKET':
		//LOGIC FOR REMOVE FROM BASKER
		let newBasket =[...state.basket];

		const index = state.basket.findIndex((basketItem)=> basketItem.id === action.id)
		if (index >= 0) {
			newBasket.splice(index, 1);
		}else{
			console.warn('cant remove product (id:${action.id})');
		}
		 return{
		 	...state,
		 	basket:newBasket,
		 };
		break;
		default:
			return state;
	}
}

export default reducer