function showCarnivores (carnivores) {
	var output1 = document.getElementById("output1");
	carnivores.forEach(function(index) {
		output1.innerHTML += "<li>" + index + "</li>";
	});
}

function showHerbivores (herbivores) {
	var output2 = document.getElementById("output2");
	herbivores.forEach(function(index) {
		output2.innerHTML += "<li>" + index + "</li>";
	});
}

Predator.loadCarnivores(showCarnivores);
Predator.loadHerbivores(showHerbivores);