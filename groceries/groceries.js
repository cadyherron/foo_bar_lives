$(document).ready(function() {

  var groceries = ["milk", "eggs", "butter"];


  // add form
  var header = $('header')

  form = "<form>Grocery item:<br><input type='text' name='item'><br>Quantity:<br><input type='text' name='quantity'><br><input type='submit' value='Submit'></form>"

  header.after(form);


  // add ul of grocery items
  $('form').after("<div class='list'><ul></ul></div>")
  $('.list').after("<ul></ul>")
  $ul = $('ul')

  for (var i = 0; i < groceries.length; i++) {
    $ul.appendTo('<li>'+ groceries[i] + "</li>")
  }





//   groceries.each( function(index, element) {

//   })

// $( 'p' ).each(function( index, element ) {
//         $( element ).addClass("lets-boogie");
//       });



})