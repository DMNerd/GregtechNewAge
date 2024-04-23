ServerEvents.recipes(e => {

    e.replaceInput({ id: 'twilightdelight:maze_stove'}, 'twilightforest:knightmetal_ingot', '#forge:plates/knightmetal')
    e.replaceInput({ id: 'twilightdelight:fiery_cooking_pot'}, 'twilightforest:fiery_ingot', '#forge:plates/fiery')

    const twilightmaterials = ['ironwood', 'knightmetal', 'fiery' ] 
    twilightmaterials.forEach(material => {
        hardenArmorRecipes(e, 'twilightforest', material)
        removeBlockNuggetRecipes(e, 'twilightforest', material)
    });

    hardenToolRecipes(e, 'twilightforest', 'ironwood', 'kubejs:bound_stick')
    hardenPickaxeRecipes(e, 'twilightforest', 'knightmetal', 'kubejs:bound_stick')
    hardenAxeRecipes(e, 'twilightforest', 'knightmetal', 'kubejs:bound_stick')
    hardenSwordRecipes(e, 'twilightforest', 'knightmetal', 'kubejs:bound_stick')
    hardenPickaxeRecipes(e, 'twilightforest', 'fiery', 'kubejs:bound_stick')
    hardenSwordRecipes(e, 'twilightforest', 'fiery', 'kubejs:bound_stick')



})