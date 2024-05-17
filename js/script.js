document.addEventListener('DOMContentLoaded', () => {
    const stars = document.querySelectorAll('.star');
    const ratingValue = document.getElementById('rating-value');

    stars.forEach(star => {
        star.addEventListener('click', () => {
            const value = star.getAttribute('data-value');
            updateRating(value);
        });

        star.addEventListener('keydown', (event) => {
            if (event.key === 'Enter' || event.key === ' ') {
                const value = star.getAttribute('data-value');
                updateRating(value);
            }
        });
    });

    function updateRating(value) {
        stars.forEach(star => {
            star.classList.remove('selected');
            if (star.getAttribute('data-value') <= value) {
                star.classList.add('selected');
            }
        });
    }
});

function toggleGameView() {
    var cards = document.querySelectorAll(".card");
    var table = document.getElementById("gameTable");
       
    if (cards[0].style.display === "none") {
        cards.forEach(function(card) {
            card.style.display = "block";
        });
        table.style.display = "none";
    } else {
        cards.forEach(function(card) {
            card.style.display = "none";
        });
        table.style.display = "table";
    }
}

function toggleSidebar() 
{
    var sidebar = document.getElementById('sidebar');
    if (sidebar.style.left === '0px') {
        sidebar.style.left = '-250px';
    } else {
        sidebar.style.left = '0px';
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}


function toggleDarkMode() 
{
    document.body.classList.toggle("dark-theme");
    var cards = document.querySelectorAll(".card");
    cards.forEach(
        function(card) {
        card.classList.toggle("dark-theme");
    });
    var sidebar = document.querySelector(".sidebar");
    sidebar.classList.toggle("dark-theme");
}

function alertHakk() 
{
alert('Bu sayfa henüz mevcut değil');
}

function addHakkimizdaClickListener() 
{
document.getElementById('hakkimizda').addEventListener('click', alertHakk);
}
addHakkimizdaClickListener();

function toggleBottomSection() {
    var bottomSection = document.getElementById('bottomSection');
    if (bottomSection.style.display === 'none') {
        bottomSection.style.display = 'block';
    } else {
        bottomSection.style.display = 'none';
    }
}

function handleKeyDown(event) {
    if (event.keyCode === 38) {
        window.scrollBy(0, -100);
    }
    else if (event.keyCode === 40) {
        window.scrollBy(0, 100);
    }
}
    document.addEventListener('keydown', handleKeyDown);


function toggleInfoCards() {
    var infoCards = document.querySelectorAll(".info-card");
    infoCards.forEach(function(card) {
        card.classList.toggle("animated");
    });
}

function showTime() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var timeString = "Current time: " + hours + ":" + minutes + ":" + seconds;
    document.getElementById('clock').innerText = timeString;
}

function showDate() {
    var now = new Date();
    var day = now.getDate();
    var month = now.getMonth() + 1;
    var year = now.getFullYear();
    var dateString = "Today's date: " + day + "/" + month + "/" + year;
    document.getElementById('date').innerText = dateString;
}

// Saati göstermek için zamanlayıcı kullanılır
setInterval(showTime, 1000);

// Tarihi göstermek için zamanlayıcı kullanılır
showDate();


// Mouse konumunu gösteren fonksiyon
function showMousePosition(event) {
var mouseX = event.clientX;
var mouseY = event.clientY;
document.getElementById('mousePosition').innerText = 'Mouse Pozisyonu: (' + mouseX + ', ' + mouseY + ')';
}

// Mouse hareketini dinle
document.addEventListener('mousemove', showMousePosition);



$(document).ready(function() {
    var infoCards = $(".info-card");
    });


    
$(document).ready(function() {
    var infoCards = $(".info-card");

    infoCards.each(function() {
        var content = $(this).find("p");
        content.css("display", "none");
    });
});

    var lastScrollTop = 0;
$(window).on("scroll", function() {
    var currentScroll = $(this).scrollTop();
    if (currentScroll > lastScrollTop) {
        $("#scrollToTopButton").removeClass("animated");
    } else {
        $("#scrollToTopButton").addClass("animated");
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});


$(document).ready(function() {
    var infoCards = $(".info-card");

    infoCards.each(function() {
        var arrow = $(this).find(".arrow");
        var content = $(this).find("p");
        arrow.on('click', function() {
            content.toggle();
        });
    });
});



$(document).ready(function() {
    var infoCards = $(".info-card");

    // Add click event listeners to the arrows to toggle the visibility of the information cards' content
    infoCards.each(function() {
        var card = $(this);
        var arrow = card.find(".arrow");
        arrow.on('click', function() {
            card.toggleClass("opened");
        });
    });
});

$(document).ready(function(){
  // Get the exit button and the modal
  var exitButton = $("#exitButton");
  var exitModal = $("#exitModal");
        
  // When the user clicks the exit button, display the modal
  exitButton.click(function() {
    exitModal.css("display", "block");
  });

  // When the user clicks anywhere outside of the modal, close it
$(window).click(function(event) {
    if (event.target == exitModal[0]) {
      exitModal.css("display", "none");
    }
  });
});

$(document).ready(function() {
// Save initial positions of buttons
var button1InitialPosition = $("#button1").position();
var button2InitialPosition = $("#button2").position();

$("#button1").hover(function() {
// Button 1 üzerine gelindiğinde
var button2Position = $("#button2").position();
$("#button2").css({ position: "absolute", top: button1InitialPosition.top, left: button1InitialPosition.left });
$("#button1").css({ position: "absolute", top: button2Position.top, left: button2Position.left });
}, function() {
// Button 1'den ayrıldığında
$("#button1").css({ position: "absolute", top: button1InitialPosition.top, left: button1InitialPosition.left });
$("#button2").css({ position: "absolute", top: button2InitialPosition.top, left: button2InitialPosition.left });
});

$("#button2").hover(function() {
// Button 2 üzerine gelindiğinde
var button1Position = $("#button1").position();
$("#button1").css({ position: "absolute", top: button2InitialPosition.top, left: button2InitialPosition.left });
$("#button2").css({ position: "absolute", top: button1Position.top, left: button1Position.left });
}, function() {
// Button 2'den ayrıldığında
$("#button1").css({ position: "absolute", top: button1InitialPosition.top, left: button1InitialPosition.left });
$("#button2").css({ position: "absolute", top: button2InitialPosition.top, left: button2InitialPosition.left });
});
});

$(document).ready(function() {
    $('body').css('overflow', 'hidden');
  
    setTimeout(function() {
        $('#loading-screen').css('display', 'none');
        $('#content').css('display', 'block');
        
        $('body').css('overflow', '');
    }, 1500);
  });
  