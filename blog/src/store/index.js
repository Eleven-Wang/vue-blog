import Vue from 'vue'
import Vuex from 'vuex'

import ShopGoods from './ShopGoods/ShopGoods.js'

import state from './state.js'

Vue.use(Vuex)

const store = new Vuex.Store({
	state,
	modules: {
		a: ShopGoods
	}
})

export default store