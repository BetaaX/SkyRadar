import { useEffect, useState } from "react";

interface WeatherData {
    name: string;
    main: {
        temp_min: number;
        temp_max: number;
    };
}

interface WeatherProps {
    value: string;
}

export function Weather({ value }: WeatherProps) {
    const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

    useEffect(() => {
        fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${value},BR&appid=${
                import.meta.env.VITE_API_KEY
            }&lang=pt`
        )
            .then((response) => response.json())
            .then((data: WeatherData) => setWeatherData(data));
    }, [value]);

    return (
        <div className="px-3 sm:mb-0 mb-4 font-bold text-left flex items-center lg:text-lg sm:text-xl text-2xl">
            {weatherData ? (
                <div className="m-4 flex justify-start items-center">
                    <p className="text-teal-200 text-left">
                        {Math.round(weatherData.main.temp_min - 273.15)
                            .toString()
                            .padStart(2, "0")}
                        °
                    </p>
                    <p className="text-teal-200 text-left mx-4">
                        {Math.round(weatherData.main.temp_max - 273.15)
                            .toString()
                            .padStart(2, "0")}
                        °
                    </p>
                    <h2 className="text-teal-200">{weatherData.name}</h2>
                </div>
            ) : (
                <p className="text-teal-200">Carregando previsão do tempo...</p>
            )}
        </div>
    );
}
