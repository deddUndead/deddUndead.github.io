$(document).ready(function(){
	var i = 0;
	var randomer;
	var ppl = 100; var mon = 1000;
	var randomPPL, randomTERS, randomMON;
	var terra = 100;
	var townsfp = ["Асгорд", "Пантелеода", "Украина", "Летзария", "Гондор", "Молдавия", "Германия", "Пруссия"];
	var gosudarstvoname = "undefined";


	//игровые элементы
	$("#game").hide();
	$("#ppl").hide();
	$("#ters").hide();
	$("#mon").hide();
	$("#event").hide();
	$("fire").hide();
	$("#start").hide();
	$("#results").hide();	
	$("#days").hide();
	$("#btn").hide();

	//название
	$("#gosnameok").click(function(event) {
		gosudarstvoname = $("#gosname").val();
		if(gosudarstvoname == "") {
			index = Math.floor(Math.random() * (7 - 0)) - 0;
			$("#start").text("Государство: " + townsfp[index]);
			$("#start").show();
			$("#btn").show();
			$("#days").show();
			$("#chusnaem").hide();
		}
		else { $("#start").text("Государство: " + gosudarstvoname); 
			   $("#start").show();
			   $("#btn").show();
			   $("#days").show();
		       $("#chusnaem").hide();
		} 
	});

	$("#btn").click(function(event){

		$("#event").hide();
		$("#fire").hide();

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

			ppl = ppl + randomPPL;
			mon = mon + randomMON;

			$("#ppl").text("Население: " + ppl + " человек");
			$("#mon").text("Казна: " + mon + " монет");
			$("#ters").text("Территория: " + terra + "/100 %")

			//евенты
			randomer = Math.floor(Math.random() * (100 - 1)) + 1;
			if(randomer < 10){
				$("#event").show();
				$("#fire").show();

				ppl = ppl - 150;
				mon = mon - 450;
				terra = terra - 10;

				$("#ppl").text("Население: " + ppl + " человек");
				$("#mon").text("Казна: " + mon + " монет");
				$("#ters").text("Территория: " + terra + "/100 %")
			}
		}

		//конец
		if (i >= 31){
			i = 100000;
			$("#results").show();
			$("#ppl").show();
			$("#ters").show();
			$("#mon").show();
			$("#days").text("Конец демоверсии.");
		}
		if(ppl<=0){ 
			i = 100000;
			$("#results").show();
			$("#ppl").show();
			$("#ters").show();
			$("#mon").show();
			$("#days").text("Конец игры. Население вымерло.");
		}
		if(terra<=0){
			i = 100000;
			$("#results").show();
			$("#ppl").show();
			$("#ters").show();
			$("#mon").show();
			$("#days").text("Конец игры. Государство уничтожено.");
		}
		if(mon<=0){
			i = 100000;
			$("#results").show();
			$("#ppl").show();
			$("#ters").show();
			$("#mon").show();
			$("#days").text("Конец игры. Страна обанкротилась.");
		}
	});

});