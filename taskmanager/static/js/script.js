$(document).ready(function(){
  // Init Navbar
  $('.sidenav').sidenav();

  // datepicker init
  $('.datepicker').datepicker({
    format: "dd mmmm, yyyy",
    i18n: {done: "Select"}
  });

  // dropdown init
  $(document).ready(function(){
    $('select').formSelect();
  });

  // collapsable init
  $(document).ready(function(){
    $('.collapsible').collapsible();
  });
});