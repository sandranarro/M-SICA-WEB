google.charts.load('current',{
    'packages': ['geochart'],
    'mapsApikey': 'YOUR_MAPS_API_KEY'
})

google.charts.setOnLoadCallback(drawRegionsMap);

function drawRegionsMap(){
    const data = google.visualization.arrayToDataTable([
    ['Country', 'Premios Grammy'],
    ['AR', 10],
    ['CL', 12],
    ['PE', 15],
    ['KR', 2],
    ['CO', 123],
    ['PR', 99],
    ['ES', 97],
    ['MX', 171],
    ['BR', 180],
    ['US', 1248],
    ['UY', 2],

    ['EC', 2],
    ['NI', 0],
    ['PA', 6],
    ['PY', 2],
    ['BO', 2],
    ['HT', 0],
    ['BS', 1],
    ['GT', 17],
    ['SV', 0],
    ['AL', 0],
    ['DE', 1],
    ['AT', 1],
    ['CH', 0],
    ['RU', 0],
    ['UA', 0],
    ['RO', 0],
    ['PL', 0],
    ['GB', 98],
    ['LU', 0],
    ['CZ', 0],
    ['SE', 0],
    ['CA', 0],
    ['GL', 0],
    ['AU', 0],
    ['FR', 15],
    ['CN', 1],
    ['CG', 1],
    ['CD', 0],

    ]);

const options = {
    title: 'Premios Grammy por País',
    colorAxis: {colors: ['#fce9ff', '#461164']}
};
const chart = new google.visualization.GeoChart(document.getElementById('map'));
chart.draw(data, options);
}