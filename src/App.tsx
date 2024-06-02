import { useState } from "react";
import { Input } from "./components/Input";
import { Weather } from "./components/Weather";
import axios from "axios";
import "./index.css";
import { Modal } from "./components/Modal";

export function App() {
    const [city, setCity] = useState<string>("");
    const [weather, setWeather] = useState(null);
    const [hidden, setHidden] = useState<boolean>(false);

    const fetchWeather = async () => {
        if (!city) return;
        try {
            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${
                    import.meta.env.VITE_API_KEY
                }&lang=pt`
            );
            setWeather(response.data);
            setHidden(true);
        } catch (error) {
            console.error("Erro ao buscar o clima:", error);
        }
    };

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        setCity(e.target.value);
    }

    function handleFetchWeather(event: React.KeyboardEvent<HTMLInputElement>) {
        if (event.key === "Enter") fetchWeather();
    }

    function handleIconSearch() {
        fetchWeather();
    }

    function closeModal() {
        setHidden(false);
    }

    return (
        <div className="bg-slate-900 w-[100vw] sm:h-[100vh] h-[100%] flex items-center justify-center">
            <div>
                <h1 className="text-5xl text-neutral-200 text-center">Previsão do Tempo</h1>
                <Input
                    value={city}
                    onChange={handleInputChange}
                    onKeyPress={handleFetchWeather}
                    onSearch={handleIconSearch}
                />
                <h2 className="pl-5 pt-12 pb-16 border-t-2 mx-2 border-t-neutral-200 sm:text-3xl text-4xl text-neutral-200">
                    Capitais
                </h2>
                <div className="text-neutral-400 grid grid-cols-2 gap-2 font-thin lg:text-base sm:text-lg text-xl sm:mb-0 mb-2">
                    <div>
                        <span className="ml-7">Min</span>
                        <span className="ml-3">Máx</span>
                    </div>
                    <div className="sm:flex hidden">
                        <span className="ml-7">Min</span>
                        <span className="ml-3">Máx</span>
                    </div>
                </div>
                <div className="grid sm:grid-cols-2 grid-cols-1 grid-rows-5 gap-2">
                    <Weather value="Rio de Janeiro" />
                    <Weather value="São Paulo" />
                    <Weather value="Belo Horizonte" />
                    <Weather value="Brasília" />
                    <Weather value="Belém" />
                    <Weather value="Salvador" />
                    <Weather value="Curitiba" />
                    <Weather value="Fortaleza" />
                    <Weather value="Manaus" />
                    <Weather value="João Pessoa" />
                </div>
            </div>

            {hidden && weather && <Modal onClose={closeModal} weather={weather} />}
        </div>
    );
}
