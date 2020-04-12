var myUI = {
	init: function(){
		var header = createEle("header"),
			container = createEle("div")
			footer = createEle("footer");

		header.innerHTML = "<span>SEABEE CLICKER</span>";

		container.className = "container";
		container.onload = myUI.loadout(header,container);

		footer.innerHTML = "EHAWK &copy; 2020";

		body.append(header,container,footer);
	},
	loadout: function(header,container){
		var tools = createEle("button");

		tools.innerHTML = "⚙️";
		tools.className = "tools";

		header.append(tools);
		for (var i = 0; i < 3; i++) {
			var holders = createEle("div");
			holders.className = "holders";
			holders.innerHTML = "holder " + i;
			container.append(holders);
		}
	}
};
window.onload = function(){
	myUI.init();
};