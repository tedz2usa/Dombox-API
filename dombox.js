var log = console.log.bind(console);

window.addEventListener('load', init);

function init() {
	var box = createBox('test', document.body);
}

function createBox(classname, parent) {
	var elem = document.createElement('div');
	elem.classList.add(classname);
	parent.appendChild(elem);
}


