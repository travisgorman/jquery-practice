(function(){
  var $link = $('link');
  $('button').on( 'click', function(){
    var stylesheet = $(this).data( 'file' ) + '.css';
    console.log( stylesheet );

  $link.attr('href', 'css/' + stylesheet ); 

  });
})();
  
  

// get / set with `attr()`
// if you pass one arg, you are returning the value
// if you pass two args, you are changing the value


// (function(){

//   var link = $('link');
//   $('button').on( 'click', function(){

//     var $this = $(this);
//     var stylesheet = $this.data('file') + '.css';

//     $link.attr('href', 'css/' + stylesheet);

//     $(this)
//       .siblings('button')
//         .removeAttr('disabled')
//           .end();
          
//             .attr('disabled','disabled');  
            
//     });
//   });