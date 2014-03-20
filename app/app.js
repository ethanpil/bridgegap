	app =	{
		"name": "BridgeGap",
		"version": "1.0",
		"author": "Author Name",
		"settings" : {
			//Default Settings to be replaced in startup
			"settingA": "My First Setting",
			"settingB": "My Second Setting",
			"settingC": "My Third Setting"
		},
		"slider" : "",
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
			delete settings;	

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
			
			//Perform functions if were on a mobile device
			if( window.isphone ) {
				//Add a body class
				//http://blog.safaribooksonline.com/2012/07/13/phonegap-tip-changing-look-feel-based-on-the-platform/
				var thePlatform = device.platform.toLowerCase();
				if (thePlatform.indexOf("iphone") > -1 ||
					thePlatform.indexOf("ipad") > -1)
				{
					thePlatform = "ios";
				}
				document.body.className = thePlatform;
			}
			
			this.slider = new PageSlider($("#container"));
			router.init('/');
		},
		"homePage" : function() { 

			data = {
				"title": app.name,
				"version":  app.version,
				"author":  app.author
			}
			html = ich.mainTPL(data);
			app.slider.slidePage(html);
		},
		"settingsPage" : function() { 
		
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