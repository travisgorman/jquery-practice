(function(){
  var $link = $('link');
  $('button').click( function(){
    var stylesheet = $(this).data( 'file' ) + '.css';
    console.log( stylesheet );

  $link.attr('href', 'css/' + stylesheet ); 

  });
})();
  

// get / set with `attr()`
// if you pass one arg, you are returning the value
// if you pass two args, you are changing the value