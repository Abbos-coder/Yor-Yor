// export const getters = {
// 	isAuthenticated(state) {
// 	  return state.auth.loggedIn
// 	},

// 	loggedInUser(state) {
// 	  return state.auth.user
// 	}
// }

// auth: {
// 	strategies: {
// 		local: {
// 			endpoints: {
// 				login: { url: '/user/login', method: 'post', propertyName: 'token' },
// 				logout: false,
// 					user: { url: '/user/user', method: 'get', propertyName: 'data' },
// 			},
// 			tokenRequired: true,
// 			tokenType: 'Bearer'
// 		},
// 		google: {
// 			client_id: 'your gcloud oauth app client id'
// 		},
// 	},
// 	redirect: {
// 		login: '/?login=1',
// 			logout: '/',
// 				user: '/profile',
// 					callback: '/'
// 	}
// }
