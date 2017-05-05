$(document).ready(function(){
	var i = 0;
	$("#ripnikita").hide();

	$("#btn").click(function(event){
		i++;
		$("#obama").show();

		if (i == 1){
			$("#ripnikita").show();
		}
	})
});