function RationViewModel(){

	var d = new Date();
	d.toLocaleString();

	var addedDishes = dataStore.addedDishes;
	var selectedDate = ko.observable(1900+d.getYear()+'-'+d.getMonth()+'-'+d.getDate());

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

	var filteredDate = ko.observable();

	var filteredRation = ko.computed(function(){
		return ko.utils.arrayFilter(addedDishes(), function(item) {
			return !selectedDate() ? true : (item.date.indexOf(selectedDate()) != -1);
		});
	});

	return {
		addedDishes: addedDishes,
		delDish: delDish,
		total: total,
		print: print,
		filteredDate: filteredDate,
		selectedDate: selectedDate,
		filteredRation: filteredRation
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