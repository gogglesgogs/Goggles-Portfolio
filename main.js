import './style.css';

// document.querySelector('#app').innerHTML = `

// `

const theme = window.matchMedia('(prefers-color-scheme: light)').matches;

if (theme) {
	document.documentElement.setAttribute('data-theme', 'light');
} else {
	document.documentElement.setAttribute('data-theme', 'dark');
}

const togglebuttonlight = document.querySelector('#light');
const togglebuttondark = document.querySelector('#dark');
const togglebutton = document.querySelector('#togglebtn');

togglebutton.addEventListener('click', () => {
	const currentTheme = document.documentElement.dataset.theme;
	if (currentTheme === 'light') {
		togglebuttondark.style.display = 'none';
		togglebuttonlight.style.display = 'block';
		document.documentElement.setAttribute('data-theme', 'dark');
	} else if (currentTheme === 'dark') {
		togglebuttonlight.style.display = 'none';
		togglebuttondark.style.display = 'block';
		document.documentElement.setAttribute('data-theme', 'light');
	}
});

window.addEventListener('scroll', () => {
	document.querySelector('.scroll').style.display = 'none';
});
