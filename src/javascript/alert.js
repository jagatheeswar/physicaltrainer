function alert()
{
    setTimeout(function () {  
          
        var el = document.getElementById('alert')
        el.classList.remove("hideblock")
      }, 0);
      setTimeout(function () {  
          
        var el = document.getElementById('alert')
        el.classList.add("hideblock")
      }, 3000);
      
}
export default alert;