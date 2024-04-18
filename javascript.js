

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
    



  

   
      
















