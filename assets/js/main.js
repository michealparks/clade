function firstOrg(){
	this.id = 'org0';
	this.class = 'org';
	this.cx = 40; 
	this.cy = 40;
	this.rx = 25;
	this.ry = 25;
	this.vx = 0.1;
	this.vy = 0.1;
	this.hue = Math.random();
	this.fill = hsvToRgb(this.hue, 0.5, 0.95);
};

// Organism attribute object constructor.
function OrgAttr(Parent){
	this.id = 'org'+organismsAttr.length;
	this.class = 'org';
	this.cx = Parent.cx;
	this.cy = Parent.cy;
	this.rx = Parent.rx+(Math.random()*6)-3;
	this.ry = Parent.ry+(Math.random()*6)-3;
	this.vx = Parent.vx+(Math.random()*2)-1;
	this.vy = Parent.vy+(Math.random()*2)-1;
	this.hue = Parent.hue+0.1;
	if (this.hue >= 1) {this.hue = 0.01;}
	this.fill = hsvToRgb(this.hue, 0.5, 0.95);
	console.log(this.vx, this.vy)
};

var drawNewOrg = function(){
	organisms.push(d3.select('body').select('svg').append('ellipse').attr(organismsAttr[organismsAttr.length-1]));

	$('.org').click(function(){
		$(this).off('click');
		organismsAttr.push(new OrgAttr(organismsAttr[$(this).attr('id').replace(/^\D+/g, '')]));
		drawNewOrg();
	});
};

var hsvToRgb = function(h, s, v){
	var r, g, b, 
		h_i = parseInt(h*6),
		f = h*6 - h_i,
		p = v * (1 - s),
		q = v * (1 - f*s),
		t = v * (1 - (1 - f) * s);
	switch (h_i) {
		case 0: r = v; g = v; b = p; break;
		case 1: r = q; g = v; b = p; break;
		case 2: r = p; g = v; b = t; break;
		case 3: r = p; g = q; b = v; break;
		case 4: r = t; g = p; b = v; break;
		case 5: r = v; g = p; b = q; break;
	}
	return 'rgb('+parseInt(r*256)+','+parseInt(g*256)+','+parseInt(b*256)+')';
};

var gameloop = function(){
	updatePosition();
	
	setTimeout(gameloop, 10);
};

var updatePosition = function(){
	for (var i = 0; i < organisms.length; i++){
		if (organismsAttr[i].cx-organismsAttr[i].rx <= 0){
			organismsAttr[i].vx = -(organismsAttr[i].vx);
		} else if (organismsAttr[i].cy-organismsAttr[i].ry <= 0){
			organismsAttr[i].vy = -(organismsAttr[i].vy);
		} else if (organismsAttr[i].cx+organismsAttr[i].rx >= $('svg')[0].clientWidth){
			organismsAttr[i].vx = -(organismsAttr[i].vx);
		} else if (organismsAttr[i].cy+organismsAttr[i].ry >= $('svg')[0].clientHeight){
			organismsAttr[i].vy = -(organismsAttr[i].vy);
		}
		organisms[i].attr({
			'cx': organismsAttr[i].cx+organismsAttr[i].vx,
			'cy': organismsAttr[i].cy+organismsAttr[i].vy
		});
		organismsAttr[i].cx+=organismsAttr[i].vx;
		organismsAttr[i].cy+=organismsAttr[i].vy;
	}
};

$(document).ready(function(){
	console.log($('svg')[0].clientHeight, $('svg')[0].clientWidth)
	organisms = [];
	organismsAttr = [];

	organismsAttr.push(new firstOrg);

	organisms[0] = d3.select('body').select('svg').append('ellipse').attr(organismsAttr[0]);
	$('.org').click(function(){
		$(this).off('click');
		organismsAttr.push(new OrgAttr(organismsAttr[$(this).attr('id').replace(/^\D+/g, '')]));
		drawNewOrg();
	});

	gameloop();

	// d3.select('body')
	// 	.style({'background-color': 'red'})
	// 	.transition()
	// 	.style({'background-color': 'black'});

	// var svg = d3.select("body").selectAll("svg")
	// var circle = svg.selectAll("circle")
	// 	.data([293*5], String);

	// circle.enter().append("circle")
	// 	.attr("cy", Math.random()*500+30)
	// 	.attr("cx", 500)
	// 	.attr("r", Math.sqrt)
	// 	.attr("fill", "white");

	// circle.exit().remove();

	// d3.selectAll("circle")
	// 	.transition()
	//     .duration(2000)
	//     .attr({
	//     	"r": function(d) {return (d+=0.00001);},
	//     	'fill': 'rgb(213, 75, 75)'
	//     });
});