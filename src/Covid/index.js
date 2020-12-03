useEffect(() => {
    const getCovidData = async () => {
      const response = await fetch("https://covid-19-statistics.p.rapidapi.com/provinces?iso=USA", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "ac746c70afmshf61b131192dee8dp1196e6jsnd3c8866cc424",
            "x-rapidapi-host": "covid-19-statistics.p.rapidapi.com"
        }
    });
        const data = await response.json();
        console.log(data);
    };

    getCovidData();
}, []);