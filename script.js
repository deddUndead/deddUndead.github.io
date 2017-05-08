$(document).ready(function(){
	var i = 0;
	var randomer;
	var ppl = 100; var mon = 1000;
	var randomPPL, randomTERS, randomMON;
	var terra = 100;

	//игровые элементы
	$("#game").hide();
	$("#ppl").hide();
	$("#ters").hide();
	$("#mon").hide();
	$("#event").hide();
	$("fire").hide();
	
	$("#btn").click(function(event){

		$("#event").hide();
		$("fire").hide();

		//каунтер дней
		i++;
		$("#days").text("День: " + i + ". Лето.");

		//стандартные показатели
		if (i == 1){
			$("#game").show();
			$("#ppl").show();
			$("#ters").show();
			$("#mon").show();
		}

		//первые 20 дней
		if (i < 31){
			randomMON = Math.floor(Math.random() * (100 - 10)) + 10;
			randomPPL = Math.floor(Math.random() * (50 - 5)) + 5;
			randomTERS = Math.floor(Math.random() * (3 - 0)) + 0;

			ppl = ppl + randomPPL;
			mon = mon + randomMON;

			$("#ppl").text("Население: " + ppl + " человек");
			$("#mon").text("Казна: " + mon + " рублей");
			$("#ters").text("Территория: " + terra + "/100 %")

			//евенты
			randomer = Math.floor(Math.random() * (100 - 1)) + 1;
			if(randomer < 10){
				$("#event").show();
				$("fire").show();

				ppl = ppl - 150;
				mon = mon - 450;
				terra = terra - 10;

				$("#ppl").text("Население: " + ppl + " человек");
				$("#mon").text("Казна: " + mon + " рублей");
				$("#ters").text("Территория: " + terra + "/100 %")
			}
		}

		//конец
		if (i >= 31){
			$("#game").hide();
			$("#ppl").hide();
			$("#ters").hide();
			$("#mon").hide();
			$("#event").hide();
			$("fire").hide()
			$("#days").text("Конец игры");
		}

	})

});