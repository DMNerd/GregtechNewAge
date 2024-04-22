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
function hardenPickaxeRecipes(event, modid, material, stick){
    event.remove({output: '/' + modid + ':'+ material + '_pick.*/'})
    event.shaped('/' + modid + ':' + material + '_pick.*/', ['BAA', 'CED', ' E '], {
        A: '#forge:ingots/' + material, 
        B: '#forge:plates/' + material,
        C: '#forge:tools/hammers',
        D: '#forge:tools/files',
        E: stick
    }).id('gtna:'+ modid + '/'+ material + '_pick')
}
function hardenAxeRecipes(event, modid, material, stick){
    event.remove({output: modid + ':'+ material + '_axe'})
    event.shaped(modid + ':' + material + '_axe', ['BAA', 'BED', 'CE '], {
        A: '#forge:ingots/' + material, 
        B: '#forge:plates/' + material,
        C: '#forge:tools/hammers',
        D: '#forge:tools/files',
        E: stick
    }).id('gtna:'+ modid + '/'+ material + '_axe')
}
function hardenShovelRecipes(event, modid, material, stick){
    event.remove({output: modid + ':'+ material + '_shovel'})
    event.shaped(modid + ':' + material + '_shovel', ['CAD', ' E ', ' E '], {
        A: '#forge:ingots/' + material, 
        B: '#forge:plates/' + material,
        C: '#forge:tools/hammers',
        D: '#forge:tools/files',
        E: stick
    }).id('gtna:'+ modid + '/'+ material + '_shovel')
}
function hardenHoeRecipes(event, modid, material, stick){
    event.remove({output: modid + ':'+ material + '_hoe'})
    event.shaped(modid + ':' + material + '_hoe', ['BAD', 'CE ', ' E '], {
        A: '#forge:ingots/' + material, 
        B: '#forge:plates/' + material,
        C: '#forge:tools/hammers',
        D: '#forge:tools/files',
        E: stick
    }).id('gtna:'+ modid + '/'+ material + '_hoe')
}
function hardenSwordRecipes(event, modid, material, stick){
    event.remove({output: modid + ':'+ material + '_sword'})
    event.shaped(modid + ':' + material + '_sword', [' B ', 'DBC', ' E '], {
        B: '#forge:plates/' + material,
        C: '#forge:tools/hammers',
        D: '#forge:tools/files',
        E: stick
    }).id('gtna:'+ modid + '/'+ material + '_sword')
}
function hardenToolRecipes(event, modid, material, stick){
    hardenPickaxeRecipes(event, modid, material, stick)    
    hardenAxeRecipes(event, modid, material, stick)  
    hardenShovelRecipes(event, modid, material, stick)  
    hardenHoeRecipes(event, modid, material, stick)  
    hardenSwordRecipes(event, modid, material, stick)    
}
function hardenArmorRecipes(event, modid, material){
    event.remove({output: modid + ':'+ material + '_helmet'})
    event.shaped(modid + ':' + material + '_helmet', ['AAA', 'ABA'], {
        A: '#forge:plates/' + material,
        B: '#forge:tools/hammers',
    }).id('gtna:'+ modid + '/'+ material + '_helmet')
    event.remove({output: modid + ':'+ material + '_chestplate'})
    event.shaped(modid + ':' + material + '_chestplate', ['ABA', 'AAA', 'AAA'], {
        A: '#forge:plates/' + material,
        B: '#forge:tools/hammers',
    }).id('gtna:'+ modid + '/'+ material + '_chestplate')
    event.remove({output: modid + ':'+ material + '_leggings'})
    event.shaped(modid + ':' + material + '_leggings', ['AAA', 'ABA', 'A A'], {
        A: '#forge:plates/' + material,
        B: '#forge:tools/hammers',
    }).id('gtna:'+ modid + '/'+ material + '_leggings')
    event.remove({output: modid + ':'+ material + '_boots'})
    event.shaped(modid + ':' + material + '_boots', ['A A', 'ABA'], {
        A: '#forge:plates/' + material,
        B: '#forge:tools/hammers',
    }).id('gtna:'+ modid + '/'+ material + '_boots')
}