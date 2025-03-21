import { IndexProps } from "./IndexProps";



export interface PokemonProps {
    id: number;
    name: string;
    base_experience: number;
    height: number;
    weight: number;
    is_default: boolean;
    abilities: AbilityProps[];
    forms: IndexProps[];
    game_indices: GameIndexProps[];
    held_items: HeldItemProps[];
    location_area_encounters: string;
    moves: MoveProps[];
    species: IndexProps;
    sprites: SpritesProps;
    stats: StatProps[];
    types: TypeSlotProps[];
}

interface AbilityProps {
    ability: IndexProps;
    is_hidden: boolean;
    slot: number;
}

interface GameIndexProps {
    game_index: number;
    version: IndexProps;
}

interface HeldItemProps {
    item: IndexProps;
    version_details: VersionDetailProps[];
}

interface VersionDetailProps {
    rarity: number;
    version: IndexProps;
}

interface MoveProps {
    move: IndexProps;
    version_group_details: VersionGroupDetailProps[];
}

interface VersionGroupDetailProps {
    level_learned_at: number;
    version_group: IndexProps;
    move_learn_method: IndexProps;
}

interface SpritesProps {
    front_default: string;
    front_shiny: string;
    back_default?: string;
    back_shiny?: string;
    other?: OtherSpritesProps;
    versions?: VersionSpritesProps;
}

interface OtherSpritesProps {
    dream_world?: {
        front_default: string;
    };
    home?: {
        front_default: string;
        front_shiny?: string;
    };
    "official-artwork"?: {
        front_default: string;
        front_shiny?: string;
    };
    showdown?: {
        front_default: string;
        back_default?: string;
    };
}

interface VersionSpritesProps {
    "generation-i"?: {
        "red-blue"?: SpriteVariationsProps;
        yellow?: SpriteVariationsProps;
    };
    "generation-ii"?: {
        crystal?: SpriteVariationsProps;
        gold?: SpriteVariationsProps;
        silver?: SpriteVariationsProps;
    };
    "generation-iii"?: {
        emerald?: SpriteVariationsProps;
        "firered-leafgreen"?: SpriteVariationsProps;
        "ruby-sapphire"?: SpriteVariationsProps;
    };
    "generation-iv"?: {
        "diamond-pearl"?: SpriteVariationsProps;
        "heartgold-soulsilver"?: SpriteVariationsProps;
        platinum?: SpriteVariationsProps;
    };
    "generation-v"?: {
        "black-white"?: SpriteVariationsProps;
    };
    "generation-vi"?: {
        "omegaruby-alphasapphire"?: SpriteVariationsProps;
        "x-y"?: SpriteVariationsProps;
    };
    "generation-vii"?: {
        icons?: SpriteVariationsProps;
        "ultra-sun-ultra-moon"?: SpriteVariationsProps;
    };
    "generation-viii"?: {
        icons?: SpriteVariationsProps;
    };
}

interface SpriteVariationsProps {
    front_default: string;
    front_shiny?: string;
    back_default?: string;
    back_shiny?: string;
}

interface StatProps {
    base_stat: number;
    effort: number;
    stat: IndexProps;
}

interface TypeSlotProps {
    slot: number;
    type: IndexProps;
}