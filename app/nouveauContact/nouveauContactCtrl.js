angular.module('myApp')
.controller('nouveauContactController', function($http, $filter){
	var self = this;

	var urlServeur = "http://localhost:8888/users";
	//TODO : envyer la date anniversaire comme il faut. Peut etre voir avec moment.js
	self.creerContact = function(){
		var requete = {
			"nom" : self.nom,
			"prenom" : self.prenom,
			"dateAnniversaire" : $filter('date')(self.dateAnniversaire, "yyyy/MM/dd"),
			"sexe" : self.sexe,
			"adresse" : self.adresse,
			"email" : self.email,
			"telephone" : self.telephone,
			"commentaire" : self.commentaire
		};
		console.log(requete.dateAnniversaire);
		$http.post(urlServeur,requete).then(
			function(){
				//TODO : redirigier vers le repertoire ou vider le formulaire en cas de succès.
				//afficher un message pour dire que l'enregistrement a été créé. Toast ?
				console.log("nouveau contact enregistré");
			},function(){
				console.log("echec");
			}
		);

	};

});
