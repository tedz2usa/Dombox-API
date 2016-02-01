var log = console.log.bind(console);

log('Hello!');

window.addEventListener('load', init);

var body;

function init() {
	log('Window loaded.');
	body  = document.getElementsByTagName('body')[0];
	var box = createBox('test', body);
}


function createBox(classname, parent) {
	var elem = document.createElement('div');
	elem.classList.add(classname);
	parent.appendChild(elem)

}


