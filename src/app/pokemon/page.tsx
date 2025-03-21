import { Suspense } from 'react'
import PokemonPageClient from '../components/PokemonPage'

export default function Page() {
    return (
        <Suspense fallback={<div className="p-10 text-white">Carregando pokémon...</div>}>
            <PokemonPageClient />
        </Suspense>
    )
}