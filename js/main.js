
$(".barras-container").click(function(e){
    e.preventDefault();
    //$(this).toggleClass("change cha");
    console.log("click")
    
    $("ul.navigation").toggleClass("show");
    $("div.barras-container img.barras").toggleClass("oculto");
    $("header").toggleClass("patras");
})

$("ul.navigation > li>a").click(function(e){
    e.preventDefault();
    //$(this).toggleClass("change cha");
    console.log("click")
    $("ul.navigation").toggleClass("show");
    $("header").toggleClass("patras");
    $("div.barras-container img.barras").toggleClass("oculto");

})


$(document).on('click', 'a[href^="#"]', function(e){
	console.log("entro");
	e.preventDefault();
	console.log($(this).attr('href'));
	$('html,body').animate({
        
        scrollTop: ($("section" + $(this).attr('href')).offset().top )
	},200,'linear');
	});

