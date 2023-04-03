interface grupos {
nombre: string,
fundacion: number,
activo: boolean
generomusical: string
}

const Beatles = {
    nombre: "The Beatles",
    fundacion: "1960",
    activo: false,
    generomusical: "🎵 Pop Rock"
}

const Queen = {
    nombre: "Queen",
    fundacion: 1970,
    activo: false,
    generomusical: "🎸 Rock"
}

const acdc = {
    nombre: "AC DC",
    fundacion: 1973,
    activo: true,
    generomusical: "🤘 Hard Rock"
}

const LudwigvanBeethoven = {
    nombre: "Ludwig van Beethoven",
    fundacion: 1770,
    activo: false,
    generomusical: "🎼 Clásica"
}

const TheRollingStones = {
    nombre: "The Rolling Stones",
    fundacion: 1962,
    activo: false,
    generomusical: "🎸 Rock"
}

console.log(Beatles,Queen,acdc,LudwigvanBeethoven,TheRollingStones)