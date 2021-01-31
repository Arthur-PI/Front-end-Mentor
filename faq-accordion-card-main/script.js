function showResponse(balise) {
	if (balise.children[0].style.fonWeight == 700) {
		balise.children[0].style.fonWeight = 500;
		balise.children[0].style.color = 'hsl(237, 12%, 33%)';
		balise.children[0].children[0].style.transform = 'rotateZ(0deg)';
	} else {
		balise.children[0].style.fonWeight = 700;
		balise.children[0].style.color = 'hsl(238, 29%, 16%)';
		balise.children[0].children[0].style.transform = 'rotateZ(180deg)';
	}

	balise.children[1].classList.toggle('hidden');
}
