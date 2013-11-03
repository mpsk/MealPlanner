function SettingsViewModel(){

	var limitation = {
		protein: ko.observable(10),
		fats: ko.observable(16),
		carbohydrate: ko.observable(100)
	};
	
	var selectedDate = ko.observable(new Date());

	return {
		limitation: limitation,
		selectedDate: selectedDate
	}
};

var settingsVM = new SettingsViewModel();