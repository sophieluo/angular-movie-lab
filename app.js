angular
  .module('movieApp',[])
  .controller('MovieController', MovieController);

  function MovieController() {
    var vm = this;
    vm.moviesToWatch = [
      {name: 'Frozen'},
      {name: 'Up'},
      {name: 'Little Mermaid'},
      {name: 'Cinderella'},
      {name: 'Despicable Me'}
    ];
    // console.log(vm)
    // vm.movie = {};
    vm.addMovie = function(movie){
      // vm.addmovie = {};
      vm.moviesToWatch.push(vm.movie)
    };

    vm.deleteMovie =  function(movie) {
      var movieIndex = vm.moviesToWatch.indexOf(movie);
      vm.moviesToWatch.splice(movieIndex, 1);
    }



    // $scope.submit = function() {
    //     if ($scope.text) {
    //       $scope.list.push(this.text);
    //       $scope.text = '';
    //     }
    //   };
    // more logic here
  }
