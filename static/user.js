$(function(){ // function call when DOM is ready, omit when using PHP $page->jQueryCode .= '…'; 

  $('.simple_blog_gadget ul ul').hide(); // initially hide all but the first level ULs 

  $('.simple_blog_gadget_year')
    .css('cursor', 'pointer')   // will be clickable, so let's change the cursor to pointer 
    .on('click', function(){    // click handler
      $(this).siblings('ul').slideToggle();
    })
    .find('.blog_gadget_link')
      .off('click') /* this will unbind the original click handler set by SimpleBlog, 
                     * will only work if this function is called later than SimpleBlog's
                     */
      .on('click', function(){
        $(this).siblings('ul').slideToggle();
      });

}); // closing of DOM ready function - from https://www.typesettercms.com/Forum?show=t2762&page=1#post_11526

/* anchor : More Blog Entries */
$('a[title^="More Blog Entries"]').css("font-size", "15px").css("margin-bottom", "5px");
