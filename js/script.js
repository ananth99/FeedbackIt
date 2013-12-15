var App = (function(){
	
	function create() {
		$.getJSON("test.jason",function (data){var items = [];
  $.each( data, function( key, val ) {
    items.push( "<li id='" + key + "'>" + val + "</li>" );
  });
 
  $( "<ul/>", {
    "class": "my-new-list",
    html: items.join( "" )
  }).appendTo( "body" );
});


	}

	function getData (argument) {
		// body...
	}

	return {
		create:create,
		getData:getData
	}
}());