var myUI = {
	init: function(){
		var header = createEle("header"),
			container = createEle("div")
			footer = createEle("footer");

		header.innerHTML = "CLICKER GAME";

		container.innerHTML = "body";
		container.className = "container";

		footer.innerHTML = "EHAWK &copy; 2020";

		body.append(header,container,footer);
	}
};
window.onload = function(){
	myUI.init();
};