.controller('AppCtrl',['$scope', '$rootScope', function($scope, $rootScope) {
  $scope.data = [{id:1,name:'Item 1',devices:[{id:1,name:'Item 11'},
  {id:2,name:'Item 21'},
  {id:3,name:'Item 31'}]},
  {id:2,name:'Item 2'},
  {id:3,name:'Item 3',devices:[{id:1,name:'Item 13'}, 
  {id:2,name:'Item 23'}, {id:3,name:'Item 33'}]}];


}])
