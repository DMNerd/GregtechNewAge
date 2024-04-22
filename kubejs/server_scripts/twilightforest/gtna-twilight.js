ServerEvents.recipes(e => {
    e.remove({ id: '/twilightforest:wood/.*/' })
    e.replaceInput({ input: '#twilightforest:sorting_logs' }, '#twilightforest:sorting_logs', '#twilightforest:sortwood_logs')

    hardenToolRecipes(e, 'twilightforest', 'ironwood', 'kubejs:bound_stick')
    hardenPickaxeRecipes(e, 'twilightforest', 'knightmetal', 'kubejs:bound_stick')
    hardenAxeRecipes(e, 'twilightforest', 'knightmetal', 'kubejs:bound_stick')
    hardenSwordRecipes(e, 'twilightforest', 'knightmetal', 'kubejs:bound_stick')
    hardenPickaxeRecipes(e, 'twilightforest', 'fiery', 'kubejs:bound_stick')
    hardenSwordRecipes(e, 'twilightforest', 'fiery', 'kubejs:bound_stick')
    hardenArmorRecipes(e, 'twilightforest', 'ironwood')
    hardenArmorRecipes(e, 'twilightforest', 'knightmetal')
    hardenArmorRecipes(e, 'twilightforest', 'fiery')

})