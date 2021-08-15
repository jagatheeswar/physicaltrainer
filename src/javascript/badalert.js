function badalert()
{
    setTimeout(function () {  
          
        var el = document.getElementById('badalert')
        el.classList.remove("hideblock")
      }, 0);
      setTimeout(function () {  
          
        var el = document.getElementById('badalert')
        el.classList.add("hideblock")
      }, 3000);
      
}
export default badalert;