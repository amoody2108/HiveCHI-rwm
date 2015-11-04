function getTimeZone(){
	map = {
    	"EST": "Eastern Time (US & Canada)",
   		"EDT": "Eastern Time (US & Canada)",
    	"CST": "Central Time (US & Canada)",
    	"CDT": "Central Time (US & Canada)",
    	"MST": "Mountain Time (US & Canada)",
    	"MDT": "Mountain Time (US & Canada)",
    	"PST": "Pacific Time (US & Canada)",
    	"PDT": "Pacific Time (US & Canada)"
  	}
  	s = new Date().toString()
  	tz = /\((\w{3})\)/.exec(s)[1]
  	return map[tz]
}

$(document).ready(function(){
  $('ul.tabs').tabs();
  $('select').material_select();
});
