function replaceMetalInCrafting(event, modid, metal){
    event.replaceInput({input: modid + ':' + metal + '_block' }, modid + ':' + metal + '_block', 'gtceu:'+ metal + '_block')
    event.replaceInput({input: modid + ':' + metal + '_ingot' }, modid + ':' + metal + '_ingot', 'gtceu:'+ metal + '_ingot')
    event.replaceInput({input: modid + ':' + metal + '_nugget' }, modid + ':' + metal + '_ingot', 'gtceu:'+ metal + '_ingot')
}
function removeBlockNuggetRecipes(event, modid, material){
    event.remove({ id: '/' + modid + ':.*' + material + '.*_(?:block|nugget).*/' })
}
function hardenWoodenRecipes(event, modid, woodtype){
    event.remove({ output: '/' +  modid + ':.*' + woodtype + '.*_trapdoor/' })
    event.shaped(modid + ':' + woodtype + '_trapdoor', ['ABA', 'BBB', 'ABA'], {
        A: '/' + modid + ':' + woodtype + '_slab.*/', 
        B: '#forge:rods/wood'
    }).id('gtna:shaped/' + modid + '/'+ woodtype +'_trapdoor')
    event.remove({ output: '/' + modid + ':.*' + woodtype + '.*_door/' })
    event.shaped(modid + ':' + woodtype + '_door', ['ABE', 'ACD', 'AAF'], {
        A: '/' + modid + ':' + woodtype + '_(?:planks|cube)/', 
        B: modid + ':' + woodtype + '_trapdoor',
        C: '#forge:rings/iron',
        D: '#forge:screws/iron',
        E: '#forge:tools/screwdrivers',
        F: '#forge:tools/saws'
    }).id('gtna:shaped/' + modid + '/'+ woodtype +'_door')
    event.remove({ output: '/' + modid + ':.*' + woodtype + '.*_fence/' })
    event.shaped(modid + ':' + woodtype + '_fence', ['ABA', 'ABA', 'ABA'], {
        A: '/' +modid + ':' + woodtype + '_(?:planks|cube)/', 
        B: '#forge:rods/wood'
    }).id('gtna:shaped/' + modid + '/'+ woodtype +'_fence')
    event.remove({ output: '/' + modid + ':.*' + woodtype + '.*_fence_gate/' })
    event.shaped('2x ' + modid + ':' + woodtype + '_fence_gate', ['CDC', 'BAB', 'BAB'], {
        A: '/' + modid + ':' + woodtype + '_(?:planks|cube)/', 
        B: '#forge:rods/wood',
        C: '#forge:screws/iron',
        D: '#forge:tools/screwdrivers'
    }).id('gtna:shaped/' + modid + '/'+ woodtype +'_fence_gate_screwing')
    event.shaped(modid + ':' + woodtype + '_fence_gate', ['C C', 'BAB', 'BAB'], {
        A: '/' + modid + ':' + woodtype + '_(?:planks|cube)/', 
        B: '#forge:rods/wood',
        C: '#forge:shards/flint'
    }).id('gtna:shaped/' + modid + '/'+ woodtype +'_fence_gate_simple')
}
function hardenLadderRecipes(event, modid, woodtype){
    event.remove({ output: '/' + modid + ':.*' + woodtype + '.*_ladder/' })
    event.shaped(modid + ':' + woodtype + '_ladder', ['BCB', 'BAB', 'BDB'], {
        A: '/' + modid + ':' + woodtype + '_slab.*/', 
        B: '#forge:rods/wood',
        C: '#forge:tools/mallets',
        D: '#forge:tools/hammers'
    }).id('gtna:shaped/' + modid + '/'+ woodtype +'_ladder')
}
function hardenPPRecipes(event, modid, material){
    event.remove({ output: '/' + modid + ':.*' + material + '.*_pressure_plate/' })
    event.shaped('/' + modid + ':' + material + '.*_pressure_plate/', ['CDC', 'ABA', 'CEC'], {
        A: '/' + modid + ':' + material + '_slab.*/', 
        B: '#forge:springs/iron',
        C: '#forge:bolts/wood',
        D: '#forge:tools/mallets',
        E: '#forge:tools/screwdrivers'
    }).id('gtna:shaped/' + modid + '/'+ material +'_pressure_plate')
}
function hardenButtonRecipes(event, modid, material){
    event.remove({ output: '/' + modid + ':.*' + material + '.*_button/' })
    event.shapeless('/' + modid + ':' + material + '.*_button/',[modid + ':' + material + '_pressure_plate', '#forge:tools/saws']).id('gtna:shapeless/' + modid + '/'+ material +'_button')
}