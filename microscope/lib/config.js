if (Meteor.isClient) {
	Meteor.startup(function() {
		//var lang = window.navigator.userLanguage||window.navigator.language;
		//lang = lang.toLowerCase(lang);
		T9n.setLanguage("zh_cn")
	})
}

if (Meteor.isServer) {
	Meteor.startup( function(){
		//weibo
		ServiceConfiguration.configurations.upsert(
  		  { service: "weibo" },
          {$set: {clientId: "579991651",loginStyle: "popup",secret: "b9101715211b937647a85e18609fa8c9"}}
        );
        //wechat
        ServiceConfiguration.configurations.remove({service: "wechat"});
        ServiceConfiguration.configurations.insert(
          {service: "wechat",appId: "wxf44c4b0af0881bc0",scope:'basic',secret: "3a935222d81c6747755e9b4835a04ad0"}
        );
        //qq
        ServiceConfiguration.configurations.remove({service: "qq"});
        ServiceConfiguration.configurations.insert(
          {service: "qq",clientId: "<your-client-id>",scope:'get_user_info',secret: "<your-client-secret>"}
        );
	})
}