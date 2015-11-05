if (Meteor.isClient) {
	Meteor.startup(function() {
		//var lang = window.navigator.userLanguage||window.navigator.language;
		//lang = lang.toLowerCase(lang);
		T9n.setLanguage("zh_cn")
	})
}