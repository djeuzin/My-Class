function openForm(){
    document.getElementById("myForm").style.animation = "up 400ms";
    document.getElementById("myForm").style.display = "inline-block";
}
function closeForm(){
    document.getElementById("myForm").style.display = "none";
}
function addPlano(){
    document.getElementById("plano").style.display = "inline-block";
}
function closePlano(){
    document.getElementById("plano").style.display = "none";
}
var $input    = document.getElementById('file'),
    $fileName = document.getElementById('caminho');

$input.addEventListener('change', function(){
  $fileName.textContent = this.value;
});