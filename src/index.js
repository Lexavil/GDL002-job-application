


var modal = document.querySelector('.modal');
var modalToggle = document.querySelectorAll('.modal-toggler');

modalToggle.forEach(clickEvent);

function clickEvent(item) {
	item.addEventListener('click', function() {
		modal.classList.toggle('modal--is-visible');
 		return false;
	});
}

document.addEventListener('click', function(e) {
	if(e.target === modal) {
		modal.classList.remove('modal--is-visible');
	}
});

document.addEventListener('keyup', function(e) {
	if(e.keyCode === 27) {
		modal.classList.remove('modal--is-visible');
	}
});