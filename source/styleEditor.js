$(document).ready(function(){
  $( "#style_editor" ).on('submit', function(event) {
    var selector = $( ".css-selector-input" ).val();
    var property = $( ".css-property-input" ).val();
    var value = $( ".css-value-input" ).val();
    $(selector).css(property, value);
    event.preventDefault();
  });
});
