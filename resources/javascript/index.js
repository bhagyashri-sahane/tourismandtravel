//let msg = alert("Thank You for visiting");
//msg=document.write;

/*let item = document.getElementsById('heading3')
item=document.write;
function showImage() {
    item.style.backgroundColor = 'black';
  }
  item.addEventListener('onClick',showImage)

  let suc = document.getElementById('success');
  function show() {
    suc=alert('successfully added');
    suc.document.write;
  }
  suc.addEventListener('onClick',show)*/

  function displayMessage() {
    var messageElement = document.getElementById('message');
    messageElement.textContent = 'successfully added';
  }
  /*function displaycontent(){
    var content = document.getElementById('text-overlay')
    content.textContent = 'A recipe has no soul. You as the cook, must bring soul to the receipe.'
  }
  content.addEventListner('mouseover',displaycontent)*/
  /*function displayContent() {
    var content = document.getElementsByClassName('text-overlay');
    content.textContent = 'A recipe has no soul. You as the cook, must bring soul to the recipe.';
  }
  
  var textOverlay = document.getElementsByClassName('text-overlay');
  textOverlay.addEventListener('mouseover', displayContent);*/
  function displayContent() {
    var elements = document.getElementsByClassName('text-overlay');
    for (var i = 0; i < elements.length; i++) {
      elements[i].textContent = 'A recipe has no soul. You as the cook, must bring soul to the recipe.';
    }
  }
  
  var textOverlays = document.getElementsByClassName('text-overlay');
  for (var i = 0; i < textOverlays.length; i++) {
    textOverlays[i].addEventListener('mouseover', displayContent);
  }
