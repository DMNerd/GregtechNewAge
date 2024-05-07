
function replaceMetalTagsInCrafting(event, modid, metal){
    event.replaceInput({input: modid + ':' + metal + '_block' }, modid + ':' + metal + '_block', '#forge:storage_blocks/'+ metal)
    event.replaceInput({input: modid + ':' + metal + '_ingot' }, modid + ':' + metal + '_ingot', '#forge:ingots/'+ metal)
    event.replaceInput({input: modid + ':' + metal + '_nugget' }, modid + ':' + metal + '_nugget', '#forge:nuggets/'+ metal)
    event.replaceInput({input: '/' + modid + ':' + metal + '_(?:plate|sheet)/' }, '/' + modid + ':' + metal + '_(?:plate|sheet)/', '#forge:plates/'+ metal)
    event.replaceOutput({output: modid + ':' + metal + '_block' }, modid + ':' + metal + '_block', '#forge:storage_blocks/'+ metal)
    event.replaceOutput({output: modid + ':' + metal + '_ingot' }, modid + ':' + metal + '_ingot', '#forge:ingots/'+ metal)
    event.replaceOutput({output: modid + ':' + metal + '_nugget' }, modid + ':' + metal + '_nugget', '#forge:nuggets/'+ metal)
    event.replaceOutput({output: '/' + modid + ':' + metal + '_(?:plate|sheet)/' }, '/' + modid + ':' + metal + '_(?:plate|sheet)/', '#forge:plates/'+ metal)
}
function replaceMetalInCrafting(event, modid, metal, metalToReplace){
    event.replaceInput({input: modid + ':' + metal + '_block' }, modid + ':' + metal + '_block', '#forge:storage_blocks/'+ metalToReplace)
    event.replaceInput({input: modid + ':' + metal + '_ingot' }, modid + ':' + metal + '_ingot', '#forge:ingots/'+ metalToReplace)
    event.replaceInput({input: modid + ':' + metal + '_nugget' }, modid + ':' + metal + '_nugget', '#forge:nuggets/'+ metalToReplace)
    event.replaceInput({input: '/' + modid + ':' + metal + '_(?:plate|sheet)/' }, '/' + modid + ':' + metal + '_(?:plate|sheet)/', '#forge:plates/'+ metalToReplace)
    event.replaceOutput({output: modid + ':' + metal + '_block' }, modid + ':' + metal + '_block', '#forge:storage_blocks/'+ metalToReplace)
    event.replaceOutput({output: modid + ':' + metal + '_ingot' }, modid + ':' + metal + '_ingot', '#forge:ingots/'+ metalToReplace)
    event.replaceOutput({output: modid + ':' + metal + '_nugget' }, modid + ':' + metal + '_nugget', '#forge:nuggets/'+ metalToReplace)
    event.replaceOutput({output: '/' + modid + ':' + metal + '_(?:plate|sheet)/' }, '/' + modid + ':' + metal + '_(?:plate|sheet)/', '#forge:plates/'+ metalToReplace)

}
function removeBlockRecipes(event, modid, material){
    event.remove({ id: '/' + modid + ':.*' + material + '.*_block.*/' })
}
function removeIngotRecipes(event, modid, material){
    event.remove({ id: '/' + modid + ':.*' + material + '.*_ingot.*/' })
}
function removeNuggetRecipes(event, modid, material){
    event.remove({ id: '/' + modid + ':.*' + material + '.*_nugget.*/' })
}
function removeVanillaMetalurgy(event, modid, material){
    removeBlockRecipes(event, modid, material)
    removeIngotRecipes(event, modid, material)
    removeNuggetRecipes(event, modid, material)
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
        A: '/' +modid + ':' + woodtype + '_(?:planks|cube|mosaic$)/', 
        B: '#forge:rods/wood'
    }).id('gtna:shaped/' + modid + '/'+ woodtype +'_fence')
    event.remove({ output: '/' + modid + ':.*' + woodtype + '.*_fence_gate/' })
    event.shaped('2x ' + modid + ':' + woodtype + '_fence_gate', ['CDC', 'BAB', 'BAB'], {
        A: '/' + modid + ':' + woodtype + '_(?:planks|cube|mosaic$)/', 
        B: '#forge:rods/wood',
        C: '#forge:screws/iron',
        D: '#forge:tools/screwdrivers'
    }).id('gtna:shaped/' + modid + '/'+ woodtype +'_fence_gate_screwing')
    event.shaped(modid + ':' + woodtype + '_fence_gate', ['C C', 'BAB', 'BAB'], {
        A: '/' + modid + ':' + woodtype + '_(?:planks|cube|mosaic$)/', 
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
    event.recipes.gtceu.assembler('gtna:assembler/ladder_' + woodtype )
        .itemInputs(['/' + modid + ':' + woodtype + '_slab.*/', '5x #forge:rods/wood'])
        .itemOutputs('2x ' + modid + ':' + woodtype + '_ladder')
        .circuit(7)
        .EUt(1)
        .duration(100);
}
function hardenMetalLadderRecipes(event, modid, metal){
    event.remove({ output: '/' + modid + ':.*' + metal + '.*_ladder/' })
    event.shaped('/' + modid + ':.*' + metal + '.*_ladder/', ['BEB', 'CBC', 'BDB'], {
        B: '#forge:rods/' + metal,
        C: '#forge:screws/' + metal,
        D: '#forge:tools/wrenches',
        E: '#forge:tools/screwdrivers'
    }).id('gtna:shaped/' + modid + '/'+ metal +'_ladder')
    event.recipes.gtceu.assembler('gtna:assembler/ladder_' + metal )
        .itemInputs('7x #forge:rods/wood')
        .itemOutputs('/' + modid + ':.*' + metal + '.*_ladder/')
        .circuit(7)
        .EUt(1)
        .duration(100);
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
    event.recipes.gtceu.assembler('gtna:assembler/pressure_plate_' + material )
        .itemInputs(['2x /' + modid + ':' + material + '_slab.*/', '#forge:springs/iron'])
        .itemOutputs('2x /' + modid + ':' + material + '.*_pressure_plate/')
        .EUt(7)
        .duration(100);
}
function hardenMetalPPRecipes(event, modid, metal){
    event.remove({ output: '/' + modid + ':.*' + metal + '.*_pressure_plate/' })
    event.shaped('/' + modid + ':' + metal + '.*_pressure_plate/', ['CDC', 'ABA', 'CEC'], {
        A: '#forge:plates/' + metal, 
        B: '#forge:springs/iron',
        C: '#forge:bolts/' + metal,
        D: '#forge:tools/mallets',
        E: '#forge:tools/screwdrivers'
    }).id('gtna:shaped/' + modid + '/'+ metal +'_pressure_plate')
    event.recipes.gtceu.assembler('gtna:assembler/pressure_plate_' + metal )
        .itemInputs(['#forge:plates/' + metal, '#forge:springs/iron'])
        .itemOutputs('2x /' + modid + ':' + metal + '.*_pressure_plate/')
        .EUt(7)
        .duration(100);
}
function hardenMetalDoorRecipes(event, modid, metal){
    event.remove({ output: '/' +  modid + ':.*' + metal + '.*_trapdoor/' })
    event.shaped(modid + ':' + metal + '_trapdoor', ['ABA', 'BBB', 'ABA'], {
        A: '#forge:plates/' + metal, 
        B: '#forge:rods/' + metal
    }).id('gtna:shaped/' + modid + '/'+ metal +'_trapdoor')
    event.remove({ output: '/' + modid + ':.*' + metal + '.*_door/' })
    event.shaped(modid + ':' + metal + '_door', ['ABE', 'ACD', 'AAF'], {
        A: '#forge:plates/' + metal, 
        B: modid + ':' + metal + '_trapdoor',
        C: '#forge:rings/iron',
        D: '#forge:screws/iron',
        E: '#forge:tools/screwdrivers',
        F: '#forge:tools/saws'
    }).id('gtna:shaped/' + modid + '/'+ metal +'_door')
}
function hardenBarsRecipes(event, modid, material){
    event.remove({ id: modid + ':' + material + '_bars' })
    event.shaped( modid + ':' + material + '_bars', [' B ', 'AAA', 'AAA'], {
        A: '#forge:rods/' + material, 
        B: '#forge:tools/hammers'
    }).id('gtna:shaped/' + modid + '/'+ material +'_bars')
}
function hardenButtonRecipes(event, modid, material){
    event.remove({ output: '/' + modid + ':.*' + material + '.*_button/' })
    event.shapeless('6x /' + modid + ':' + material + '.*_button/',['/' + modid + ':' + material + '.*_pressure_plate/', '#forge:tools/saws']).id('gtna:shapeless/' + modid + '/'+ material +'_button')
    event.recipes.gtceu.cutter('gtna:cutter/lubricant/button_' + material )
        .itemInputs('/' + modid + ':' + material + '.*_pressure_plate/')
        .itemOutputs('12x /' + modid + ':.*' + material + '.*_button/')
        .inputFluids("gtceu:lubricant 1")
        .EUt(7)
        .duration(20);
    event.recipes.gtceu.cutter('gtna:cutter/distilled/button_' + material )
        .itemInputs('/' + modid + ':' + material + '.*_pressure_plate/')
        .itemOutputs('12x /' + modid + ':.*' + material + '.*_button/')
        .inputFluids("gtceu:distilled_water 3")
        .EUt(7)
        .duration(20);
    event.recipes.gtceu.cutter('gtna:cutter/water/button_' + material )
        .itemInputs('/' + modid + ':' + material + '.*_pressure_plate/')
        .itemOutputs('12x /' + modid + ':.*' + material + '.*_button/')
        .inputFluids("minecraft:water 4")
        .EUt(7)
        .duration(20);
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
    event.shaped(modid + ':' + material + '_shovel', ['CBD', ' E ', ' E '], {
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
    event.greenhouse(woodType[0])
        .notConsumable(woodType[0])
        .inputFluids("water 10000")
        .itemOutputs(
            `64x ${woodType[1]}`, 
            `6x ${woodType[0]}`
        )
        .duration(1200)
        .EUt(40)
        .circuit(1);

    event.greenhouse(`${woodType[0]}_fertiliser`)
        .notConsumable(woodType[0])
        .itemInputs("4x gtceu:fertilizer")
        .inputFluids("water 10000")
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
    event.greenhouse(woodType[0])
        .notConsumable(woodType[0])
        .inputFluids("water 10000")
        .itemOutputs(
            `16x ${woodType[1]}`, 
            `2x ${woodType[0]}`, 
            `16x ${woodType[2]}`
        )
        .duration(1200)
        .EUt(40)
        .circuit(1);
    event.greenhouse(`${woodType[0]}_fertiliser`)
        .notConsumable(woodType[0])
        .itemInputs("4x gtceu:fertilizer")
        .inputFluids("water 10000")
        .itemOutputs(
            `32x ${woodType[1]}`,
            `6x ${woodType[0]}`,
            `32x ${woodType[2]}`
        )
        .duration(900)
        .EUt(60)
        .circuit(2);
  }
function greenhouseplantrecipe(event, seedType){
    event.greenhouse(seedType[0])
        .notConsumable(seedType[0])
        .inputFluids("water 1000")
        .itemOutputs(`${seedType[2]}x ${seedType[1]}`)
        .duration(1200)
        .EUt(40)
        .circuit(1);
    event.greenhouse(seedType[0] + "_fertilizer")
        .notConsumable(seedType[0])
        .itemInputs("4x gtceu:fertilizer")
        .inputFluids("water 1000")
        .itemOutputs(`${2 * seedType[2]}x ${seedType[1]}`)
        .duration(900)
        .EUt(60)
        .circuit(2);
  }
function greenhouseoreberryrecipe(event, ore){
    event.greenhouse('oreberriesreplanted:' + ore[0] + '_oreberry_bush')
        .notConsumable('/oreberriesreplanted:' + ore[0] + '_.*berry_bush/')
        .inputFluids("distilled_water 1000")
        .itemOutputs(
            '6x /oreberriesreplanted:' + ore[0] + '_.*berry$/'
        )
        .duration(1200)
        .EUt(40)
        .circuit(3);

    event.greenhouse('oreberriesreplanted:' + ore[0] + '_oreberry_bush_fertilised')
        .notConsumable('/oreberriesreplanted:' + ore[0] + '_.*berry_bush/')
        .itemInputs("4x gtceu:fertilizer")
        .inputFluids("distilled_water 1000")
        .itemOutputs(
            '12x /oreberriesreplanted:' + ore[0] + '_.*berry$/'
        )
        .duration(900)
        .EUt(60)
        .circuit(4);
  }
function crossbreed(event, breedRecipe){
    event.greenhouse('crosbreeding/' + breedRecipe[2])
        .itemInputs([breedRecipe[0], breedRecipe[1], "12x gtceu:fertilizer"])
        .inputFluids("water 2000")
        .itemOutputs(breedRecipe[2])
        .duration(20000)
        .EUt(40)
        .circuit(5);
}
function oreberry_crossbreed(event, parent, parent2, result, fluid){
    event.greenhouse('oreberry_crosbreeding/' + result)
        .itemInputs(['oreberriesreplanted:' + parent, 'oreberriesreplanted:' + parent2, "6x gtceu:fertilizer"])
        .inputFluids(fluid)
        .itemOutputs('oreberriesreplanted:' + result)
        .duration(20000)
        .EUt(40)
        .circuit(6);
}
function multiSmelt(e, input, output){
    event.smelting(input, output)
    event.blasting(input, output)
    event.campfireCooking(input, output)
}
function mythicbotanyInfuser(event, inputs, output, outputCount, manaCost){
    event.remove({id: '/mythicbotany:mythicbotany_infusion/.*/', output: output})
    event.custom({
            "type": "mythicbotany:infuser",
            "fromColor": 16711821,
            "group": "infuser",
            "ingredients": [
              {
                "tag": inputs[0]
              },
              {
                "tag": inputs[1]
              },
              {
                "tag": inputs[2]
              }
            ],
            "mana": manaCost,
            "output": {
              "count": outputCount,
              "item": output
            },
            "toColor": 16750080
        }).id('gtna:mythicbotany/infuser/' + output.replace(':', '_'))
}
function botanicpledgeRital(event, reagent, inputs, output, manaCost, keepNbtOfReagent){
    event.remove({id: '/botanicpledge:botanic_ritual/.*/', output: output})
    event.custom({
            "type": "botanicpledge:botanic_ritual",
            "reagent": {
              "item": reagent
            },
            "pedestalItems": [
              {
                "tag": inputs[0]
              },
              {
                "tag": inputs[1]
              },
              {
                "tag": inputs[2]
              },
              {
                "tag": inputs[3]
              },
              {
                "tag": inputs[4]
              },
              {
                "tag": inputs[5]
              },
              {
                "tag": inputs[6]
              },
              {
                "tag": inputs[7]
              }
            ],
            "output": {
              "item": output
            },
            "manaCost": manaCost,
            "keepNbtOfReagent": keepNbtOfReagent
        }).id('gtna:botanicpledge/ritual/' + output.replace(':', '_'))
}

function xtoneRecipe(event, input1, input2, output, modifier) {
    event.remove({ id: output });
    event.recipes.gtceu.mixer(output)
      .itemInputs(input1, input2)
      .itemOutputs(`${modifier}x ${output}`)
      .EUt(2)
      .duration(20);
  }