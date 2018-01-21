angular.module('myApp')
.controller('contactController', function($http, $routeParams, $sce){

	var self=this;

	var urlServeur = "http://localhost:8888/users";

	var idContact = $routeParams.id;

	//en attendant d'avoir les services REST, faire appel au bouchon avec toutes les données 
	//et filtrer celle que l'on veut par rapport à l'id
	$http.get(urlServeur+"/"+idContact).then(function(response) {
		self.contact = response.data;
	});

	self.supprimerUtilisateur = function(){
		$http.delete(urlServeur+"/"+idContact).then(function(response){
			console.log("utilisateur effacé");
			//TODO redirigé vers le repertoire
		});
	};

	self.majUtilisateur = function(){
		//TODO : appeler fenetre nouveau contact avec données envoyées
		
	};

	self.findSexe = function(sexe){
		if(sexe ==="M"){
			return $sce.trustAsHtml('&#9794;');
		} else if(sexe ==="F"){
			return $sce.trustAsHtml('&#9792;');
		} else {
			return sexe;
		}
	};
});