const themeSwitcher = () => {

  window.addEventListener('load', function(){
    document.documentElement.setAttribute('data-theme', 'light');
  });

  document.querySelector('#setMode').addEventListener('change', function(event){
      if(event.target.checked){
        document.documentElement.setAttribute('data-theme', 'dark');
      } else {
        document.documentElement.setAttribute('data-theme', 'light');
      }
  })
}

export default themeSwitcher
