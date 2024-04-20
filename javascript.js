

    // Function to toggle dark mode
    function toggleDarkMode() {
        const body = document.body;
        body.classList.toggle("dark-mode");

  
        const isDarkMode = body.classList.contains("dark-mode");
        localStorage.setItem("darkMode", isDarkMode);
    }

    const isDarkMode = localStorage.getItem("darkMode") === "true";
    if (isDarkMode) {
        document.body.classList.add("dark-mode");
    }




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
      // Show the credit card popup form when the button is clicked
      $('#showCreditCardForm').click(function() {
        $('#creditCardPopup').show();
      });
      $('.close1').click(function() {
        $('#creditCardPopup').hide();
      });
    
      // Show the credit card popup form when the button is clicked
      $('#showCreditCardForm8').click(function() {
        $('#creditCardPopup').show();
      });
      $('.close1').click(function() {
        $('#creditCardPopup').hide();
      });
    
      // Show the credit card popup form when the button is clicked
      $('#showCreditCardForm7').click(function() {
        $('#creditCardPopup').show();
      });
      $('.close1').click(function() {
        $('#creditCardPopup').hide();
      });
    
      // Show the credit card popup form when the button is clicked
      $('#showCreditCardForm6').click(function() {
        $('#creditCardPopup').show();
      });
      $('.close1').click(function() {
        $('#creditCardPopup').hide();
      });
    
      // Show the credit card popup form when the button is clicked
      $('#showCreditCardForm5').click(function() {
        $('#creditCardPopup').show();
      });
      $('.close1').click(function() {
        $('#creditCardPopup').hide();
      });
    
      // Show the credit card popup form when the button is clicked
      $('#showCreditCardForm4').click(function() {
        $('#creditCardPopup').show();
      });
      $('.close1').click(function() {
        $('#creditCardPopup').hide();
      });
    
      // Show the credit card popup form when the button is clicked
      $('#showCreditCardForm3').click(function() {
        $('#creditCardPopup').show();
      });
      $('.close1').click(function() {
        $('#creditCardPopup').hide();
      });
    
      // Show the credit card popup form when the button is clicked
      $('#showCreditCardForm2').click(function() {
        $('#creditCardPopup').show();
      });
      $('.close1').click(function() {
        $('#creditCardPopup').hide();
      });
    
      // Show the credit card popup form when the button is clicked
      $('#showCreditCardForm1').click(function() {
        $('#creditCardPopup').show();
      });
      $('.close1').click(function() {
        $('#creditCardPopup').hide();
      });
    });
    



  

   
      
















