

let isOpen = false;
cartButton.addEventListener('click', () => {
	if (isOpen === false) {
		cartMenu.style.display = 'flex';
		isOpen = true;
		console.log('menu is opened');
		console.log(isOpen);
	} else {
		cartMenu.style.display = 'none';
		isOpen = false;
		console.log('menu is closed');
		console.log(isOpen);
	}
});

