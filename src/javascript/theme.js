const themeSwitcher = () => {
  let modeText = document.querySelector(".mode-text");

  window.addEventListener('load', function(){
    document.documentElement.setAttribute('data-theme', 'light');
    modeText.innerHTML = "Theme <br> Light"
  });

  document.querySelector('#setMode').addEventListener('change', function(event){
      if(event.target.checked){
        document.documentElement.setAttribute('data-theme', 'dark');
        modeText.innerHTML = "Theme <br> Dark"
      } else {
        document.documentElement.setAttribute('data-theme', 'light');
        modeText.innerHTML = "Theme <br> Light"
      }
  })
}

export default themeSwitcher
