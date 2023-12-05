document.addEventListener('DOMContentLoaded', function () {
    var textWrapper = document.querySelector('.ml9 .letters');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    var textWrapper2 = document.querySelector('.ml9 .letters-line2');
    textWrapper2.innerHTML = textWrapper2.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    
    anime.timeline()
      .add({
        targets: '.ml9 .letter',
        scale: [0, 1],
        duration: 1500,
        elasticity: 600,
        delay: (el, i) => 45 * (i+1)
      })

      .add({
        targets: '.ml9 .letter-line2', 
        scale: [0, 1],
        duration: 1500,
        elasticity: 600,
        delay: (el, i) => 45 * (i + 1)
      });
    });


          