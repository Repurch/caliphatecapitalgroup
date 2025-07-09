(function ($) {
 "use strict";
$(document).ready(function(){
	  
		/*
		Jquery Mobile Menu
		============================*/
		$('#main-menu').meanmenu({
			meanScreenWidth: "767",
			meanMenuContainer: '.mobile-nav-menu',
		});		
		/*
		Team Section JS
		============================*/ 	
		  $(".all-team-member").owlCarousel({
			autoplay: true, 
			pagination:false,
			nav:false, 
			dots:true, 
			margin:30,
			items :4,
			navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				768:{
					items:2
				},				
				992:{
					items:4
				}
			}
		  }); 		
		/*
		Testimonial Crousel
		============================*/ 	
		  $(".all-testimonial").owlCarousel({
			autoplay: true, 
			pagination:false,
			nav:false, 
			dots:true,
			items :3,
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				768:{
					items:2
				},				
				992:{
					items:2
				},
				1000:{
					items:3
				}
			}			
		  }); 			
		/*
		Testimonial V3 Crousel
		============================*/ 	
		  $(".all-testimonial-v3").owlCarousel({
			autoplay: true, 
			pagination:false,
			nav:true, 
			navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
			dots:false, 
			items :3,
			responsive:{
				0:{
					items:1
				},
				600:{
					items:2
				},
				768:{
					items:2
				},				
				1000:{
					items:3
				}
			}			
		  }); 		
	
		/*
		Slider Crousel
		============================*/ 
		$(".all-slide").owlCarousel({
            items: 1,
            nav: true,
            dots: true,
            autoplay: true,			
            loop: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            mouseDrag: false,
            touchDrag: false,
        });
        
        $(".all-slide").on("translate.owl.carousel", function(){	
            $(".slider-text h1").removeClass("animated fadeInUp").css("opacity", "0");
            $(".slider-text p").removeClass("animated fadeInDown").css("opacity", "0");
            $(".slider-text ul").removeClass("animated fadeInDown").css("opacity", "0");
        });
        
        $(".all-slide").on("translated.owl.carousel", function(){
            $(".slider-text h1").addClass("animated fadeInUp").css("opacity", "1");
            $(".slider-text p").addClass("animated fadeInDown").css("opacity", "1");
            $(".slider-text ul").addClass("animated fadeInDown").css("opacity", "1");
        });	
		
		/*
		Patner Crousel
		============================*/ 	
		  $(".all-patner").owlCarousel({
			autoplay: true, 
			pagination:false,
			nav:false, 
			dots:true, 
			items :5,
			navText: ['<i class="icofont-long-arrow-left"></i>', '<i class="icofont-long-arrow-right"></i>'],
			responsive:{
				0:{
					items:2
				},
				600:{
					items:3
				},
				768:{
					items:4
				},				
				992:{
					items:4
				},				
				1000:{
					items:5
				}
			}
		  }); 
		/*
		scrollUp
		============================*/	
		$.scrollUp({
			scrollText: '<i class="fa fa-long-arrow-up"></i>',
			easingType: 'linear',
			scrollSpeed: 900,
			animation: 'fade'
		});	
		/*
		Counter Js
		============================*/ 
        $('.counter').counterUp({
            delay: 10,
            time: 1000			
        });
		
		/*
		Stikey Js
		============================*/ 
  		(function () {
			var nav = $('.hd-sec');
			var scrolled = false;
			$(window).scroll(function () {
				if (120 < $(window).scrollTop() && !scrolled) {
					nav.addClass('sticky_menu animated fadeInDown').animate({ 'margin-top': '0px' });
					scrolled = true;
				}
				if (120 > $(window).scrollTop() && scrolled) {
					nav.removeClass('sticky_menu animated fadeInDown').css('margin-top', '0px');
					scrolled = false;
				}
			});
		}());
/*
		Google Map
		============================*/
            // When the window has finished loading create our google map below
            google.maps.event.addDomListener(window, 'load', init);
        
            function init() {
                // Basic options for a simple Google Map
                // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
                var mapOptions = {
                    // How zoomed in you want the map to start at (always required)
                    zoom: 11,

                    // The latitude and longitude to center the map (always required)
                    center: new google.maps.LatLng(55.378052, -3.435973), // New York

                    // How you would like to style the map. 
                    // This is where you would paste any style found on Snazzy Maps.
                    styles: [{"featureType":"administrative.country","elementType":"geometry","stylers":[{"visibility":"simplified"},{"hue":"#ff0000"}]}]
                };

                // Get the HTML DOM element that will contain your map 
                // We are using a div with id="map" seen below in the <body>
                var mapElement = document.getElementById('gmap');

                // Create the Google Map using our element and options defined above
                var map = new google.maps.Map(mapElement, mapOptions);

                // Let's also add a marker while we're at it
                var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(55.378052, -3.435973),
                    map: map,
                    title: 'UK!'
                });
            }				
		/*
		Magnific Popup
		============================*/ 		
        $('.gallery-photo').magnificPopup({
            type: 'image',
            gallery: {
              enabled: true
            },
        });	 

		/*
		Project Gallery Js
		============================*/	
		jQuery('.gallery-container').imagesLoaded( function() {			
			$(".gallery-container").isotope({
			itemSelector: '.filtr-item',
			layoutMode: 'fitRows',
			});
			$("ul.simplefilter li").on("click",function(){
			$("ul.simplefilter li").removeClass("active");
			$(this).addClass("active");
			 
			var selector = $(this).attr('data-filter');
			$(".gallery-container").isotope({
			filter: selector,
			animationOptions: {
			duration: 750,
			easing: 'linear',
			queue: false,
			}
			});
			return false;
			});
		});	
		/*
		Preeloader
		============================*/
		$(window).on("load", function() {
			$('#preloader').fadeOut();
			$('#preloader-status').delay(200).fadeOut('slow');
			$('body').delay(200).css({'overflow-x':'hidden'});
		});

		

		
		
	});	
})(jQuery);


contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // No auth required for submitting messages (auth == null rule)
    database.ref('messages').push({
        name: name,
        email: email,
        subject: subject,
        message: message,
        timestamp: firebase.database.ServerValue.TIMESTAMP
    }).then(() => {
        alert('Message sent successfully!');
        contactForm.reset();
    }).catch((error) => {
        alert('Error sending message: ' + error.message);
    });
});






document.getElementById('registerForm').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('registerConfirmPassword').value;
    
    if (password !== confirmPassword) {
        alert("Passwords don't match!");
        return;
    }
    
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Save additional user info (auth.uid == $uid rule allows this)
            return firebase.database().ref('users/' + userCredential.user.uid).set({
                name: name,
                email: email
            });
        })
        .then(() => {
            alert('Registration successful!');
            registerForm.reset();
            registerForm.style.display = 'none';
            document.querySelector('.auth-toggle').style.display = 'block';
            document.querySelector('#contactForm').style.display = 'block';
        })
        .catch((error) => {
            alert('Registration error: ' + error.message);
        });
});





// Check if user is admin before showing messages
function loadMessages() {
    const userId = firebase.auth().currentUser.uid;
    database.ref('admins/' + userId).once('value')
        .then((snapshot) => {
            if (snapshot.exists()) {
                // User is admin, show messages
                database.ref('messages').orderByChild('timestamp').on('value', (snapshot) => {
                    const messagesList = document.getElementById('messagesList');
                    messagesList.innerHTML = '';
                    
                    snapshot.forEach((childSnapshot) => {
                        const message = childSnapshot.val();
                        const messageDiv = document.createElement('div');
                        messageDiv.className = 'message-item';
                        messageDiv.innerHTML = `
                            <h4>${message.subject}</h4>
                            <p><strong>From:</strong> ${message.name} (${message.email})</p>
                            <p>${message.message}</p>
                            <small>${new Date(message.timestamp).toLocaleString()}</small>
                            <hr>
                        `;
                        messagesList.appendChild(messageDiv);
                    });
                });
            } else {
                alert('You do not have admin privileges');
            }
        });
}

// Call this when admin panel loads
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        loadMessages();
    }
});


function makeAdmin(email) {
    // First find the user by email
    firebase.auth().getUserByEmail(email)
        .then((userRecord) => {
            // Add to admins list (only current admins can do this)
            return database.ref('admins/' + userRecord.uid).set(true);
        })
        .then(() => {
            console.log('Successfully made user admin');
        })
        .catch((error) => {
            console.error('Error making admin:', error);
        });
}
