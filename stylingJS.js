$('.options:nth-child(odd)').css('background-color','gray');
$('.options:nth-child(even)').css('background-color','lightgray');

$('options:first-child').css('opacity', '.5');
$('options:first-child').on('focus', clearFirstOption);

$('.username').css('border-color','black');
$('.buttons').css('border','none');
$('.buttons2').css('border','none');


$('input').on('error',invalidSubmittion);

function invalidSubmittion() {
$('input').css('border-color','red');
}


$('select,textarea').focus(function(){
  $(this).removeAttr('placeholder');
});

function clearFirstOption() {
  $('options:first-child').css('background-color', 'white');
  $('options:first-child').css('color', 'white');
}

$('h1').css('text-decoration', 'underline');