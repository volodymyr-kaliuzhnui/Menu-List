import refs from './refs'

const theme = {
  darkTheme: 'dark-theme',
  lightTheme: 'light-theme'
}

function changeTheme() {
  if (this.checked) {
    refs.body.classList = theme.darkTheme;
    localStorage.setItem('darkTheme', this.checked)
    localStorage.removeItem('lightTheme')
  } else {
    refs.body.classList = theme.lightTheme;
    localStorage.setItem('lightTheme', this.checked)
    localStorage.removeItem('darkTheme')
  }

}

let themIsOn = localStorage.getItem('darkTheme');

if (themIsOn) {
  refs.checkbox.checked = true
  refs.body.classList = theme.darkTheme;
} else {
  refs.checkbox.checked = false
  refs.body.classList = theme.lightTheme;
}


refs.checkbox.addEventListener('change', changeTheme)
