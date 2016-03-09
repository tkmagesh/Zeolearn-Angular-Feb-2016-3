 bugTrackerApp.service('bugService', function(Bug, $q, $http) {
   this.getAllBugs = function() {
    var deferred = $q.defer();
    $http.get('http://localhost:3000/bugs').then(function(response){
     var bugs = response.data.map(function(bugData){
      return new Bug(bugData);
     });
     deferred.resolve(bugs)
    });
    return deferred.promise;
   }

   this.saveNewBug = function(newBug) {
    var deferred = $q.defer();

    $http.post('http://localhost:3000/bugs', newBug).then(function(response) {
     deferred.resolve(new Bug(response.data));
    });
    return deferred.promise;
   }

   this.updateBug = function(bug) {
    $http.put("http://localhost:3000/bugs/" + bug.id, bug)
   }

   this.deleteBug = function(bug) {
    return $http.delete("http://localhost:3000/bugs/" + bug.id);
   }
  });
