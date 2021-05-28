function myMove1() {
  var elem = document.getElementById("animate1");   
  var posTop1 = 0;
  var posLeft = 0;
  var id1 = setInterval(frame, 5);
  function frame() {
	  posTop1++;
	  posLeft++;
	  elem.style.top = posTop1 + "px"; 
	  elem.style.left = posLeft + "px"; 
	  if ((posTop1 == 350) && (posLeft == 350))
		  clearInterval(id1);
  }
}

function myMove2() {
  var elem2 = document.getElementById("animate2");   
  var posTop2 = 0;
  var posRight2 = 0;
  var id2 = setInterval(frame, 5);
  function frame() {
	  posTop2++;
	  posRight2++;
	  elem2.style.top = posTop2 + "px"; 
	  elem2.style.right = posRight2 + "px"; 
	  if ((posTop2 == 350) && (posRight2 == 350))
		  clearInterval(id2);
  }
}
