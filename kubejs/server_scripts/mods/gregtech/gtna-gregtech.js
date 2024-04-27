ServerEvents.recipes(e => {
    const greg = e.recipes.gtceu;

    e.replaceInput({output: '/gtceu:.*infinite_water_cover.*/' }, 'minecraft:cauldron', 'bloodmagic:watersigil')


    e.remove({ output: /gtceu:.*mana_steel.*/ })
    e.remove({ output: /gtceu:.*terra_steel.*/ })
    e.remove({ output: /gtceu:dense_.*/, input:  /gtceu:.*_ingot$/ })

    e.shaped("gtceu:greenhouse", ["GGG", "CHC", "PUP"], {
        G: "gtceu:tempered_glass",
        C: "#gtceu:circuits/mv",
        H: "gtceu:mv_machine_hull",
        P: "gtceu:mv_electric_piston",
        U: "gtceu:mv_electric_pump",
    });
    greg.assembler('gtna:gtceu/assembler/golden_lasso')
        .itemInputs(['#forge:gems/ender_pearl', '4x #forge:fine_wires/gold'])
        .itemOutputs('moblassos:golden_lasso')
        .duration(600)
        .EUt(GTValues.V[GTValues.LV])
    greg.assembler('gtna:gtceu/assembler/accumulation_processor')
        .itemInputs(['kubejs:fluix_crystal_cpu', 'ae2:printed_silicon'])
        .inputFluids(Fluid.of('gtceu:fluix', 144))
        .itemOutputs('megacells:accumulation_processor')
        .duration(320)
        .EUt(GTValues.V[GTValues.IV])
    greg.assembler('gtna:gtceu/assembler/basic_capacitor')
        .itemInputs(['4x #forge:bolts/aluminium', '4x #forge:foils/manganese'])
        .inputFluids(Fluid.of('gtceu:polyethylene', 288))
        .itemOutputs('enderio:basic_capacitor')
        .circuit(1)
        .duration(600)
        .EUt(GTValues.V[GTValues.LV])
    greg.assembler('gtna:gtceu/assembler/double_layer_capacitor')
        .itemInputs(['4x #forge:bolts/aluminium', '6x #forge:foils/manganese', '2x #forge:dusts/carbon'])
        .inputFluids(Fluid.of('gtceu:energetic_alloy', 576))
        .itemOutputs('enderio:double_layer_capacitor')
        .circuit(1)
        .duration(600)
        .EUt(GTValues.V[GTValues.MV])
    greg.assembler('gtna:gtceu/assembler/octadic_capacitor')
        .itemInputs(['4x #forge:bolts/nichrome', '6x #forge:foils/manganese', '4x #forge:dusts/gold'])
        .inputFluids(Fluid.of('gtceu:energetic_alloy', 576))
        .itemOutputs('enderio:octadic_capacitor')
        .circuit(1)
        .duration(600)
        .EUt(GTValues.V[GTValues.HV])
    greg.assembler('gtna:gtceu/assembler/mega_ebf')
        .itemInputs('64x gtceu:electric_blast_furnace')
        .inputFluids(Fluid.of('gtceu:energetic_alloy', 9126))
        .itemOutputs('gtceu:mega_ebf')
        .circuit(17)
        .duration(200000)
        .EUt(GTValues.V[GTValues.HV])
    greg.compressor('gtna:gtceu/compressing/netherstar_block')
        .itemInputs('9x #gtna:netherstar_inputs')
        .itemOutputs('#forge:storage_blocks/nether_star')
        .duration(900)
        .EUt(GTValues.V[GTValues.UV])
    greg.centrifuge('gtna:gtceu/skystone_centrifuge')
        .itemInputs('ae2:sky_dust')
        .itemOutputs('gtceu:basalt_dust')
        .chancedOutput('gtceu:small_pure_skystone_dust', 4000, 100)
        .chancedOutput('gtceu:small_olivine_dust', 2000, 100)
        .chancedOutput('gtceu:small_obsidian_dust', 2000, 100)
        .chancedOutput('gtceu:small_flint_dust', 2000, 100)
        .chancedOutput('gtceu:small_rare_earth_dust', 2000, 100)
        .circuit(1)
        .duration(60)
        .EUt(20)
    greg.centrifuge('gtna:gtceu/centrifuge/skystone_dust')
        .itemInputs('18x ae2:sky_dust')
        .itemOutputs(['gtceu:basalt_dust', 'gtceu:pure_skystone_dust'])
        .chancedOutput('gtceu:olivine_dust', 9000, 10)
        .chancedOutput('gtceu:obsidian_dust', 9000, 10)
        .chancedOutput('gtceu:flint_dust', 9000, 100)
        .chancedOutput('gtceu:rare_earth_dust', 9000, 10)
        .circuit(2)
        .duration(80)
        .EUt(80)
    greg.centrifuge('gtna:gtceu/centrifuge/fiery_dust')
        .itemInputs('18x ae2:sky_dust')
        .itemOutputs(['gtceu:fiery_dust'])
        .circuit(1)
        .duration(800)
        .EUt(GTValues.V[GTValues.MV])
    greg.coke_oven("gtna:coke_oven/ghost_charcoal")
        .itemInputs("vintagedelight:ghost_pepper")
        .itemOutputs("vintagedelight:ghost_charcoal")
        .outputFluids('gtceu:creosote 10')
        .duration(500)
    greg.chemical_bath("gtna:elevator_washing/gray_elevator")
        .itemInputs("#elevatorid:elevators")
        .inputFluids("gtceu:chlorine 50")
        .itemOutputs("elevatorid:elevator_gray")
        .duration(400)
        .EUt(2);
    greg.forge_hammer('gtna:gtceu/advanced_knapping')
        .itemInputs('minecraft:flint')
        .itemOutputs('6x notreepunching:flint_shard')
        .duration(60)
        .EUt(10)
    greg.forming_press('gtna:gtceu/pro_knapping')
        .itemInputs('minecraft:flint')
        .itemOutputs('6x notreepunching:flint_shard')
        .duration(60)
        .EUt(10)
    greg.laser_engraver('gtna:gtceu/laser_engraver/fluix_crystal_cpu')
        .itemInputs('gtceu:engraved_lapotron_crystal_chip')
        .notConsumable('gtceu:fluix_lens')
        .itemOutputs('kubejs:fluix_crystal_cpu')
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(300)
        .EUt(GTValues.V[GTValues.IV])
    greg.lathe('gtna:lathe/manasteel_lens')
        .itemInputs('#forge:plates/manasteel')
        .itemOutputs(['gtceu:manasteel_lens', '#forge:small_dusts/manasteel'])
        .duration(600)
        .EUt(GTValues.V[GTValues.MV])
    greg.macerator('gtna:gtceu/macerating/netherite_scrap_dust')
        .itemInputs('minecraft:netherite_scrap')
        .itemOutputs('gtceu:netherite_scrap_dust')
        .duration(60)
        .EUt(GTValues.V[GTValues.MV])
    greg.macerator('gtna:gtceu/macerating/ancient_debris')
        .itemInputs('minecraft:ancient_debris')
        .itemOutputs(['gtceu:netherite_scrap_dust', 'gtceu:netherrack_dust'])
        .chancedOutput('gtceu:netherite_scrap_dust', 4000, 200)
        .duration(80)
        .EUt(GTValues.V[GTValues.MV])
    greg.macerator('gtna:gtceu/macerating/liveroot_dust')
        .itemInputs('twilightforest:liveroot')
        .itemOutputs('2x gtceu:liveroot_dust')
        .duration(60)
        .EUt(30)
    greg.macerator('gtna:gtceu/macerating/soul_sand_dust')
        .itemInputs('#chipped:soul_sand')
        .itemOutputs('4x gtceu:soul_sand_dust')
        .chancedOutput('gtceu:soul_sand_dust', 4000, 200)
        .duration(120)
        .EUt(GTValues.V[GTValues.ULV])
    greg.mixer('gtna:gtceu/mixer/andesite_alloy')
        .itemInputs(['2x #forge:dusts/andesite', '2x #forge:dusts/iron'])
        .inputFluids(Fluid.of(['gtceu:oxygen', 14000]))
        .itemOutputs('4x #forge:dusts/andesite_alloy')
        .circuit(4)
        .duration(200)
        .EUt(GTValues.V[GTValues.ULV])
    greg.mixer('gtna:gtceu/mixer/netherite_dust')
        .itemInputs(['4x #forge:dusts/netherite_scrap', '4x #forge:dusts/gold'])
        .itemOutputs('1x #forge:dusts/netherite')
        .circuit(4)
        .duration(200)
        .EUt(GTValues.V[GTValues.MV])
    greg.mixer('gtna:gtceu/mixer/pfstalloy_dust')
        .itemInputs(['2x #forge:dusts/platinum', '#forge:dusts/fluix', '#forge:dusts/tin', '2x #forge:dusts/titanium'])
        .inputFluids(Fluid.of(['gtceu:oxygen', 14000]))
        .itemOutputs('6x #forge:dusts/pfstalloy')
        .circuit(4)
        .duration(440)
        .EUt(GTValues.V[GTValues.LuV])
    greg.polarizer('gtna:polarizer/magnetic_gold_ingot')
        .itemInputs('#forge:ingots/unmagnetised_gold')
        .itemOutputs('#forge:ingots/magnetic_gold')
        .duration(120)
        .EUt(GTValues.V[GTValues.LV])

    const goodOilSeeds = [['vintagedelight:peanut', 36], ['sunflowerdelight:sunflower_seed', 42]]
    goodOilSeeds.forEach(seed => {
        greg.extractor('gtna:extraction/seed_oil_from_' + seed[0].replace(':', '_'))
            .itemInputs(seed[0])
            .outputFluids('gtceu:seed_oil ' + seed[1])
            .duration(68)
            .EUt(GTValues.V[GTValues.ULV])
    });

    Color.DYE.forEach(color => {
        greg.chemical_bath(`${color}_elevator`)
            .itemInputs("#elevatorid:elevators")
            .inputFluids(`gtceu:${color}_dye 18"`)
            .itemOutputs(`elevatorid:elevator_${color}`)
            .duration(20)
            .EUt(7);
    });

})      