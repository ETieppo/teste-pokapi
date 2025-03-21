'use client'

import { PokemonProps } from "@/interfaces/PokemonProps"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import Toast from "../components/Toast"

export default function PokemonPageClient() {
    const pokemon_id = useSearchParams().get('id')
    const [pokemon, setPokemon] = useState<PokemonProps | null>(null)
    const [responseMessage, setResponseMessage] = useState("");

    useEffect(() => {
        if (pokemon_id) {
            try {
                fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon_id}`)
                    .then(response => response.json())
                    .then(response => {
                        if (response) {
                            setPokemon(response)
                        }
                    })
                    .catch(err => console.error('Erro ao buscar:', err))
            } catch (error) {
                console.error("Erro ao buscar pokémons!")
                setResponseMessage("Falhamos ao buscar os pokémons disponíveis, sentimos muito!")
            }
        } else {
            setResponseMessage("Não existem mais páginas!")
        }
    }, [])

    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-[#000a0f] to-[#023047]">
            <Toast message={responseMessage} />
            {!pokemon ? (
                <section className="flex w-full min-h-screen items-center justify-center">
                    <h1 className="mx-auto my-auto text-4xl">Carregando...</h1>
                </section>
            ) : (
                <section className="min-h-screen w-full flex flex-col justify-center p-20">
                    <div className="flex flex-col gap-4 mx-auto mb-8">
                        <img
                            className="h-96 w-96"
                            src={
                                pokemon.sprites.other?.dream_world?.front_default ||
                                pokemon.sprites.other?.['official-artwork']?.front_default ||
                                pokemon.sprites.front_default
                            }
                            alt={pokemon.name}
                        />
                        <h1 className="text-3xl mx-auto">{pokemon.name.toUpperCase()}</h1>
                    </div>

                    <div className="flex flex-col lg:flex-row w-full gap-4">
                        <div className="bg-stone-800 p-6 rounded-2xl border border-neutral-700 w-full flex flex-col">
                            <h2 className="mb-4 text-2xl w-fit">Características</h2>
                            <div className="border border-neutral-600 w-full mb-4" />
                            <ul>
                                <li>Height: <span>{pokemon.height}</span></li>
                                <li>Weight: <span>{pokemon.weight}</span></li>
                                <li>Base experience: <span>{pokemon.base_experience}</span></li>
                            </ul>
                        </div>
                        <div className="bg-stone-800 p-6 rounded-2xl border border-neutral-700 w-full flex flex-col">
                            <h2 className="mb-4 text-2xl lg:self-end w-fit">Habilidades</h2>
                            <div className="border border-neutral-600 w-full mb-4" />
                            <div className="flex flex-row w-full justify-between mb-2 text-stone-600">
                                <p>Habilidade</p>
                                <p>Escondido | Slot</p>
                            </div>
                            <ul className="text-nowrap flex flex-col">
                                {pokemon.abilities.map((abilitie, index) => (
                                    <li className="flex flex-row justify-between" key={index}>
                                        <p>{abilitie.ability.name}</p>
                                        <div className="flex flex-row gap-2">
                                            <p>{abilitie.is_hidden ? 'Sim' : 'Não'}</p>
                                            <div className="h-full border border-stone-700" />
                                            <p>{abilitie.slot}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>
            )}
        </div>
    )
}