import Vue from 'vue'
export default {
	receive_goods (state, { goods }) {
		state.goods = goods
	},
	decrement_food_count (state, { food }) {
		if (food.count) {
			food.count--
			if (food.count === 0) {
				state.shopCart.splice(state.shopCart.indexOf(food), 1)
			}
		}
	},
	increment_food_count (state, { food }) {
		if (!food.count) {
			Vue.set(food, 'count', 0)
			state.shopCart.push(food)
		}
		food.count++
	},
	clear_cart (state) {
		state.shopCart.forEach(food => {
			food.count = 0
		})
		state.shopCart = []
	}
}