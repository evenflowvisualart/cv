
$(document).ready(function(){
$('a.button').click(function(e){
    e.preventDefault();
    var href = this.href;
    $.ajax({
        sync:false,
        async:true,
        url: href,
        type: 'GET',
        data: {},
        dataType: 'html',
        success: function(data){
         $('#content').html(data);
        }
    });
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

