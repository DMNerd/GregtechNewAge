ServerEvents.recipes(e => {
    e.replaceInput({id: '/functionalstorage:.*framed.*/' }, 'minecraft:iron_nugget', 'framedblocks:framed_cube')
    e.replaceInput({id: '/functionalstorage:.*framed.*/' }, 'minecraft:iron_ingot', '#forge:double_plates/iron')
    e.replaceInput({id: '/functionalstorage:.*fluid.*/' }, 'minecraft:bucket', 'create:fluid_tank')

    e.remove({id: '/functionalstorage:.*alternate.*/'})
    e.remove({id: 'functionalstorage:storage_controller'})
    e.remove({id: 'functionalstorage:controller_extension'})
    e.remove({id: 'functionalstorage:armory_cabinet'})

})