const themeSwitcher = () => {
  const setMode = document.getElementById("setMode");
  // let checkThemes = document.querySelector('input[name="mode"]:checked');

  // setMode.checked = document.documentElement.setAttribute('data-theme', 'dark');
  // setMode.checked != document.documentElement.setAttribute('data-theme', 'light');




  setMode.addEventListener("click", () => {
    document.documentElement.setAttribute('data-theme', 'dark');
    setMode.addEventListener("click", () => {
      document.documentElement.setAttribute('data-theme', 'light');
    })    
  })


}

export default themeSwitcher
