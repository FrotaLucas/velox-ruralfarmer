window.addEventListener("load", function(
) {

  var buttonOne = document.getElementById("one")
  var buttonTwo = document.getElementById("two");
  var buttonThree = document.getElementById("three");
  var buttonFour = document.getElementById("four");
  var cardTitle = document.getElementById("card-benefit-title");
  var cardContent = document.getElementById("card-benefit-content");

  buttonOne.addEventListener("click", function() {

    const curBackgroundColorOne = window.getComputedStyle( buttonOne,null).getPropertyValue('background-color');
    if (curBackgroundColorOne === 'rgb(255, 255, 255)'){
      buttonOne.className = buttonOne.className.replace('white-circle','black-circle');
      cardTitle.textContent = "Competitive Rates";
      cardContent.textContent = "With the support of the Velox team, rural producers will have access to advantageous rates, especially compared to those practiced in operations among participants in the agricultural sector itself.";

      buttonTwo.className = buttonTwo.className.replace('black-circle', 'white-circle');
      buttonThree.className = buttonThree.className.replace('black-circle', 'white-circle');
      buttonFour.className = buttonFour.className.replace('black-circle', 'white-circle');
    }
  
  })

  buttonTwo.addEventListener("click", function() {

    const curBackgroundColorTwo = window.getComputedStyle( buttonTwo,null).getPropertyValue('background-color');
    if ( curBackgroundColorTwo === 'rgb(255, 255, 255)'){ 
      buttonTwo.className = buttonTwo.className.replace('white-circle','black-circle');
      cardTitle.textContent = "Production Optimization";
      cardContent.textContent = "Focus on your main core activity, and we guarantee the best internet that will boost your production."

      buttonOne.className = buttonOne.className.replace('black-circle', 'white-circle');    
      buttonThree.className = buttonThree.className.replace('black-circle', 'white-circle');
      buttonFour.className = buttonFour.className.replace('black-circle', 'white-circle');
    
  } 
  })

  buttonThree.addEventListener("click", function(){
    const curBackgroundColorThree = window.getComputedStyle( buttonThree,null).getPropertyValue('background-color');
    if (curBackgroundColorThree === 'rgb(255, 255, 255)'){
      buttonThree.className = buttonThree.className.replace('white-circle','black-circle');
      cardTitle.textContent = "Quick release of funds in the account";
      cardContent.textContent = "Count on a much more agile internet granting process compared to other market players."

      buttonOne.className = buttonOne.className.replace('black-circle', 'white-circle');    
      buttonTwo.className = buttonTwo.className.replace('black-circle', 'white-circle');
      buttonFour.className = buttonFour.className.replace('black-circle', 'white-circle');
     
    }
  })
  
  buttonFour.addEventListener("click", function(){
    const curBackgroundColorFour = window.getComputedStyle(buttonFour, null).getPropertyValue('background-color');
    if (curBackgroundColorFour ===  'rgb(255, 255, 255)'){
      buttonFour.className = buttonFour.className.replace('white-circle', 'black-circle');
      cardTitle.textContent = "Soybeans and corn - soon other crops";
      cardContent.textContent = "No matter which agricultural property you are on, our services will reach you with the best quality.";
      
      buttonOne.className = buttonOne.className.replace('black-circle', 'white-circle');
      buttonTwo.className = buttonTwo.className.replace('black-circle', 'white-circle');
      buttonThree.className = buttonThree.className.replace('black-circle', 'white-circle');

    }

  })

})

