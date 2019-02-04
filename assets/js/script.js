$(function(){
  $(document).ready(function(){
    $('#lastName , #firstName').on('focus', function(){
      $(this).css('border','1px solid green');
      //put the element who have the focus in green
    });
    $('#lastName , #firstName').on('blur', function(){
//put the element without focus in red
      $(this).css('border','1px solid red');
    });
  });
});
