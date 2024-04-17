

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
      $('#toggleOrderSection').click(function() {
        $('#order').toggle();
      });
    });
    
    
    $(document).ready(function() {
      $('#order form').submit(function(event) {
        event.preventDefault(); // Prevent form submission
        
        // Process form data (replace this with your actual form processing logic)
        var formData = {
          name: $('#name').val(),
          email: $('#email').val(),
          number: $('#number').val(),
          person: $('#person').val(),
          date: $('#input_date').val(),
          comment: $('#comment').val()
        };
    
        // Display response popup
        var responseMessage = 'Thank you for your order, ' + formData.name + '!'; // Customize the response message as needed
        $('<div></div>').appendTo('body')
          .html('<div>' + responseMessage + '</div>')
          .dialog({
            modal: true,
            title: 'Order Confirmation',
            zIndex: 10000,
            autoOpen: true,
            width: 'auto',
            resizable: false,
            buttons: {
              Ok: function() {
                $(this).dialog('close');
              }
            },
            close: function(event, ui) {
              $(this).remove();
            }
          });
        
        // Reset form fields
        $('#order form')[0].reset();
      });
    });
    
    



