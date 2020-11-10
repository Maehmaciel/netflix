$('.owl-carousel').owlCarousel({
	loop: true,
	margin: 20,
	nav: true,
	responsive: {
		0: {
			items: 1
		},
		600: {
			items: 3
		},
		1000: {
			items: 5
		}
	}
})

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
	if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
		document.getElementById("header").style.backgroundColor = "rgb(20, 20, 20)";
	} else {
		document.getElementById("header").style.backgroundColor = "";
	}
}