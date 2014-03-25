var pageObj = {
	host:"",
	incHeader:function(){
		var ho = [];
		ho.push("<h3><a href='"+pageObj.host+"index.html'><img src='"+pageObj.host+"AXJ.png' style='width:110px; height:40px;' /></a></h3>");
		ho.push("<ul>");
		ho.push("<li><a href='#'>Common</a></li>");		
		ho.push("<li><a href='#'>UI<span>(Unique)</span></a></li>");				
		ho.push("<li><a href='#'>UI<span>(Complex)</span></a></li>");						
		ho.push("<li><a href='#'>Lab</a></li>");
		ho.push("</ul>");		
		ho.push("<div class='ax-clear'></div>");
		jQuery(".navMenu").append(ho.join(""));
	},
	incFooter:function(){
		var fo = [];
		fo.push("<h3>AXISJ Theme</h3>");
		fo.push("<ul>");
		fo.push("<li><a href='#' class='on'>Arongi<span>(Default)</span></a></li>");		
		fo.push("<li><a href='#'>Bulldog</a></li>");				
		fo.push("<li><a href='#'>Flybasket</a></li>");						
		fo.push("<li><a href='#'>Kakao</a></li>");
		fo.push("</ul>");		
		fo.push("<div class='ax-clear'></div>");
		jQuery(".navTheme").append(fo.join(""));				
	}
};
