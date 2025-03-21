"use client"
import { useEffect, useState } from "react";
import PokemonCard from "./components/PokemonCard";
import { IndexProps } from "@/interfaces/IndexProps";
import { FaArrowLeft, FaArrowRight, FaMagnifyingGlass } from "react-icons/fa6";



////// HOME ///////////////////////////////////////////////////////////////

export default function Home() {
    const [responseMessage, setResponseMessage] = useState("");
    const [pokemons, setPokemons] = useState<IndexProps[] | null>(null);
    const [urls, setUrls] = useState({ next: "", previous: "" });
    const [searchInput, setSearchInput] = useState("");

    const handleErrorMessage = (message: string) => {
        setResponseMessage(message)
        if (message) setTimeout(() => { setResponseMessage("") }, 3000)
    }

    function triggerNextPrevious(pushUrl: string | null) {
        if (pushUrl) {
            try {
                fetch(pushUrl, { method: 'GET' })
                    .then(response => response.json())
                    .then(response => {
                        if (response) {
                            setUrls((prev) => ({
                                next: response.next ? response.next : null,
                                previous: response.previous ? response.previous : null
                            }))
                            setPokemons(response.results)
                        }
                    })
                    .catch(err => console.error('erro ao : ', err))
            } catch (error) {
                console.error("Erro ao buscar pokemons!")
                handleErrorMessage("Falhamos ao buscar os pokemons disponíveis, sentimos muito!")
            }
        } else {
            handleErrorMessage("Não existem mais páginas!")
        }

    }

    useEffect(() => {
        triggerNextPrevious('https://pokeapi.co/api/v2/pokemon')
    }, [])




    return (
        <div className="w-full min-h-screen">
            <section className="h-72 bg-gradient-to-br from-stone-90 from-[#000a0f]  to-[#023047] shadow-2xl flex flex-col items-center bg-cover bg-no-repeat px-8 lg:px-20 border-b border-[#219EBC]">
                <h1 className="text-xl font-black my-auto text-center">By Emerson A. Tieppo Jr.</h1>
            </section>

            <section className="gap-8 p-8 lg:p-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 bg-stone-950 pt-40">
                {pokemons && pokemons.map((pkm, index) =>
                    <PokemonCard key={index} {...pkm} />
                )}
            </section>
            <div className="flex flex-row gap-12 pt-6 pb-20 w-full items-center justify-center">
                <button
                    className={`${!urls.previous ? 'opacity-50' : ''} flex flex-col gap-2 text-center items-center`}
                    disabled={!urls.previous}
                    onClick={() => triggerNextPrevious(urls.previous)}
                >
                    <FaArrowLeft />
                    <span className="text-neutral-600">anterior</span>
                </button>
                <button
                    className={`${!urls.next ? 'opacity-50' : ''} flex flex-col gap-2 text-center items-center`}
                    onClick={() => triggerNextPrevious(urls.next)}
                    disabled={!urls.next}
                >
                    <FaArrowRight />
                    <span className="text-neutral-600">próximo</span>
                </button>
            </div>

        </div>
    );
}
