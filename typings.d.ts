interface IWeather {
    name: string;
    main: {
      temp: number;
     
    };
    weather: {
      main: string;
      description: string;
    }[];
    wind: {
      speed: number;
    };
    dt: number;

}

interface IForecast {
  list: [
    {
    main: {
      temp: number;
    };
    weather: {
      main: string;
      description: string;
    }[];
    wind: {
      speed: number;
    };
    dt_txt: string;
  }
]
}
