function RationViewModel(){

	var addedDishes = dataStore.addedDishes;
	
	var total = {
		protein: ko.computed(function() {
			return getSum(addedDishes(), 'protein');
		}),
		fats: ko.computed(function() {
			return getSum(addedDishes(), 'fats');
		}),
		carbohydrate: ko.computed(function() {
			return getSum(addedDishes(), 'carbohydrate');
		}),
		kcal: ko.computed(function() {
			return getSum(addedDishes(), 'kcal');
		})
	};

	var delDish = function(){
		addedDishes.remove(this);
	};

	var print = function(){
		$('section.mp-ration').printThis();
	};

	return {
		addedDishes: addedDishes,
		delDish: delDish,
		total: total,
		print: print
	}
};

var rationVM = new RationViewModel();

function getSum(dishes, name){
	var sum = 0;
	$.each(dishes, function(i) {
		sum += dishes[i][name];
	});
	return sum;
}