import { ArrowDown, ArrowUp } from "@phosphor-icons/react";

interface ModalProps {
    onClose: () => void;
    weather: any;
}

export function Modal({ onClose, weather }: ModalProps) {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-neutral-200 p-8 rounded-lg shadow-lg flex flex-col items-center justify-center relative w-[40rem] h-[30rem] text-center mx-6">
                <button onClick={onClose} className="absolute top-1 right-2 text-6xl font-extralight">
                    &times;
                </button>
                <h2 className="text-4xl font-bold mb-4">Clima em {weather?.name}</h2>
                <p className="text-3xl">Temperatura: {Math.round(weather?.main?.temp - 273.15)}°C</p>
                <p className="text-3xl">Condição: {weather?.weather[0]?.description}</p>
                <div className="flex items-center mt-4 text-left">
                    <div className="flex items-center text-3xl">
                        <ArrowDown size={28} className="text-blue-500" />
                        <span>{Math.round(weather?.main?.temp_min - 273.15)}°C</span>
                    </div>
                    <div className="flex items-center ml-6 text-3xl">
                        <ArrowUp size={28} className="text-red-500" />
                        <span>{Math.round(weather?.main?.temp_max - 273.15)}°C</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
