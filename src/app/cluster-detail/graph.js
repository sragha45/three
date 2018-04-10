import { Data } from 'app/data'


export function drawGraph(obj) {



    console.log(obj);

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
        data.addColumn({ type: 'string', role: 'tooltip' })
        data.addRows([
            ['Memory Consuming', obj.remoteMemoryConsuming, "Memory Consuming: " + obj.remoteMemoryConsuming + "MB"],
            ['Memory Contributed', obj.remoteMemoryContrib, "Memory Contribution: " + obj.remoteMemoryContrib + "MB"],

        ]);

        // Set chart options
        var options = {
            'title': '',
            'width': 500,
            'height': 500,
            'pieHole': 0.4,
            'backgroundColor': '#FAFAFA',
            'colors': ['#3472db', '#76a5f4']

        };

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.PieChart(document.getElementById('cluster_chart_div'));
        chart.draw(data, options);

        drawIOChart();
    }

    function drawIOChart() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Memory');
        data.addColumn('number', 'Amount');
        data.addColumn({ type: 'string', role: 'tooltip' })
        data.addRows([
            ['IO Available', obj.io_bandwidth, "IO Available: " + obj.io_bandwidth],
            ['IO reads', obj.io_reads, "IO reads: " + obj.io_reads],
            ['IO writes', obj.io_writes, "IO Writes: " + obj.io_writes]

        ]);

        // Set chart options
        var options = {
            'title': '',
            'width': 500,
            'height': 500,
            'pieHole': 0.4,
            'backgroundColor': '#FAFAFA',
            'colors': ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6']

        };

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.PieChart(document.getElementById('IO_cluster_chart_div'));
        chart.draw(data, options);


    }
}