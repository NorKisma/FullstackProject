
    function toggleDarkMode() {
      const body = $("body");
      body.toggleClass("dark-mode");
  
      const isDarkMode = body.hasClass("dark-mode");
      localStorage.setItem("darkMode", isDarkMode);
  }
  
  $(document).ready(function() {
      const isDarkMode = localStorage.getItem("darkMode") === "true";
      if (isDarkMode) {
          $("body").addClass("dark-mode");
      }
  });
  
    $(document).ready(function() {
        // Show the popup form when the button is clicked
        $('#toggleOrder').click(function() {
          $('#orderDialog').show();
        });
       
        $('.close').click(function() {
          $('#orderDialog').hide();
        });
        
        $('#orderForm').submit(function(event) {
          event.preventDefault(); 
       
          $('#responseForm').show();
          
        });
      });
    
      $(document).ready(function() {
        // Close the response form when the close button is clicked
        $('.close-response').click(function() {
            $('#responseForm').hide();
            $('#orderDialog').hide();
          $('#orderForm')[0].reset();
            
        });
    });
    

    $(document).ready(function() {

      function showCreditCardPopup() {
        $('#creditCardPopup').show();
      }
    
      function hideCreditCardPopup() {
        $('#creditCardPopup').hide();
      }
    
     $('#showCreditCardForm, #showCreditCardForm8, #showCreditCardForm7, #showCreditCardForm6, #showCreditCardForm5, #showCreditCardForm4, #showCreditCardForm3, #showCreditCardForm2, #showCreditCardForm1').click(showCreditCardPopup);
     
     $('#creditCardOrderForm').submit(function(event) {
      event.preventDefault(); 
      // Display the response form
      $('#responseForm').show();
    
     
    });
    
      $('.close1').click(hideCreditCardPopup);
    
     
      
    });
    $(document).ready(function() {
      // Close the response form when the close button is clicked
      $('.close-response').click(function() {
        $('#responseForm').hide();
        $('#creditCardOrderForm')[0].reset();
        $('#creditCardPopup').hide();
            
          
      });
    });



  

   // Select the input field and feedback element
   $(document).ready(function() {
    const name = $('#name');
    const feedback = $('.feedback');

    name.on('input', function() {
        if (name.val() === '') {
            feedback.text('Please enter FullName');
            feedback.removeClass('valid invalid');
        } else {
            if (name.val().length >= 12) {
                feedback.text('Valid input');
                feedback.removeClass('invalid').addClass('valid');
            } else {
                feedback.text('Input too short');
                feedback.removeClass('valid').addClass('invalid');
            }
        }
    });
});
// Remove any non-numeric characters
$(document).ready(function() {
  $('#cardNumber').on('input', function() {
      var cardNumber = $(this).val();
      
      cardNumber = cardNumber.replace(/\D/g,'');
      $(this).val(cardNumber);
  });
});


$(document).ready(function() {
  $('#cvv').on('input', function() {
      var cvv = $(this).val();
      
      cvv = cvv.replace(/\D/g,'');
      // Limit input to 4 digits
      if (cvv.length > 4) {
          cvv = cvv.slice(0, 4);
      }
      $(this).val(cvv);
  });
});




$(document).ready(function() {
  const number = $('#number');
  const feedback = $('#backnumber');

  number.on('input', function() {
      if (number.val() === '') {
          feedback.text('Please enter number');
          feedback.removeClass('valid invalid');
      } else {
          if (number.val().length >= 9) {
              feedback.text('Valid input');
              feedback.removeClass('invalid').addClass('valid');
          } else {
              feedback.text('Input too short');
              feedback.removeClass('valid').addClass('invalid');
          }
      }
  });
});


      
$(document).ready(function() {
  $('#Read button').click(function() {
      var $btn = $(this);
      var $content = $btn.closest('.col-md-6').find('.content');
      
      $content.toggleClass('collapsed');
      if ($content.hasClass('collapsed')) {
          $btn.text('Read More...');
      } else {
          $btn.text('Read Less');
      }
  });
});


// send email$(document).ready(function() {
    $('#contactForm').submit(function(e) {
      e.preventDefault(); // Prevent form submission
      var formData = $(this).serialize(); // Serialize form data
      $.ajax({
          type: 'POST',
          url: 'end_email.php', // Path to your PHP script
          data: formData,
          success: function(response) {
              alert(response); // Show success message
          },
          error: function(xhr, status, error) {
              console.error(xhr.responseText); // Log error message
              alert('An error occurred while sending your message. Please try again later.');
          }
      });
  });
















