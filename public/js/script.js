var content = {	
	dataType : 'html',
	contentTypes: {
		html : 'text/html;  charset=UTF-8',
		json : 'application/json;  charset=UTF-8'
	},
	init:function(){
		this.setTrigers();
	},

	setTrigers:function(){			
		var self = this;	
		
		//новый таск
		$( "body" ).on( "click", ".btn", function() {
			var type = $(this).data('type');
			if(type.length > 0){
				self.dataType = type;
				
				self.send({}, function(data){
					console.log(data);
				})
			}else{
				alert('data-type is empty');
			}
		});		
	},
	
	send:function(dataSend, Callback){
		var self = this;
        $.ajax({
            type: 'GET', 
            url:  '/main', 
            data:  dataSend, 
            contentType: self.contentTypes[self.dataType], 
			dataType: self.dataType,
            success: function(data){
				Callback(data);
			}           
        });
	}	
}


$(document).ready(function(){
	content.init();
});