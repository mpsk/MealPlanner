function DataStore(){


	return {
		addedDishes: ko.observableArray([])
	}
}

var dataStore = new DataStore();

function getSum(dishes, name){
	var sum = 0;
	$.each(dishes, function(i) {
		sum += dishes[i][name];
	});
	return sum;
}