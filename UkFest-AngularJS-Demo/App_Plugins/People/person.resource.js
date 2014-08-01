angular.module("umbraco.resources")
	.factory("personResource", function($http){
	return{
		getById: function(id){
		    return $http.get("Backoffice/People/PersonApi/GetById?id=" + id);
		},

		getall: function(){
		    return $http.get("Backoffice/People/PersonApi/GetAll");
		},

		save: function(person){
		    return $http.post("Backoffice/People/PersonApi/PostSave", angular.toJson(person));
		},

		getDrunkById: function(id){
		    return $http.get("Backoffice/People/PersonApi/GetDrunk?id=" + id);
		},

		getSoberById: function(id){
			return $http.get("Backoffice/People/PersonApi/GetSober?id="+id);
		}
	};
});