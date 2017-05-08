$(document).ready(function(){
	var i = 0;
	var ppl = 100; var mon = 1000;
	var randomPPL, randomTERS, randomMON;

	//игровые элементы
	$("#game").hide();
	$("#ppl").hide();
	$("#ters").hide();
	$("mon").hide();
	
	$("#btn").click(function(event){

		//каунтер дней
		i++;
		$("#days").text("День: " + i);

		//стандартные показатели
		if (i == 1){
			$("#game").show();
			$("#ppl").show();
			$("#ters").show();
			$("mon").show();
		}


		//первые 20 дней
		if (i > 1){
			randomMON = Math.floor(Math.random() * (100 - 10)) + 10;
			randomPPL = Math.floor(Math.random() * (50 - 5)) + 5;

			ppl = ppl + randomPPL;
			mon = mon + randomMON;

			$("#ppl").text("Население: " + ppl);
			$("#mon").text("Казна: " + mon);
		}
	})

});