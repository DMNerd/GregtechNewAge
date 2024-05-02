ServerEvents.recipes(e => {
    removeVanillaMetalurgy(e, 'bloodmagic', 'hellforged')
    e.replaceInput({id: '/bloodmagic:.*rune.*/' }, 'minecraft:netherite_scrap', '#forge:plates/netherite')

})