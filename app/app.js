	app =	{
		"name": "BridgeGap",
		"version": "1.0",
		"author": "Author Name",
		"settings" : {
			//APP Default Settings to be replaced during app.startup
			"settingA": "My First Setting",
			"settingB": "My Second Setting",
			"settingC": "My Third Setting"
		},
		"data" : {}, // Data hive for runtime value storage
		"slider" : "", //Page transition object
		"startup" : function() {
				
			//Load fastclick library
			FastClick.attach(document.body);
			
			//Load settings
			var settings = util.loadData("settings");
			if ($.isEmptyObject(settings)) {
				//Save the default values in
				util.saveData("settings",this.settings);
			}
			this.settings = settings;

			//Load external template files
			$.ajax({
				type: "GET",
				dataType: 'text',
				async: false,
				url: "templates.html"
			}).done(function(response) {
				$("body").append(response);
				ich.grabTemplates();
			});	
			
			//Perform functions on mobile device only
			if( window.isphone ) {

			}
			
			this.slider = new PageSlider($("#container"));
			router.init('/');
		},
		"homePage" : function() { 

            //Set the template variables
			data = {
				"title": app.name,
				"version":  app.version,
				"author":  app.author
			}
            
            //Queue the template and slide to it
			html = ich.mainTPL(data);
			app.slider.slidePage(html);
		},
		"settingsPage" : function() { 
            
            //Queue the template and slide to it
			html = ich.settingsTPL(app.settings);
			app.slider.slidePage(html);
			
		},
		"saveSettings" : function() {
		
			jQuery('.setting').each(function(){
				input = $(this);
				app.settings[input.attr('id')] = input.val();
			});
			
			util.saveData("settings",this.settings);
			router.setRoute('/');

		},
		"error404"	 : function() {
		},		
		"beforeRoute" : function() {
		}
	}