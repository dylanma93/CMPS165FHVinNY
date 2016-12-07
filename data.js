var margin = {left: 350, right: 80, top: 50, bottom: 50 }, 
        width = 1060 - margin.left -margin.right,
        height = 500 - margin.top - margin.bottom;
    

    //Define Scales
    var xScale = d3.scale.linear()
        .range([0, width]);

    var yScale = d3.scale.linear()
        .range([height, 0]);

    var svg = d3.select("body")
        .append("svg")
        .attr("width", width + margin.left + margin.right )
        .attr("height", height + margin.top + margin.bottom )
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");    