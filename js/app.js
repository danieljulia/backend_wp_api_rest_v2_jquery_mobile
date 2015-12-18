
//cal modificar aquest url i apuntar a la instal·lació de wp
var BASE_URL='http://kiwoo.dev/html/wordpress';

var app = {

	init: function() {
		app.getPosts();
	},

	getPosts: function() {

		var rootURL = BASE_URL+'/wp-json/wp/v2';

		$.ajax({
			type: 'GET',
			url: rootURL + '/posts',
			dataType: 'json',
			success: function(data){
				
				$.each(data, function(index, value) {
					console.log(value);
					
			      $('ul.topcoat-list').append('<li class="topcoat-list__item">' +
			      //	'<img src="'+value.featured_image.attachment_meta.sizes.medium.url+'" /><br>' +
			      	'<h3>'+value.title.rendered+'</h3>' +
			      	'<p>'+value.excerpt.rendered+'</p></li>');
			    });
			},
			error: function(error){
				console.log(error);
			}

		});

	}

}