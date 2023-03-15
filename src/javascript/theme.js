const themeSwitcher = () => {
  // const setMode = document.getElementById("setMode");
  let checkThemes = document.querySelector('input[name="mode"]:checked');

  if(checkThemes) {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
  }
}

export default themeSwitcher
