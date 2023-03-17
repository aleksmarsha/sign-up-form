let password = Array.from(document.getElementsByClassName('error'));
password.forEach(psw => {
	psw.addEventListener('input', () => {
		let passFirst = document.getElementById('passone').value;
		let passSecond = document.getElementById('passtwo').value;
		if ((passFirst && passSecond) && passFirst === passSecond) {
			document.getElementById('passone').classList.remove('error');
			document.getElementById('passtwo').classList.remove('error');
			document.getElementById('match').innerHTML = '&nbsp';
		} else {
			document.getElementById('passone').classList.add('error');
			document.getElementById('passtwo').classList.add('error');
			document.getElementById('match').innerHTML = '* Passwords do not match';
		}
	});
});

function checkPasswords() {
	let passOne = document.getElementById('passone').value;
	let passTwo = document.getElementById('passtwo').value;
	if (!((passOne && passTwo) && passOne === passTwo)) {
		return false;
	}
}