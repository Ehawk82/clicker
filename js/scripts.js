var myUI = {
	init: function(){
		var header = createEle("header"),
			container = createEle("div")
			footer = createEle("footer");

		var uData = parseLS("uData");
		
		if(!uData){
			saveLS("uData",udata);
		}else{
			uData = parseLS("uData");
		}

		header.innerHTML = "<span>SEABEE CLICKER</span>";

		container.className = "container";
		container.onload = myUI.loadout(header,container,footer,uData);

		body.append(header,container,footer);
	},
	loadout: function(header,container,footer,uData){
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
		funds.onmouseover = myUI.pophover(funds, uData);

		readiness.innerHTML = "READINESS";
		readiness.setAttribute("data-index", 1);
		readiness.onmouseover = myUI.pophover(readiness, uData);

		skills.innerHTML = "SKILLS";
		skills.setAttribute("data-index", 2);
		skills.onmouseover = myUI.pophover(skills, uData);

		footer.append(funds,readiness,skills);
	},
	pophover: function(x, uData){
		return function(){
			var thing = x.innerHTML,
				dindex = x.getAttribute('data-index'),uValue;

			if(dindex === "0"){
				uValue = basic[dindex] + uData.money;

			}
			if (dindex === "1") {
				uValue = uData.ready + basic[dindex];
			}
			if(dindex === "2"){
				uValue = basic[dindex] + uData.level;
			}
			x.innerHTML = uValue;
			x.onmouseout = function(){ return x.innerHTML = thing }
		};
	},
	popup: function(x){
		return function(){
			var blokker = createEle("div"),
				xOut = createEle("button"),
				frame = createEle("div"),
				title = createEle("label"),
				upperbar = createEle("div"),
				lowerbar = createEle("div");

			upperbar.innerHTML = "1<br />2";
			upperbar.className = "upperbar";

			lowerbar.innerHTML = "3<br />4";
			lowerbar.className = "lowerbar";

			title.innerHTML = x.innerHTML;
			title.className = "title";

			frame.append(title,upperbar, lowerbar);
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