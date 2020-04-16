var myUI = {
	init: function(){
		var header = createEle("header"),
			container = createEle("div")
			footer = createEle("footer");

		header.innerHTML = "<span>SEABEE CLICKER</span>";

		container.className = "container";
		container.onload = myUI.loadout(header,container,footer);

		//footer.innerHTML = "EHAWK &copy; 2020";

		body.append(header,container,footer);
	},
	loadout: function(header,container,footer){
		var tools = createEle("button"),
		    achievements = createEle("button"),
		    stats = createEle("button"),
		    funds = createEle("div"),
		    readiness = createEle("div"),
		    skills = createEle("div");

		tools.innerHTML = "⚙️";
		tools.className = "tools";
		tools.onclick = myUI.popup(tools);

		achievements.innerHTML = "🏆";
		achievements.className = "achievements";
		achievements.onclick = myUI.popup(achievements);

		stats.innerHTML = "📈";
		stats.className = "stats";
		stats.onclick = myUI.popup(stats);

		header.append(tools,achievements,stats);

		for (var i = 0; i < 3; i++) {
			var holders = createEle("div");
			holders.className = "holders";
			holders.innerHTML = "&nbsp;";

			container.append(holders);
		}
		funds.innerHTML = "FUNDS";
		funds.setAttribute("data-index", 0);		
		funds.onmouseover = myUI.pophover(funds);

		readiness.innerHTML = "READINESS";
		readiness.setAttribute("data-index", 1);
		readiness.onmouseover = myUI.pophover(readiness);

		skills.innerHTML = "SKILLS";
		skills.setAttribute("data-index", 2);
		skills.onmouseover = myUI.pophover(skills);

		footer.append(funds,readiness,skills);
	},
	pophover: function(x){
		return function(){
			var thing = x.innerHTML,
				dindex = x.getAttribute('data-index');
			x.innerHTML = basic[dindex];
			x.onmouseout = function(){ return x.innerHTML = thing }
		};
	},
	popup: function(x){
		return function(){
			var blokker = createEle("div"),
				xOut = createEle("button"),
				frame = createEle("div"),
				title = createEle("label"),
				upperbar = createEle("div");

			upperbar.innerHTML = "&nbsp;";
			upperbar.className = "upperbar";

			title.innerHTML = x.innerHTML;
			title.className = "title";

			frame.append(title,upperbar);
			frame.className = "frame";

			xOut.innerHTML = "❌";
			xOut.className = "xOut";
			xOut.onclick = myUI.xOutFunc(blokker);

			blokker.innerHTML = "&nbsp;";
			blokker.className = "blokker";
			blokker.append(xOut,frame);

			body.append(blokker);
		}
	},
	xOutFunc: function(blokker){
		return function(){
			blokker.remove();
		}
	}
};
window.onload = function(){
	myUI.init();
};