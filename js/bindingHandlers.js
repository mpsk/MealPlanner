ko.bindingHandlers.calendar = {
    init: function (element, valueAccessor) {
        var selectedDate = valueAccessor();

        $(element).datepicker({
            startDate: selectedDate()
        }).on('changeDate', function (e) {
            e.date.toLocaleString();
            var date = 1900+e.date.getYear()+'-'+e.date.getMonth()+'-'+e.date.getDate();
            console.log(date);
            selectedDate(date);
        });

    }
};