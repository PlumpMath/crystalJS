$(document).ready(function() {

  $('form').on('click', function() {

    if ($('.name').val() != '' && $('.password').val() != '') {
      console.log( "name: " + $('.name').val() );
      console.log( "password: " + $('.password').val() );
    } else {
      console.log('Your form is incomplete.');
    }

  });

});
