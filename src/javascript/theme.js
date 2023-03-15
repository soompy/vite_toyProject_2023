const themeSwitcher = () => {
  let modeText = document.querySelector(".mode-text");

  window.addEventListener('load', function(){
    document.documentElement.setAttribute('data-theme', 'light');
    modeText.innerHTML = "라이트 <br> 모드"
  });

  document.querySelector('#setMode').addEventListener('change', function(event){
      if(event.target.checked){
        document.documentElement.setAttribute('data-theme', 'dark');
        modeText.innerHTML = "다크 <br> 모드"
      } else {
        document.documentElement.setAttribute('data-theme', 'light');
        modeText.innerHTML = "라이트 <br> 모드"
      }
  })
}

export default themeSwitcher
