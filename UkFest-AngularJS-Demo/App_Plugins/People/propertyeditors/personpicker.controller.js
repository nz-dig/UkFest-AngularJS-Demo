angular.module("umbraco").controller("People.PersonPickerController", 
	function($scope, dialogService){
		$scope.openPicker = function(){
			dialogService.open({
				template: "../app_plugins/people/propertyeditors/personpickerdialog.html",
				scope: $scope,
				callback: populate
			});
		};
	
		function populate(data) {
		   
		    $scope.safeApply($scope.setModelvalue(data));
		    
		};


		$scope.setModelvalue = function (newValue) {
		    $scope.model.value = newValue;
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
			$scope.submit(args.node.id);
		});
	});