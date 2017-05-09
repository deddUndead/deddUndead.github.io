$(document).ready(function(){
	var i = 0; 
	var war = 0;
	var randomerfire, randomerepid, goswar, randomerwar, warlose;
	var ppl = 100; var mon = 1000;
	var randomPPL, randomTERS, randomMON;
	var terra = 100;
	var townsfp = ["Асгорд", "Пантелеода", "Украина", "Летзария", "Гондор", "Молдавия", "Германия", "Пруссия"];
	var townenemy = ["ЮАР", "США", "Регрардия", "Ромалиа", "Беккилион", "Филатия", "Джурия", "Спарта"];
	var gosudarstvoname = "undefined";


	//игровые элементы
	$("#game").hide(); 			$("#epid").hide();
	$("#ppl").hide();			$("#war").hide();
	$("#ters").hide();			$("#winwar").hide();
	$("#mon").hide();			$("#losewar").hide();	
	$("#fire").hide();			$("#warning").hide();
	$("#start").hide();			$("#ura").hide();
	$("#results").hide();		$("#nou").hide();
	$("#days").hide();			$("#res").hide();
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

		$("#fire").hide(); $("#epid").hide(); $("#war").hide(); $("#losewar").hide(); 
		$("#winwar").hide(); $("#warning").hide(); $("#ura").hide(); $("#nou").hide();

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

		//первые 31 дней
		if (i < 31){

			//если объявлена война
			if(war == 1){
				warlose = Math.floor(Math.random() * (100 - 10)) + 10;
				if (warlose <= 25)
				{
					$("#nou").show();
					$("#losewar").show();
					$("#losewar").text("Вы проиграли войну против государства " + townenemy[goswar]);

					ppl = ppl - 400;
					mon = mon - 600;
					terra = terra - 40;
					war = 0;
				}
				if (warlose > 25)
				{
					$("#ura").show();
					$("#winwar").show();
					$("#winwar").text("Вы выиграли войну против государства " + townenemy[goswar]);

					ppl = ppl - 50;
					mon = mon + 400;
					terra = terra + 10;
					war = 0;
					if(terra > 100) terra = 100;
				}
			}

			randomMON = Math.floor(Math.random() * (100 - 10)) + 10;
			randomPPL = Math.floor(Math.random() * (50 - 5)) + 5;

			ppl = ppl + randomPPL;
			mon = mon + randomMON;

			$("#ppl").text("Население: " + ppl + " человек");
			$("#mon").text("Казна: " + mon + " монет");
			$("#ters").text("Территория: " + terra + "/100 %");

			//евенты
			randomerfire = Math.floor(Math.random() * (100 - 1)) + 1;
			if(randomerfire < 20){
				$("#fire").show();

				ppl = ppl - 50;
				mon = mon - 450;
				terra = terra - 10;

				$("#ppl").text("Население: " + ppl + " человек");
				$("#mon").text("Казна: " + mon + " монет");
				$("#ters").text("Территория: " + terra + "/100 %");
			}

			randomerepid = Math.floor(Math.random() * (100 - 1)) + 1;
			if(randomerepid < 10){
				$("#epid").show();

				ppl = ppl - 150;

				$("#ppl").text("Население: " + ppl + " человек");
				$("#mon").text("Казна: " + mon + " монет");
				$("#ters").text("Территория: " + terra + "/100 %");
			}

			randomerwar = Math.floor(Math.random() * (100 - 1)) + 1;
			if(randomerwar < 5){
				goswar = Math.floor(Math.random() * (7 - 0)) + 0;

				$("#war").show();
				$("#warning").show();
				$("#war").text("Государство " + townenemy[goswar] + " объявляет вам войну");
				war = 1;
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
			$("#res").show();
			$("#btn").hide();
		}
		if(ppl<=0){ 
			i = 100000;
			$("#results").show();
			$("#ppl").show();
			$("#ters").show();
			$("#mon").show();
			$("#days").text("Конец игры. Население вымерло.");
			$("#res").show();
			$("#btn").hide();
		}
		if(terra<=0){
			i = 100000;
			$("#results").show();
			$("#ppl").show();
			$("#ters").show();
			$("#mon").show();
			$("#days").text("Конец игры. Государство уничтожено.");
			$("#res").show();
			$("#btn").hide();
		}
		if(mon<=0){
			i = 100000;
			$("#results").show();
			$("#ppl").show();
			$("#ters").show();
			$("#mon").show();
			$("#days").text("Конец игры. Страна обанкротилась.");
			$("#res").show();
			$("#btn").hide();
		}
	});

});