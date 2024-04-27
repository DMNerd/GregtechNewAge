ServerEvents.recipes(e => {

    e.replaceInput({ id: 'twilightdelight:maze_stove'}, 'twilightforest:knightmetal_ingot', '#forge:plates/knightmetal')
    e.replaceInput({ id: 'twilightdelight:fiery_cooking_pot'}, 'twilightforest:fiery_ingot', '#forge:plates/fiery')
    e.remove({id: '/twilightforest:wood/.*door$/'})
    const twilightmaterials = ['ironwood', 'knightmetal', 'fiery' ] 
    twilightmaterials.forEach(material => {
        hardenArmorRecipes(e, 'twilightforest', material)
        removeBlockRecipes(e, 'twilightforest', material)
        removeNuggetRecipes(e, 'twilightforest', material)
    });

    hardenToolRecipes(e, 'twilightforest', 'ironwood', 'minecraft:stick')
    hardenPickaxeRecipes(e, 'twilightforest', 'knightmetal', 'minecraft:stick')
    hardenAxeRecipes(e, 'twilightforest', 'knightmetal', 'minecraft:stick')
    hardenSwordRecipes(e, 'twilightforest', 'knightmetal', 'minecraft:stick')
    hardenPickaxeRecipes(e, 'twilightforest', 'fiery', 'minecraft:stick')
    hardenSwordRecipes(e, 'twilightforest', 'fiery', 'minecraft:stick')



})