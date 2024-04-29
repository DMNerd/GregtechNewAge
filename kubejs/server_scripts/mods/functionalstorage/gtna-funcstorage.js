ServerEvents.recipes(e => {

    const upgradeMaterials = [['copper', 'copper'], ['gold', 'copper'], ['diamond', 'gold'], ['netherite', 'diamond']]
    
    function fstorageUpgrade(material){
        e.remove({output: 'functionalstorage:iron_downgrade'})
        e.shaped('functionalstorage:' + material[0] + '_upgrade', ['ADA', 'DBD', 'ACA'], {
            A: '#forge:plates/' + material[0], 
            B: '#forge:plates/' + material[1], 
            C: '#forge:rods/' + material[0],
            D: 'ironchests:blank_chest_upgrade'
        }).id('gtna/functionalstorage/upgrade_' + material[0])
    }
    
    upgradeMaterials.forEach(material => {
        fstorageUpgrade(material)
    });

    e.replaceInput({id: '/functionalstorage:.*compact.*/' }, '#forge:double_plates/iron', '#forge:double_plates/red_alloy')
    e.replaceInput({id: '/functionalstorage:.*compact.*/' }, 'minecraft:iron_ingot', '#forge:double_plates/red_alloy')
    e.replaceInput({id: '/functionalstorage:.*compact.*/' }, 'minecraft:stone', '#forge:plates/iron')
    e.replaceInput({id: '/functionalstorage:.*fluid.*/' }, 'minecraft:bucket', 'create:fluid_tank')
    e.replaceInput({id: '/functionalstorage:.*framed.*/' }, 'minecraft:iron_ingot', '#forge:double_plates/iron')
    e.replaceInput({id: '/functionalstorage:.*framed.*/' }, 'minecraft:iron_nugget', 'framedblocks:framed_cube')
    e.replaceInput({id: 'functionalstorage:configuration_tool' }, '#functionalstorage:drawer', '#gtceu:circuits/lv')
    e.replaceInput({id: 'functionalstorage:configuration_tool' }, 'minecraft:emerald', '#forge:plates/emerald')
    e.replaceInput({id: 'functionalstorage:configuration_tool' }, 'minecraft:gold_ingot', '#forge:plates/gold')
    e.replaceInput({id: 'functionalstorage:configuration_tool' }, 'minecraft:paper', '#forge:plates/polyethylene')
    e.replaceInput({id: 'functionalstorage:framed_controller_extension' }, '#functionalstorage:drawer', 'framedblocks:framed_cube')
    e.replaceInput({id: 'functionalstorage:framed_controller_extension' }, 'minecraft:repeater', 'functionalstorage:controller_extension')
    e.replaceInput({id: 'functionalstorage:framed_storage_controller' }, '#functionalstorage:drawer', 'framedblocks:framed_cube')
    e.replaceInput({id: 'functionalstorage:framed_storage_controller' }, 'minecraft:comparator', 'functionalstorage:storage_controller')
    e.replaceInput({id: 'functionalstorage:linking_tool' }, '#functionalstorage:drawer', '#gtceu:circuits/lv')
    e.replaceInput({id: 'functionalstorage:linking_tool' }, 'minecraft:diamond', '#forge:plates/diamond')
    e.replaceInput({id: 'functionalstorage:linking_tool' }, 'minecraft:gold_ingot', '#forge:plates/gold')
    e.replaceInput({id: 'functionalstorage:linking_tool' }, 'minecraft:paper', '#forge:plates/polyethylene')

    e.remove({id: '/functionalstorage:.*alternate.*/'})
    e.remove({id: 'functionalstorage:storage_controller'})
    e.remove({id: 'functionalstorage:controller_extension'})
    e.remove({id: 'functionalstorage:armory_cabinet'})

    e.shaped('functionalstorage:storage_controller', ['ADA', 'FEF', 'BCB'], {
        A: '#forge:plates/stainless_steel', 
        B: '#forge:plates/obsidian',
        C: '#forge:plates/diamond',
        D: '#gtceu:circuits/mv',
        E: '#functionalstorage:drawer',
        F: 'minecraft:comparator'
    })

    e.shaped('functionalstorage:controller_extension', ['ADA', 'FEF', 'BCB'], {
        A: '#forge:plates/stainless_steel', 
        B: '#forge:plates/obsidian',
        C: '#forge:plates/ender_eye',
        D: '#gtceu:circuits/mv',
        E: '#functionalstorage:drawer',
        F: 'minecraft:repeater'
    })
    e.remove({output: 'functionalstorage:void_upgrade'})
    e.shaped('functionalstorage:void_upgrade', ['BAB', 'ACA', 'BAB'], {
        A: '#forge:plates/iron', 
        B: '#forge:plates/obsidian', 
        C: 'trashcans:ultimate_trash_can'
    }).id('gtna/functionalstorage/upgrade_void')
    e.remove({output: 'functionalstorage:iron_downgrade'})
    e.shaped('functionalstorage:iron_downgrade', ['ADA', 'DBD', 'ACA'], {
        A: '#forge:plates/rubber', 
        B: '#forge:dusts/soul_sand', 
        C: '#forge:rods/iron',
        D: 'ironchests:blank_chest_upgrade'
    }).id('gtna/functionalstorage/iron_downgrade')

})