ServerEvents.recipes(e => {

    e.remove({ id: '/utilitarian:utility/charcoal.*/' })
    e.remove({ id: '/vintagedelight:charcoal.*/' })
    e.remove({ id: '/vintagedelight:ghost_charcoal.*/' })
    e.remove({ id: 'comforts:rope_and_nail' })
    e.remove({ id: 'craftingstation:crafting_station' })
    e.remove({ id: 'craftingstation:crafting_station_slab' })
    e.remove({ id: 'minecraft:charcoal' })
    e.remove({id: 'farmersdelight:book_from_canvas'})
    e.remove({id: 'kubejs:bound_leather'})
    e.remove({id: 'kubejs:wet_leather'})
    e.remove({id: 'minecraft:bread'})
    e.remove({id: 'woodenhopper:wooden_hopper'})
    e.replaceInput({ input: '#forge:leather' }, '#forge:leather', 'kubejs:tanned_leather')
    e.replaceInput({ input: 'minecraft:flint'}, 'minecraft:flint', 'notreepunching:flint_shard')
    e.replaceInput({ input: 'minecraft:leather' }, 'minecraft:leather', 'kubejs:tanned_leather')
    e.replaceInput({ input: 'minecraft:milk_bucket' }, 'minecraft:milk_bucket', '#forge:milk')
    e.replaceInput({ input: 'minecraft:stick', output: '#forge:tools' }, 'minecraft:stick', 'kubejs:bound_stick')
    e.replaceInput({ input: 'minecraft:string' }, 'minecraft:string', '#forge:string')

    const tools = ['knife', 'mattock', 'saw', 'pickaxe', 'shovel', 'hoe', 'axe', 'sword']
    tools.forEach(tool => {
        e.remove({ id: '/notreepunching:.*_' + tool + '$/' })
        e.remove({ output: 'minecraft:iron_' + tool })
        e.replaceInput({ input: 'minecraft:wooden_' + tool }, 'minecraft:wooden_' + tool, 'gtceu:flint_' + tool)
        e.replaceInput({ input: 'minecraft:stone_' + tool }, 'minecraft:stone_' + tool, 'gtceu:flint_' + tool)
        e.replaceInput({ input: 'minecraft:iron_' + tool }, 'minecraft:iron_' + tool, 'gtceu:iron_' + tool)
        e.replaceInput({ id: '/gtceu:shaped/' + tool + '_flint/' }, 'minecraft:stick', 'kubejs:bound_stick')
    });
    const knife_mods = ['delightful', 'ends_delight', 'farmersdelight', 'twilightdelight', 'occultism', 'moredelight']
    knife_mods.forEach(mod => {
        e.remove({id:  '/' + mod +':.*_knife/'})
        e.remove({id:  '/' + mod +':.*_machete/'})
    });

    const pptounify = ['bamboo', 'cherry']
    pptounify.forEach(wood => {
        hardenPPRecipes(e, 'minecraft', wood)   
    }); 

    e.replaceInput({ id: '/everycomp:wfha/.*/', input:  'minecraft:iron_nugget'}, 'minecraft:iron_nugget', '#forge:rods/long/iron')
    e.replaceInput({ id: '/everycomp:wfha/.*/simple.*/', input:  'minecraft:crafting_table'}, 'minecraft:crafting_table', 'craftingstation:crafting_station')
    e.replaceInput({ id: '/workshop_for_handsome_adventurer:.*/', input:  'minecraft:iron_nugget'}, 'minecraft:iron_nugget', '#forge:rods/long/iron')
    e.replaceInput({ id: '/workshop_for_handsome_adventurer:simple.*/', input:  'minecraft:crafting_table'}, 'minecraft:crafting_table', 'craftingstation:crafting_station')
    e.replaceInput({ id: 'comforts:rope_and_nail_shapeless'}, 'minecraft:iron_ingot', 'gtceu:iron_bolt')
    e.replaceInput({ mod: 'grapplemod', input:  'minecraft:lead'}, 'minecraft:lead', '#forge:rope')
    e.replaceInput({ mod: 'grapplemod', input:  'minecraft:piston'}, 'minecraft:piston', 'gtceu:hv_electric_motor')
    e.shapeless('2x notreepunching:flint_shard',['#forge:tools/hammers', 'minecraft:flint']).id('gtna:shapeless/lowtech_knapping')
    e.shapeless('craftingstation:crafting_station',['minecraft:crafting_table', '#forge:tools/saws']).id('gtna:shapeless/craftingstation')
    e.shapeless('craftingstation:crafting_station_slab',['craftingstation:crafting_station', '#forge:tools/saws']).id('gtna:shapeless/craftingstationslab')
    e.shapeless('kubejs:bound_stick',['minecraft:stick', '2x #forge:string']).id('gtna:shapeless/bound_stick')
    e.shapeless('minecraft:flint',['3x minecraft:gravel']).id('gtna:shapeless/easy_flint')
    e.shapeless('notreepunching:flint_shard',['#notreepunching:loose_rocks', 'minecraft:flint']).id('gtna:shapeless/early_knapping')
    e.shaped('woodenhopper:wooden_hopper', ['BAB', 'BCB', 'DBE'], {
        A: '#forge:chests', 
        B: '#forge:plates/wood',
        C: '#forge:gears/wood',
        D: '#forge:tools/wrenches',
        E: '#forge:tools/hammers'
    })
    e.remove({ id: 'travelersbackpack:backpack_tank' })
    e.shapeless('travelersbackpack:backpack_tank',['create:fluid_tank']).id('gtna:shapeless/backpack_tank')
    e.shaped('kubejs:bound_leather', ['ABA', 'BCB', 'ABA'], {
        A: '#forge:string', 
        B: '#forge:leather',
        C: '#forge:fabric'
    })
    e.blasting('notreepunching:plant_fiber', 'farmersdelight:straw')
    Color.DYE.forEach(color => {
        e.remove({output: 'comforts:sleeping_bag_' + color})
        e.remove({output: 'travelersbackpack:' + color + '_sleeping_bag'})
        e.shaped('comforts:sleeping_bag_' + color, ['CCC', 'BBB', 'AAA'], {
            A: 'kubejs:tanned_leather', 
            B: '#chipped:' + color + '_wool',
            C: '#chipped:' + color + '_carpet',
        }).id('gtna:sleeping_bag_' +color)
        e.shapeless('comforts:sleeping_bag_' + color,['travelersbackpack:' + color + '_sleeping_bag']).id('gtna:shapeless/sleeping_bag_conversion_1_' + color)
        e.shapeless('travelersbackpack:' + color + '_sleeping_bag',['comforts:sleeping_bag_' + color]).id('gtna:shapeless/sleeping_bag_conversion_2_' + color)
    });
    e.replaceInput({ input: 'explorers_companion:leather_hide' }, 'explorers_companion:leather_hide', 'kubejs:tanned_leather')
    e.replaceInput({ input: 'explorers_companion:wool_fabric' }, 'explorers_companion:leather_hide', '#forge:fabric')
    e.replaceInput({ input: 'minecraft:leather', id: '/minecraft:leather_(?:helmet|chestplate|leggings|boots)/' }, 'minecraft:leather', '#forge:plates/hardened_leather')

})