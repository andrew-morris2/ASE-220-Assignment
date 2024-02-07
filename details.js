document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const petIndex = parseInt(urlParams.get('index'));

    const pet = pets[petIndex];

    
    var animalIdElement = document.getElementById('animalId');
    var microchipElement = document.getElementById('microchip');
    var spayedNeuteredElement = document.getElementById('spayedNeutered');
    var nameElement = document.getElementById('name');
    var typeElement = document.getElementById('type');
    var breedElement = document.getElementById('breed');
    var sexElement = document.getElementById('sex');
    var colorElement = document.getElementById('color');
    var ageElement = document.getElementById('age');
    var aboutElement = document.getElementById('about');
    var statusElement = document.getElementById('status');

    animalIdElement.innerText += pet.id;
    microchipElement.innerText += pet.chip;
    spayedNeuteredElement.innerText += pet.spayed;
    nameElement.innerText += pet.name;
    typeElement.innerText += pet.type;
    breedElement.innerText += pet.breed;
    sexElement.innerText += pet.sex;
    colorElement.innerText += pet.color;
    
    ageElement.innerText += pet.age;
    aboutElement.innerText += pet.about;
    statusElement.innerText += pet.status.join(', ');

});
