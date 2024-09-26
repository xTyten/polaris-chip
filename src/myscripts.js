// Clone card
document.querySelector('#duplicate').addEventListener('click', function(event) {
  var cardContainer = document.getElementById("card-container").childElementCount;
  const newCard = document.querySelector('#card-container my-card').cloneNode(true);
  if (cardContainer < 10) {
    document.querySelector('#card-container').appendChild(newCard);
  }
});

// Change title
document.querySelector('#change-title').addEventListener('click', function(event) {
  document.querySelector('#card1').setAttribute("title", "jolly little alien");
});

// Change image
document.querySelector('#change-img').addEventListener('click', function(event) {
  document.querySelector('#card1').setAttribute("image", "https://pbs.twimg.com/media/GX2jnzzXIAQjU3C?format=png&name=240x240");
});

// Change background using css class
document.querySelector('#change-bg').addEventListener('click', function(event) {
  console.log("Change background button clicked");
  var nodes = document.querySelectorAll('#card-container my-card');

  // Not stateful
  /*
  nodes.forEach(node => {
    node.style.setProperty('--bgColor', '#fff');
  })
  */
  for (let i = 0; i < nodes.length; i++) {
    //console.log(nodes[i].id);
    //nodes[i].classList.add("#" + nodes[i].id + ' white-bg');
    if(nodes[i].classList.contains('white-bg')){
      nodes[i].classList.remove('white-bg');
    } else {
      nodes[i].classList.add('white-bg');
    }
  }

});

// Delete last card
document.querySelector('#delete-card').addEventListener('click', function(event) {
  var cardContainer = document.getElementById("card-container").childElementCount;
  if (cardContainer > 1) {
    document.querySelector('my-card').remove();
  }
});