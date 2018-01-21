angular.module('myApp')
.controller('nouveauContactController', function($http, $window){
	var self = this;

	var urlServeur = "http://localhost:8888/users";

	self.creerContact = function(){
		var requete = {
			"nom" : self.nom,
			"prenom" : self.prenom,
			"dateAnniversaire" : moment(self.dateAnniversaire, "yyyy/MM/dd"),
			"sexe" : self.sexe,
			"adresse" : self.adresse,
			"email" : self.email,
			"telephone" : self.telephone,
			"commentaire" : self.commentaire
		};

		$http.post(urlServeur,requete).then(
			function(){
				//TODO
				//afficher un message pour dire que l'enregistrement a été créé. Toast ?
				$window.location.href = '/#/repertoire';
			},function(){
				console.log("echec");
			}
		);

	};

});
