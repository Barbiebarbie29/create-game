export const templatesList = {
    "phaser-editor": [
        "react",
        "react-ts",
        "nextjs",
        "vue",
        "vue-ts",
        "angular",
        "svelte",
        "solid",
        "vite",
        "vite-ts",
        "bun",
        "webpack",
        "webpack-ts",
        "remix",
        "importmap",
        "esbuild",
        "esbuild-ts",
        "parcel",
        "parcel-ts",
        "rollup",
        "rollup-ts"
    ],
    "frontend": [
        "react",
        "react-ts",
        "nextjs",
        "vue",
        "vue-ts",
        "angular",
        "svelte",
        "solid",
    ],
    "bundle": [
        "vite",
        "vite-ts",
        "bun",
        "webpack",
        "webpack-ts",
        "remix",
        "importmap",
        "esbuild",
        "esbuild-ts",
        "parcel",
        "parcel-ts",
        "rollup",
        "rollup-ts"
    ],
    "demo": [
        /* if we want to add more demos */
        {
            templateName: "phasers-revenge",
            name: "Phaser's Revenge",
            description: "Space Action Pixel Art Game",
            url: "./scaffolding/demo/phasers-revenge"
        },
        {
            templateName: "coin-clicker",
            name: "Coin Clicker",
            description: "Clicker Game",
            url: "./scaffolding/demo/coin-clicker"
        },
        {
            templateName: "memory-card-game",
            name: "Memory Card Game",
            description: "Pair Matching Game",
            url: "./scaffolding/demo/memory-card-game"
        },
        
    ],
    // Dont ask for clean/skeleton. There are templates that are only skeleton mode.
    "noskeletonquestion": [
        "importmap"
    ],
    // TS by default, this is necessary to avoid asking for the language
    "tstemplates": [
        "angular",
        "svelte",
        "solid",
        "nextjs",
        "bun",
        "remix"
    ]
}