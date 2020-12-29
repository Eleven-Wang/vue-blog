import {
	reqGoods
} from '../../api/index.js'

export default {
	async getGoods ({ commit }) {
		const result = await reqGoods()
		commit('receive_goods', {goods: result.data})
	},
	updateFoodCount ({ commit }, {food, isAdd}) {
		if (isAdd) {
			commit('increment_food_count', { food })
		} else {
			commit('decrement_food_count', { food })
		}
	},
	clearCart ({ commit }) {
		commit('clear_cart')
	}
}