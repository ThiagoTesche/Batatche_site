window.onload = feedback1;

// Go to the social media when is clicked//
var face = document.getElementById("face");
var instagram = document.getElementById("ig");

//Action
face.addEventListener("click", ()=>{
	window.location.href = "https://www.facebook.com/Batatche";
});

instagram.addEventListener("click", ()=>{
	window.location.href = "https://www.instagram.com/batatche_delivery/";
});

//The social medias in Redes sociais//

var faces = document.getElementById("faces");
var igs = document.getElementById("igs");
var whatss = document.getElementById("whatss");

faces.addEventListener("click", ()=>{
	window.location.href = "https://www.facebook.com/Batatche";
});

igs.addEventListener("click", ()=>{
	window.location.href = "https://www.instagram.com/batatche_delivery/";
});


//Show Slides
(function() {
	document.addEventListener( "DOMContentLoaded", function() {
		
		var slider = new Slideshow( "#main-slider" );
		
	});

	function Slideshow( element ) {
		this.el = document.querySelector( element );
		this.init();
	}
	
	Slideshow.prototype = {
		init: function() {
			this.wrapper = this.el.querySelector( ".slider-wrapper" );
			this.slides = this.el.querySelectorAll( ".slide" );
			this.previous = this.el.querySelector( ".slider-previous" );
			this.next = this.el.querySelector( ".slider-next" );
			this.index = 0;
			this.total = this.slides.length;
			this.timer = null;
			
			this.action();
			this.stopStart();	
		},
		_slideTo: function( slide ) {
			var currentSlide = this.slides[slide];
			currentSlide.style.opacity = 1;
			
			for( var i = 0; i < this.slides.length; i++ ) {
				var slide = this.slides[i];
				if( slide !== currentSlide ) {
					slide.style.opacity = 0;
				}
			}
		},
		action: function() {
			var self = this;
			self.timer = setInterval(function() {
				self.index++;
				if( self.index == self.slides.length ) {
					self.index = 0;
				}
				self._slideTo( self.index );
				
			}, 10000);
		},
		stopStart: function() {
			var self = this;
			self.el.addEventListener( "click", function() {
				clearInterval( self.timer );
				self.timer = null;
				
			}, false);
			self.el.addEventListener( "dblclick", function() {
				self.action();
				
			}, false);
		}
		
		
	};
	

})();

// IR para a div conforme clicado no menu//
var cardapio = document.getElementById("cardapio");
var sabor = document.getElementById("sabores");
sabor.addEventListener("click", ()=>{
	 cardapio.scrollIntoView({behavior:"smooth"});
});


var feed = document.getElementById("feed");
document.getElementById("feedBack").addEventListener("click", ()=>{
	feed.scrollIntoView({behavior:"smooth", block:"center",});
});

var contatoAtendimento = document.getElementById("contatoAtendimento");
document.getElementById("contato").addEventListener("click", ()=>{
	contatoAtendimento.scrollIntoView({behavior:"smooth"});
});

document.getElementById("conheca").addEventListener("click", ()=>{
	cardapio.scrollIntoView({behavior:"smooth"});
});

//feedback slides//
var dot1 = document.getElementById("dot1");
var dot2 = document.getElementById("dot2");
var dot3 = document.getElementById("dot3");

let first = document.getElementById("first");
let second = document.getElementById("second");
let third = document.getElementById("third");

dot1.addEventListener("click", ()=>{
	dot2.style.backgroundColor ="#a83535";
	dot1.style.backgroundColor = "#ff914d";
	dot3.style.backgroundColor = "#a83535";
	first.style.display = "block";
	second.style.display = "none";
	third.style.display = "none";
});

dot2.addEventListener("click", ()=>{
	dot1.style.backgroundColor ="#a83535";
	dot2.style.backgroundColor = "#ff914d";
	dot3.style.backgroundColor = "#a83535";
	first.style.display = "none";
	second.style.display = "block";
	third.style.display = "none";
});

dot3.addEventListener("click", ()=>{
	dot1.style.backgroundColor ="#a83535";
	dot3.style.backgroundColor = "#ff914d";
	dot2.style.backgroundColor = "#a83535";
	first.style.display = "none";
	second.style.display = "none";
	third.style.display = "block";
});

/* Number Whats */

document.getElementById("whatss").addEventListener("mouseover", ()=>{
	document.getElementById("modal").style.display = "block";
});

document.getElementById("whatss").addEventListener("mouseleave", ()=>{
	setTimeout(function(){
		document.getElementById("modal").style.display = "none";
	}, 4000);
});


//Feedback automatic//

function feedback1(){
	document.getElementById("first");
	dot2.style.backgroundColor ="#a83535";
	dot1.style.backgroundColor = "#ff914d";
	dot3.style.backgroundColor = "#a83535";
	first.style.display = "block";
	second.style.display = "none";
	third.style.display = "none";
	setTimeout("feedback2()", 10000);
}

function feedback2(){
	document.getElementById("second");
	dot1.style.backgroundColor ="#a83535";
	dot2.style.backgroundColor = "#ff914d";
	dot3.style.backgroundColor = "#a83535";
	first.style.display = "none";
	second.style.display = "block";
	third.style.display = "none";
	setTimeout("feedback3()", 10000);
}

function feedback3(){
	document.getElementById("third");
	dot1.style.backgroundColor ="#a83535";
	dot3.style.backgroundColor = "#ff914d";
	dot2.style.backgroundColor = "#a83535";
	first.style.display = "none";
	second.style.display = "none";
	third.style.display = "block";
	setTimeout("feedback1()", 10000);
}

//Menu Mobile //
document.getElementById("sabores-mobile").addEventListener("click", ()=>{
	cardapio.scrollIntoView({behavior:"smooth"});
});

document.getElementById("feedBack-mobile").addEventListener("click", ()=>{
	feed.scrollIntoView({behavior:"smooth", block: "center"});
});

document.getElementById("contato-mobile").addEventListener("click", ()=>{
	contatoAtendimento.scrollIntoView({behavior: "smooth"})
});


//menu
var btn = document.getElementById("btnMenu");
var menuMobile = document.getElementById("MenuMobile");

btn.addEventListener("click", ()=>{
	if(menuMobile.style.display !== 'none'){
		menuMobile.style.display = "none";
	}else{
		menuMobile.style.display = "block";
	}
});

whatss.addEventListener("click", ()=>{
	window.location.href = "https://api.whatsapp.com/send?phone=+5551994516208";
});




