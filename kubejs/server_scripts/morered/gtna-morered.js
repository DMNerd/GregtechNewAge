ServerEvents.recipes(e => {

    e.remove({ id: '/morered:red_alloy_ingot.*/' })
    e.replaceInput({ mod: 'morered' }, 'minecraft:redstone', 'morered:red_alloy_wire')

})