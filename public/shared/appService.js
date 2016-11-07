angular.module('tgabbert')

.factory('appService', function($http, ref) {
	return {
		sendMessage: function(message) {
			return $http.post(`${ref.url}/api/messages`, message)
			.then( response => {
				return response.data
			})
		}
	}
})
