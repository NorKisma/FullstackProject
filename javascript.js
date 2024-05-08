
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
    
/*
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
*/


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





//kkkk
function updateTotal() {
  let total = 0;
  $('.cartItem').each(function() {
    let itemPrice = parseFloat($(this).find('.itemDetails p').text().substring(1));
    let quantity = parseInt($(this).find('.quantityItem').text());
    total += itemPrice * quantity;
  });
  $('.total').text('$' + total.toFixed(2)); // Update total in the cart
}


$(document).ready(function() {
  let openShopping = $('.shopping');
  let closeShopping = $('.closeShopping');
  let body = $('body');

  function openCart() {
    body.addClass('active');
  }

  function closeCart() {
    body.removeClass('active');
  }

  openShopping.on('click', openCart);
  closeShopping.on('click', closeCart);

  $('.fa-credit-card').on('click', function() {
    let $card = $(this).closest('.card');
    let itemName = $card.find('h3').text();
    let itemPrice = parseFloat($card.find('p').text().substring(1));
    let itemImage = $card.find('img').attr('src');
    addToCart(itemName, itemPrice, itemImage);
  });

  function addToCart(itemName, itemPrice, itemImage) {
    let $existingItem = $('.listCard').find(`.itemDetails h4:contains('${itemName}')`);
    if ($existingItem.length > 0) {
      alert(`"${itemName}" is already in the cart.`);
      return; 
    }

    let currentQuantity = parseInt($('.quantity').text());
    $('.quantity').text(currentQuantity + 1);
    let totalPrice = parseFloat($('.total').text().substring(1));
    totalPrice += itemPrice;
    $('.total').text('$' + totalPrice.toFixed(0)); 
    
    $('.listCard').append(`
      <li class="cartItem">
        <div class="itemImage">
          <img src="${itemImage}" alt="${itemName}">
        </div>
        <div class="itemDetails">
          <h4>${itemName}</h4>
          <p>$${itemPrice.toFixed(2)}</p> 
          <button class="decrease">-</button>
          <span class="quantityItem">1</span>
          <button class="increase">+</button>
        </div>
      </li>
    `);
  }
  $(document).on('click', '.decrease', function() {
    let $itemDetails = $(this).closest('.itemDetails');
    let $quantityItem = $itemDetails.find('.quantityItem');
    let currentQuantity = parseInt($quantityItem.text());
    if (currentQuantity > 1) {
        $quantityItem.text(currentQuantity - 1);
        let $cartItem = $(this).closest('.cartItem');
        let itemPrice = parseFloat($cartItem.find('p').text().substring(1));
        let totalPrice = parseFloat($('.total').text().substring(1));
        totalPrice -= itemPrice;
        $('.total').text('$' + totalPrice.toFixed(0));
        

    } else {
        // If quantity is going to be 0, remove the entire cart item
        let $cartItem = $(this).closest('.cartItem');
        let itemPrice = parseFloat($cartItem.find('p').text().substring(1));
        let totalPrice = parseFloat($('.total').text().substring(1));
        totalPrice -= itemPrice;
        $('.total').text('$' - totalPrice.toFixed(2));
        $cartItem.remove();  
        
        // Decrease cart count
        let currentQuantity = parseInt($('.quantity').text());
        $('.quantity').text(currentQuantity - 1);
        
        updateTotal();
    }
});


  $(document).on('click', '.increase', function() {
    let $itemDetails = $(this).closest('.itemDetails');
    let $quantityItem = $itemDetails.find('.quantityItem');
    let currentQuantity = parseInt($quantityItem.text());
    $quantityItem.text(currentQuantity + 1);
    let $cartItem = $(this).closest('.cartItem');
    let itemPrice = parseFloat($cartItem.find('p').text().substring(1));
    let totalPrice = parseFloat($('.total').text().substring(1));
    totalPrice += itemPrice;
    $('.total').text('$' + totalPrice.toFixed(0)); 
   let $itemPriceElement = $cartItem.find('p');
  $itemPriceElement.text('$' + (itemPrice * (currentQuantity + 1)).toFixed(0)); 
  updateSummaryPrice();
  });
  updateTotal();
});

$(document).ready(function() {
  $('.submitCartButton').on('click', function() {
      $('#creditCardPopup').show(); 
      
      
  });

});


$(document).ready(function() {
  $('#addToCartBtn').on('click', function() {
    $('#creditCardPopup').hide();
    $('#responseForm').show();
    
    
    $('#cardholderName').val('');
    $('#cardNumber').val('');
    $('#expiryDate').val('');
    $('#cvv').val('');
    
    
    $('.listCard').empty();
    
   
    $('.total').text('$0.00');
    $('.quantity').text('0');
  });
});




