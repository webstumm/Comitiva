$(document).ready(function() {
	bindDatePicker();
});

function bindDatePicker()
{
	$('.jsDatepicker').datepicker({
		format: 'dd/mm/yyyy'
	});
}