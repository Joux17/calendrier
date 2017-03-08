angular.module('myApp')
.controller('calendrierController', function($http){
  var self=this;

  var now = new Date();

  var events= [];
	/* config object */
  self.uiConfig = {
    calendar:{
      lang: 'fr',
      height: 450,
      editable: true,
      header:{
        left: 'month basicWeek basicDay agendaWeek agendaDay',
        center: 'title',
        right: 'today prev,next'
      },
      eventClick: self.alertEventOnClick,
      eventDrop: self.alertOnDrop,
      eventResize: self.alertOnResize,
    }
  };

  //pour le moment on ramène toutes les données pour créer le tableau contenant les dates d'anniversaire
  $http.get("../../bouchons/BDD.json").success(function(data) {
    self.contacts = data;
    creerEvents();
  });

  //TODO créer tableau 
  function creerEvents(){
    angular.forEach(self.contacts, function(contact) {
      var birthday = {};
      birthday.title = contact.nom;
      birthday.start = formatterDate(contact.anniversaire);
      events.push(birthday);
    });
  }

  function formatterDate(date){
    // remplacer l'année de naissance par l'année en cours
    var re = /[0-9]{4}/;
    var annee = now.getFullYear();
    return date.replace(re,annee);
  }

  //tableau contenant tous les anniversaires
  // $scope.events = [
  //    {title: 'All Day Event',start: new Date(y, m, 1)},
  //    {title: 'Long Event',start: new Date(y, m, d - 5),end: new Date(y, m, d - 2)},
  //var events=
  //contient les données qui vont etre affichées dans le calendrier
	self.eventSources = [events];

});