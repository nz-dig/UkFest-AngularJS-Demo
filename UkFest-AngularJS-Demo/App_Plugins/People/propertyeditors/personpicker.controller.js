angular.module("umbraco").controller("People.PersonPickerController", 
	function ($scope, personResource, dialogService) {
		$scope.openPicker = function(){
			dialogService.open({
				template: "../app_plugins/people/propertyeditors/personpickerdialog.html",
				scope: $scope,
				callback: populate
			});
		};
	
		if (!isNaN($scope.model.value))
		{
		    personResource.getById($scope.model.value).then(function (response) {
		        $scope.model.name = response.data.name;
		    });
		}
	
		
		function populate(data) {
		    $scope.safeApply($scope.setModelvalue(data));
		  };


		$scope.setModelvalue = function (data) {
		    $scope.model.value = data.id;
		    $scope.model.name = data.name;

		}

		$scope.safeApply = function (fn) {
		    var phase = this.$root.$$phase;
		    if (phase == '$apply' || phase == '$digest') {
		        fn();
		    } else {
                this.$apply(fn);
		    }
		};
});


angular.module("umbraco").controller("People.PersonPickerDialogController", 
	function ($scope, dialogService) {
        	  
	    $scope.dialogEventHandler = $({});

	   

	    $scope.dialogEventHandler.bind("treeNodeSelect", function (ev, args) {
	     
			args.event.preventDefault();
			args.event.stopPropagation();
			$scope.submit(args.node);
		});
	});

