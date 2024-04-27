ServerEvents.recipes(e => {
    e.replaceInput({id: '/functionalstorage:.*framed.*/' }, 'minecraft:iron_nugget', 'framedblocks:framed_cube')
    e.replaceInput({id: '/functionalstorage:.*framed.*/' }, 'minecraft:iron_ingot', '#forge:double_plates/iron')
    e.replaceInput({id: '/functionalstorage:.*fluid.*/' }, 'minecraft:bucket', 'create:fluid_tank')
    e.replaceInput({id: 'functionalstorage:linking_tool' }, 'minecraft:gold_ingot', '#forge:plates/gold')
    e.replaceInput({id: 'functionalstorage:linking_tool' }, 'minecraft:diamond', '#forge:plates/diamond')
    e.replaceInput({id: 'functionalstorage:linking_tool' }, 'minecraft:paper', '#forge:plates/polyethylene')
    e.replaceInput({id: 'functionalstorage:configuration_tool' }, 'minecraft:gold_ingot', '#forge:plates/gold')
    e.replaceInput({id: 'functionalstorage:configuration_tool' }, 'minecraft:emerald', '#forge:plates/emerald')
    e.replaceInput({id: 'functionalstorage:configuration_tool' }, 'minecraft:paper', '#forge:plates/polyethylene')

    e.remove({id: '/functionalstorage:.*alternate.*/'})
    e.remove({id: 'functionalstorage:storage_controller'})
    e.remove({id: 'functionalstorage:controller_extension'})
    e.remove({id: 'functionalstorage:armory_cabinet'})

    e.shaped('functionalstorage:storage_controller', ['ADA', 'FEF', 'BCB'], {
        A: '#forge:plates/stainless_steel', 
        B: '#forge:plates/obsidian',
        C: '#forge:plates/diamond',
        D: '#gtceu:circuits/mv',
        E: '#drawers:1x1',
        F: 'minecraft:comparator'
    })
    e.shaped('functionalstorage:controller_extension', ['ADA', 'FEF', 'BCB'], {
        A: '#forge:plates/stainless_steel', 
        B: '#forge:plates/obsidian',
        C: '#forge:plates/ender_eye',
        D: '#gtceu:circuits/mv',
        E: '#drawers:1x1',
        F: 'minecraft:comparator'
    })


})