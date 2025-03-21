"use client"
import { IndexProps } from "@/interfaces/IndexProps"
import { PokemonProps } from "@/interfaces/PokemonProps"
import { useEffect, useState } from "react"
import Link from "next/link"


////// POKEMON CARD ///////////////////////////////////////////////////////////////////////////////

export default function PokemonCard({ name, url }: IndexProps) {
    const [pokemonData, setPokemonData] = useState<PokemonProps | null>(null)


    useEffect(() => {
        fetch(url, { method: 'GET' })
            .then(response => response.json())
            .then(response => setPokemonData(response))
            .catch(err => console.error('erro ao : ', err))
    }, [url])


    if (pokemonData) return (
        <Link href={`/pokemon?id=${pokemonData.id}`} className="bg-neutral-800 rounded-xl p-6 border border-neutral-700 items-center flex flex-col h-fit hover:bg-blue-800 transition-all duration-300">
            {!pokemonData && (<p>Carregando dados...</p>)}
            {
                pokemonData &&
                <div className="">
                    <img src={pokemonData.sprites.front_default} alt="" className="h-30"/>
                </div>
            }
            <h1 className="text-4xl">{name}</h1>
        </Link>
    )
}