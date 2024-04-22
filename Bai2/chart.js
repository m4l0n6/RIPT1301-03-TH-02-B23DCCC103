let scatterTrace1 = {
  x: [1, 2, 3, 4],
  y: [10, 15, 13, 17],
  mode: 'markers',
  type: 'scatter'
};

let scatterTrace2 = {
  x: [2, 3, 4, 5],
  y: [16, 5, 11, 9],
  mode: 'lines',
  type: 'scatter'
};

let scatterTrace3 = {
  x: [1, 2, 3, 4],
  y: [12, 9, 15, 12],
  mode: 'lines+markers',
  type: 'scatter'
};

let scatterData = [scatterTrace1, scatterTrace2, scatterTrace3];

let scatterLayout = {
    height: 500,
    width: 500,
}

let barData = [
  {
    x: ['giraffes', 'orangutans', 'monkeys'],
    y: [20, 14, 23],
    type: 'bar'
  }
];

let barLayout = {
    height: 500,
    width: 500,
}

let pieData = [{
  values: [19, 26, 55],
  labels: ['Residential', 'Non-Residential', 'Utility'],
  type: 'pie'
}];

let pieLayout = {
  height: 500,
  width: 500
};

let donutData = [{
  values: [16, 15, 12, 6, 5, 4, 42],
  labels: ['US', 'China', 'European Union', 'Russian Federation', 'Brazil', 'India', 'Rest of World' ],
  domain: {column: 0},
  name: 'GHG Emissions',
  hoverinfo: 'label+percent+name',
  hole: .4,
  type: 'pie'
},{
  values: [27, 11, 25, 8, 1, 3, 25],
  labels: ['US', 'China', 'European Union', 'Russian Federation', 'Brazil', 'India', 'Rest of World' ],
  text: 'CO2',
  textposition: 'inside',
  domain: {column: 1},
  name: 'CO2 Emissions',
  hoverinfo: 'label+percent+name',
  hole: .4,
  type: 'pie'
}];

let donutLayout = {
  title: 'Global Emissions 1990-2011',
  annotations: [
    {
      font: {
        size: 20
      },
      showarrow: false,
      text: 'GHG',
      x: 0.17,
      y: 0.5
    },
    {
      font: {
        size: 20
      },
      showarrow: false,
      text: 'CO2',
      x: 0.82,
      y: 0.5
    }
  ],
  height: 500,
  width: 500,
  showlegend: false,
  grid: {rows: 1, columns: 2}
};

let bubbleData = [{
  x: [1, 2, 3, 4],
  y: [10, 11, 12, 13],
  mode: 'markers',
  marker: {
    size: [40, 60, 80, 100]
  }
}];

let bubbleLayout = {
  title: 'Marker Size',
  showlegend: false,
  height: 500,
  width: 500
};

Plotly.newPlot('chart-1', scatterData, scatterLayout);
Plotly.newPlot('chart-2', barData, barLayout);
Plotly.newPlot('chart-3', pieData, pieLayout);
Plotly.newPlot('chart-4', donutData, donutLayout);
Plotly.newPlot('chart-5', bubbleData, bubbleLayout);