ServerEvents.recipes(e => {

    e.replaceInput({ input: 'minecraft:flint' }, 'minecraft:flint', 'notreepunching:flint_shard')
    e.replaceInput({ input: 'minecraft:leather' }, 'minecraft:leather', 'leatherprocessing:dried_leather')
    e.replaceInput({ input: 'minecraft:stick', output: '#forge:tools' }, 'minecraft:stick', 'kubejs:bound_stick')

    e.remove({ id: '/notreepunching:flint_/' })
    e.remove({ id: '/notreepunching:.*_knife/' })
    e.remove({ id: '/notreepunching:.*_mattock/' })
    e.remove({ id: '/notreepunching:.*_saw/' })
    let tools = ['shovel', 'pickaxe', 'axe', 'hoe', 'sword']
    tools.forEach(tool => {
        e.replaceInput({ input: 'minecraft:wooden_' + tool }, 'minecraft:wooden_' + tool, 'gtceu:flint_' + tool)
        e.replaceInput({ input: 'minecraft:stone_' + tool }, 'minecraft:wooden_' + tool, 'gtceu:flint_' + tool)
        e.replaceInput({ input: 'minecraft:iron_' + tool }, 'minecraft:iron_' + tool, 'gtceu:iron_' + tool)
        e.remove({ output: 'minecraft:iron_' + tool })
    });
    let knife_mods = ['delightful', 'ends_delight', 'farmersdelight', 'twilightdelight', 'occultism']
    knife_mods.forEach(mod => {
        e.remove({id:  '/' + mod +':.*_knife/'})
    });
    e.shapeless('kubejs:bound_stick',['minecraft:stick', '2x #forge:string']).id('gtna:shapeless/bound_stick')
    e.shapeless('minecraft:flint',['3x minecraft:gravel']).id('gtna:shapeless/easy_flint')
    e.shapeless('notreepunching:flint_shard',['#notreepunching:loose_rocks', 'minecraft:flint']).id('gtna:shapeless/early_knapping')
    e.shapeless('2x notreepunching:flint_shard',['#forge:tools/hammers', 'minecraft:flint']).id('gtna:shapeless/lowtech_knapping')
    e.remove({ id: 'woodenbucket:wooden_bucket' })
    e.shaped('woodenbucket:wooden_bucket', ['ABA', ' A '], {
        A: '#minecraft:planks', 
        B: '#forge:tools/files'
    })
    e.remove({ id: 'craftingstation:crafting_station' })
    e.remove({ id: 'craftingstation:crafting_station_slab' })
    e.shapeless('craftingstation:crafting_station',['minecraft:crafting_table', '#forge:tools/saws']).id('gtna:shapeless/craftingstation')
    e.shapeless('craftingstation:crafting_station_slab',['craftingstation:crafting_station', '#forge:tools/saws']).id('gtna:shapeless/craftingstationslab')
    e.replaceInput({ id: '/workshop_for_handsome_adventurer:simple.*/', input:  'minecraft:crafting_table'}, 'minecraft:crafting_table', 'craftingstation:crafting_station')
    e.replaceInput({ id: '/everycomp:wfha/.*/simple.*/', input:  'minecraft:crafting_table'}, 'minecraft:crafting_table', 'craftingstation:crafting_station')
    e.replaceInput({ id: '/workshop_for_handsome_adventurer:.*/', input:  'minecraft:iron_nugget'}, 'minecraft:iron_nugget', '#forge:rods/long/iron')
    e.replaceInput({ id: '/everycomp:wfha/.*/', input:  'minecraft:iron_nugget'}, 'minecraft:iron_nugget', '#forge:rods/long/iron')
    e.replaceInput({ mod: 'grapplemod', input:  'minecraft:lead'}, 'minecraft:lead', '#forge:rope')
    e.replaceInput({ mod: 'grapplemod', input:  'minecraft:piston'}, 'minecraft:piston', 'gtceu:hv_electric_motor')
    
    e.remove({ id: 'travelersbackpack:backpack_tank' })
    e.shapeless('travelersbackpack:backpack_tank',['create:fluid_tank']).id('gtna:shapeless/backpack_tank')

})