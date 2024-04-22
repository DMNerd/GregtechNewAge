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
function greenhousetreerecipe(event, woodType){
    event.recipes.gtceu.greenhouse(woodType[0])
        .notConsumable(woodType[0])
        .inputFluids("water 1000")
        .itemOutputs(
            `64x ${woodType[1]}`, 
            `6x ${woodType[0]}`
        )
        .duration(1200)
        .EUt(40)
        .circuit(1);

    event.recipes.gtceu.greenhouse(`${woodType[0]}_fertiliser`)
        .notConsumable(woodType[0])
        .itemInputs("4x gtceu:fertilizer")
        .inputFluids("water 1000")
        .itemOutputs(
            `64x ${woodType[1]}`,
            `64x ${woodType[1]}`,
            `12x ${woodType[0]}`
        )
        .duration(900)
        .EUt(60)
        .circuit(2);
  }
function greenhousefruittreerecipe(event, woodType){
    event.recipes.gtceu.greenhouse(woodType[0])
        .notConsumable(woodType[0])
        .inputFluids("water 1000")
        .itemOutputs(
            `64x ${woodType[1]}`, 
            `6x ${woodType[0]}`, 
            `16x ${woodType[2]}`
        )
        .duration(1200)
        .EUt(40)
        .circuit(1);
    event.recipes.gtceu.greenhouse(`${woodType[0]}_fertiliser`)
        .notConsumable(woodType[0])
        .itemInputs("4x gtceu:fertilizer")
        .inputFluids("water 1000")
        .itemOutputs(
            `64x ${woodType[1]}`,
            `64x ${woodType[1]}`,
            `12x ${woodType[0]}`,
            `32x ${woodType[2]}`
        )
        .duration(900)
        .EUt(60)
        .circuit(2);
  }
function greenhouseplantrecipe(event, seedType){
    event.recipes.gtceu.greenhouse(seedType[0])
        .notConsumable(seedType[0])
        .inputFluids("water 1000")
        .itemOutputs(`${seedType[2]}x ${seedType[1]}`)
        .duration(1200)
        .EUt(40)
        .circuit(1);
    event.recipes.gtceu.greenhouse(seedType[0] + "_fertilizer")
        .notConsumable(seedType[0])
        .itemInputs("4x gtceu:fertilizer")
        .inputFluids("water 1000")
        .itemOutputs(`${2 * seedType[2]}x ${seedType[1]}`)
        .duration(900)
        .EUt(60)
        .circuit(2);
  }
function greenhouseoreberryrecipe(event, ore){
    event.recipes.gtceu.greenhouse('oreberriesreplanted:' + ore[0] + '_oreberry_bush')
        .notConsumable('oreberriesreplanted:' + ore[0] + '_oreberry_bush')
        .inputFluids("distilled_water 1000")
        .itemOutputs(
            '6x /oreberriesreplanted:' + ore[0] + '_.*berry/'
        )
        .duration(1200)
        .EUt(40)
        .circuit(3);

    event.recipes.gtceu.greenhouse('oreberriesreplanted:' + ore[0] + '_oreberry_bush_fertilised')
        .notConsumable('oreberriesreplanted:' + ore[0] + '_oreberry_bush')
        .itemInputs("4x gtceu:fertilizer")
        .inputFluids("distilled_water 1000")
        .itemOutputs(
            '12x /oreberriesreplanted:' + ore[0] + '_.*berry/'
        )
        .duration(900)
        .EUt(60)
        .circuit(4);
  }
function crossbreed(event, breedRecipe){
    event.recipes.gtceu.greenhouse('crosbreeding/' + breedRecipe[2])
        .itemInputs([breedRecipe[0], breedRecipe[1], "12x gtceu:fertilizer"])
        .inputFluids("water 2000")
        .itemOutputs(breedRecipe[2])
        .duration(20000)
        .EUt(40)
        .circuit(5);
}
function oreberry_crossbreed(event, parent, parent2, result, fluid){
    event.recipes.gtceu.greenhouse('oreberry_crosbreeding/' + result)
        .itemInputs(['oreberriesreplanted:' + parent, 'oreberriesreplanted:' + parent2, "6x gtceu:fertilizer"])
        .inputFluids(fluid)
        .itemOutputs('oreberriesreplanted:' + result)
        .duration(20000)
        .EUt(40)
        .circuit(6);
}