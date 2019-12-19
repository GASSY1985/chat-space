$(function(){
  function buildHTML(message){
    if (message.image == null){
      var html = $(html).append(`</li>`)
    } else {
      var html = $$(html).append(`<div class = 'messages'><img src = '${data.image}' width="56" height="56"}</div></li>`)
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
      $('.textbox').val('');
      $('.form__submit').prop('disabled', false);
    })
  });
});