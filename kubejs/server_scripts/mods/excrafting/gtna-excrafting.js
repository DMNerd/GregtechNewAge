ServerEvents.recipes(e => {
    e.remove({ output: '/extendedcrafting:.*_ingot.*/' })
    e.remove({ output: '/extendedcrafting:.*_block.*/' })
    e.replaceInput({ input: 'extendedcrafting:black_iron_ingot' }, 'extendedcrafting:black_iron_ingot', 'gtceu:double_black_steel_plate')
    e.replaceInput({ input: 'extendedcrafting:redstone_ingot' }, 'extendedcrafting:redstone_ingot', 'gtceu:double_red_alloy_plate')

})