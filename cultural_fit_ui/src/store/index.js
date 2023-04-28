import { createStore } from 'vuex'

// Store functionality
import actions from "./actions.js";
import mutations from "./mutations.js";
import state from "./state.js";

export default createStore({
  actions,
	mutations,
	state,
})
