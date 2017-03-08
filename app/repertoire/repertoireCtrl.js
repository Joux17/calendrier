angular.module('myApp')
.controller('repertoireController', function($http, $location){

	var self=this;

	var urlServeur = "http://localhost:8888/users";

	/**Url bouchonnée*/
	/*$http.get("../../bouchons/BDD.json").success(function(data) {
		var orderedContacts = _.orderBy(data, function(contact){
			return contact.nom;
		});

		self.groupedContacts = _.groupBy(orderedContacts, function(contact) {
			return contact.nom[0];
		});
	});*/

	$http.get(urlServeur).then(function(response) {
		var data = response.data;
		var orderedContacts = _.orderBy(data, function(contact){
			return contact.nom;
		});
		
		self.groupedContacts = _.groupBy(orderedContacts, function(contact) {
			return contact.nom[0];
		});
	});

	self.ouvrirContact = function(id){
		$location.path("/contact/"+id);
	};
});