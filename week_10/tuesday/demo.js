let xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
let yValues = [55, 49, 44, 24, 15];
let barColors = ["red", "green", "blue", "orange", "brown"];

new Chart("chart-canvas-1", {
    type: "polarArea",
    data: {
        labels: xValues,
        datasets: [{ backgroundColor: barColors, data: yValues }],
    },
    options: {
        borderWidth: 3,
        borderJoinStyle: "round",
        borderColor: "black",
        plugins: {
            legend: { display: false },
            title: {
                display: true,
                text: "My First JS Chart",
            },
        },
    },
});

new Chart("chart-canvas-2", {
    type: "line",
    data: {
        datasets: [
            {
                label: "# of votes",
                backgroundColor: barColors,
                data: [
                    { x: "2015-12-25", y: 20 },
                    { x: "2016-12-25", y: 62 },
                    { x: "2017-12-25", y: 33 },
                    { x: "2018-12-25", y: 25 },
                ],
            },
        ],
    },
    options: {
        plugins: {
            legend: { display: false },
            title: {
                display: true,
                text: "My Second JS Chart",
            },
        },
    },
});
