# Change stylesheets on click


### jQuery methods
####`on()`
####`data()` — access custom attributes. attach specific data to an element. 
####`attr()` 
####`removeAttr()`
####`sibling()`
####`end()`
End the most recent filtering operation in the current chain and return the set of matched elements to its previous state. In this case, returning to the button that was clicked, no longer changing attributes on the sibling elements.


cache `this` in a variable 
`var $this = $(this);`
___

```js

(function(){

  var link = $('link');
  $('button').on( 'click', function(){

    var $this = $(this);
    var stylesheet = $this.data('file') + '.css';

    $link.attr('href', 'css/' + stylesheet);

    $(this)
      .siblings('button')
        .removeAttr('disabled')
          .end();

            .attr('disabled','disabled');  
            
    });
  });

```
