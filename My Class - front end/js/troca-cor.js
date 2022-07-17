function trocaCor(elem){
  document.getElementById("ola").style.backgroundColor = window.getComputedStyle( elem ,null).getPropertyValue('background-color');
}