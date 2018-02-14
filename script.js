
$(document).ready(function(){
$('a.button').click(function(e){
    e.preventDefault();
    var href = this.href;
    $.get( href, function( data ) {
      $('#content').html(data);
      console.log("success" );
    })
});

    
 $('body').on('click','.one',function(){
    $('.tech p.checked').removeClass('checked');
    $('.basic p').addClass('checked');
     });
 $('body').on('click','.two',function(){
    $('.checked').removeClass('checked');
    $('.core p').addClass('checked');
});
    
  $('#cv').click(function(e){
    e.preventDefault();
    window.location = 'MarinaBubnicCV.pdf';
});
    
    
});

