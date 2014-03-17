util = {

	"loadData" : function (storename) {
		return JSON.parse(window.localStorage.getItem(storename));
	},
	"saveData" : function (storename, data) {
		window.localStorage.setItem(storename,JSON.stringify(data));
	}
	
}