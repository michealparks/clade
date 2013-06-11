window.onload = function(){

	d3.select('body')
		.style({'background-color': 'red'})
		.transition()
		.style({'background-color': 'black'});

	var svg = d3.select("body").selectAll("svg")
	var circle = svg.selectAll("circle")
		.data([293*5], String);

	circle.enter().append("circle")
		.attr("cy", Math.random()*500+30)
		.attr("cx", 500)
		.attr("r", Math.sqrt)
		.attr("fill", "white");

	circle.exit().remove();

	d3.selectAll("circle")
		.transition()
	    .duration(2000)
	    .attr({
	    	"r": function(d) {return (d+=0.00001);},
	    	'fill': 'rgb(213, 75, 75)'
	    });
};