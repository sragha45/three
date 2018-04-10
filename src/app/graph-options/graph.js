import {Data} from 'app/data'


export function drawGraph(obj) {

    
    
    // console.log(obj);
    
    // Load the Visualization API and the corechart package.
    google.charts.load('current', { 'packages': ['corechart'] });

    // Set a callback to run when the Google Visualization API is loaded.
    google.charts.setOnLoadCallback(drawChart);

    // Callback that creates and populates a data table,
    // instantiates the pie chart, passes in the data and
    // draws it.
    function drawChart() {

        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Memory');
        data.addColumn('number', 'Amount');
        data.addColumn({type: 'string', role: 'tooltip'})
        data.addRows([
            ['Memory Free', obj.memoryAvailable - obj.memoryContributed, "Memory Free: " + (obj.memoryAvailable - obj.memoryContributed) + "MB"],
            ['Memory Contributed', obj.memoryContributed, "Memory Contribution: " + obj.memoryContributed + "MB"],
            
        ]);

        // Set chart options
        var options = {
            'title': '',
            'width': 800,
            'height': 600,
            'pieHole': 0.4,
            'backgroundColor': '#FAFAFA',   
            'colors':  ['#3472db', '#76a5f4']
             
        };
        
        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
        
        chart.draw(data, options);
    }
}