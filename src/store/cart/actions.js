import types from './types'

export const toggleCartHidden = () => ({
	type: types.TOGGLE_CART_HIDDEN
})

export const addItem = item => ({
	type: types.ADD_ITEM,
	payload: item
})