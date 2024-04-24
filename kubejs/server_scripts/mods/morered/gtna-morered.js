ServerEvents.recipes(e => {

    e.remove({ id: '/morered:red_alloy_ingot.*/' })
    e.replaceInput({ mod: 'morered' }, 'minecraft:redstone', 'morered:red_alloy_wire')
    e.replaceInput({ mod: 'morered' }, 'minecraft:quartz', '#forge:plates/nether_quartz')

})