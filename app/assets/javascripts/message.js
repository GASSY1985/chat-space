$(function(){
  function buildHTML(message){
    if (message.image == null){
      var html = $(html).append(`</li>`)
    } else {
      var html = $(html).append(`<div class = 'messages'><img src = '${message.image}'}</div></li>`)
      console.log("good!")
    }
    return html;
  }
  $('.new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: 'POST',
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.messages').append(html);
      $('.messages').animate({ scrollTop: $('.messages')[0].scrollHeight });
      $('.textbox').val('');
      $('.form__submit').prop('disabled', false);
    })
  });
});