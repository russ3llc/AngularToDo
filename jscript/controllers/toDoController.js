function containsObject(obj, list) {
    var i;
    for (i = 0; i < list.length; i++) {
        if (list[i] === obj) {
            return true;
        }
    }

    return false;
}

function removeByObject(obj, list) {
    var i;
    for (i = 0; i < list.length; i++) {
        if (list[i] === obj) {
            list.splice(i, 1);
        }
    }

    return false;
}

function findByObject(obj, list) {
    var i;
    for (i = 0; i < list.length; i++) {
        if (list[i] === obj) {
            return i;
        }
    }

    return false;
}

var toDoApp = angular.module('toDo', []);
toDoApp.controller('toDoCont', function($scope){
	/*$scope.toDoText = "Enter task here.";*/
	$scope.toDoTask = [{
		id: 0,
		task: "Finish programming ToDo list!",
		category: ["programming", "hobby"],
		checked: 0
	},
	{
		id: 1,
		task: "Check email!",
		category: ["home"],
		checked: 0
	}];
	
	$scope.newToDoTask = "Enter task here.";
	$scope.newCat = "Enter category here.";
	
	var blankTask = {
		id: -1,
		task: "BLANK",
		category: ["NONE"],
		checked: 0
	};
	
	$scope.categories = ["programming", "hobby", "home"];
	
	$scope.addTask = function(newToDoTask){
		$scope.toDoTask.push({
			id: $scope.toDoTask.length,
			task: newToDoTask,
			category: $scope.selectedCats,
			checked: 0
		});
		$scope.selectedCats = [];
	}
	
	$scope.addCat = function(newCatToAdd){
		if(containsObject(newCatToAdd, $scope.categories)){
			alert("Category already in list!");
		}
		else{
		$scope.categories.push(newCatToAdd);
		}
	};
	
	$scope.editTask = function(task){
		angular.forEach(task, function(value, key){
			value.task = $scope.newToDoTask;
		});
	};
	
	$scope.editCat = function(cat){
		if(cat.length > 1){
			alert("Two categories can't be the same!");
		}
		else{
			var index = findByObject(cat[0], $scope.categories);
			var dupeCat = containsObject($scope.newCat, $scope.categories);
			if(dupeCat){
				alert("That category already exists!");
			}
			else{
				$scope.categories[index] = $scope.newCat;
				$scope.selectedCats = [];
			}
		}
	};
	
	$scope.deleteTask = function(task){
		angular.forEach(task, function(value, key){
			removeByObject(value, $scope.toDoTask);
		});
	};
	
	$scope.deleteCat = function(cat){
		angular.forEach(cat, function(value, key){
			removeByObject(value, $scope.categories);
		});
		$scope.selectedCats = [];
	};
	
	$scope.selectedTasks = [];
	
	$scope.selectedTask = function(task){
		if(containsObject(task, $scope.selectedTasks)){
			removeByObject(task, $scope.selectedTasks);
		}
		else{
			$scope.selectedTasks.push(task);
		}
	};
	
	$scope.selectedCats = [];
	
	$scope.selectedCat = function(cat){
		if(containsObject(cat, $scope.selectedCats)){
			removeByObject(cat, $scope.selectedCats);
		}
		else{
			$scope.selectedCats.push(cat);
		}
	};
	
	$scope.catIsSelected = function(cat){
		if(containsObject(cat, $scope.selectedCats)){
			return true;
		}
		else{
			return false;
		}
	};
});
