const API_KEY = "f34226b8317feebe5c91ec105e324c0c";
const CITY = "Helsinki";

// display charts from data
const showChart = (data) => {
    // temperatures from data
    const temps = data.list.map((item) => item.main.temp);
    // dates from data, show only mm-dd hh:mm
    const dates = data.list.map((item) => item.dt_txt.substring(5, 16));
    // feels like temperatures from data
    const feelsTemps = data.list.map((item) => item.main.feels_like);

    // get html element
    const context = document
        .getElementById("weather-forecast")
        .getContext("2d");
    // make the chart
    const weatherChart = new Chart(context, {
        // type line chart
        type: "line",
        // data part
        data: {
            // labels from dates
            labels: dates,
            // datasets temp and feels like temp
            datasets: [
                {
                    label: "Temperature (Celcius)",
                    data: temps,
                    backgroundColor: "rgba(255, 99, 132, 0.2",
                    borderColor: "rgba(255, 99, 132",
                    borderWidth: 3,
                },
                {
                    label: "Feels Like Temperature (Celcius)",
                    data: feelsTemps,
                    backgroundColor: "rgba(99, 255, 132, 0.2",
                    borderColor: "rgba(299, 255, 132",
                    borderWidth: 3,
                },
            ],
        },
        options: {
            scales: {
                y: {
                    // min and max y values in chart
                    suggestedMin: -20,
                    suggestedMax: 20,
                },
            },
        },
    });
};

const fetchWeatherData = async () => {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/forecast?units=metric&q=${CITY}&appid=${API_KEY}`
        );
        const responseData = await response.json();
        showChart(responseData);
    } catch (error) {
        console.log(error);
    }
};

fetchWeatherData();
