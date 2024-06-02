import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRef } from "react";

interface InputProps {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onKeyPress: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    onSearch: () => void;
}

export function Input({ value, onChange, onKeyPress, onSearch }: InputProps) {
    const inputRef = useRef<HTMLInputElement>(null);

    function handleIconClick() {
        if (inputRef.current) {
            inputRef.current.focus();
            if (value) {
                onSearch();
            }
        }
    }

    return (
        <div className="relative z-0 mx-6">
            <input
                type="text"
                value={value}
                onChange={onChange}
                onKeyPress={onKeyPress}
                ref={inputRef}
                placeholder="Insira aqui o nome da cidade/estado"
                className="rounded border-none bg-neutral-200 my-16 lg:w-[52rem] md:w-[44rem] sm:w-[40rem] w-[40rem] sm:h-13 h-[3.25rem] pl-4 text-xl placeholder:text-xl placeholder:font-thin"
            />
            <MagnifyingGlass
                size={32}
                className="absolute bottom-[4.5rem] right-4 text-gray-500 font-extrabold hover:cursor-pointer"
                onClick={handleIconClick}
            />
        </div>
    );
}
