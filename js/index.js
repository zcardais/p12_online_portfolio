


$(document).ready(function(){
  inject_markup();
});

function inject_markup() {

  $('.expanding_panel').each(function(){
    var link_text = $(this).attr('data-link-text');
    var content = $(this).html();

    $(this).html('<div class="expanding_panel_content_container" style="height:0px;"><div class="expanding_panel_content">'+content+'</div></div>');

    $(this).append('<div class="expanding_panel_trigger">'+link_text+'</div>');
  });

  activate_panels();

}

function activate_panels(){
  $('.expanding_panel .expanding_panel_trigger').on('click',function(){

    var new_height = null;

    var selected_panel = $(this).closest('.expanding_panel');
    var selected_content = selected_panel.find('.expanding_panel_content_container');

    selected_panel.toggleClass('open');

    if ( selected_panel.hasClass('open') ){
      new_height = selected_panel.find('.expanding_panel_content').outerHeight(true);
    }else {
      new_height = 0;
    }

    selected_content.animate({'height':new_height+'px'},1000,function(){
      if ( new_height != 0 ) {
        $(this).removeAttr('style');
      }
    });

  });
}
