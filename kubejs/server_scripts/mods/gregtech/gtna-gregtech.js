ServerEvents.recipes(e => {
    const greg = e.recipes.gtceu;

    e.replaceInput({output: '/gtceu:.*infinite_water_cover.*/' }, 'minecraft:cauldron', 'bloodmagic:watersigil')


    e.remove({ output: '/gtceu:.*mana_steel.*/' })
    e.remove({ output: '/gtceu:.*terra_steel.*/' })

    e.shaped("gtceu:greenhouse", ["GGG", "CHC", "PUP"], {
        G: "gtceu:tempered_glass",
        C: "#gtceu:circuits/mv",
        H: "gtceu:mv_machine_hull",
        P: "gtceu:mv_electric_piston",
        U: "gtceu:mv_electric_pump",
    });

    e.recipes.gtceu.assembler('gtna:gtceu/assembler/accumulation_processor')
        .itemInputs(['kubejs:fluix_crystal_cpu', 'ae2:printed_silicon'])
        .inputFluids(Fluid.of('gtceu:fluix', 144))
        .itemOutputs('megacells:accumulation_processor')
        .duration(320)
        .EUt(GTValues.V[GTValues.IV])
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
    greg.centrifuge('gtna:gtceu/skystone_centrifuge_mass')
        .itemInputs('18x ae2:sky_dust')
        .itemOutputs(['gtceu:basalt_dust', 'gtceu:pure_skystone_dust'])
        .chancedOutput('gtceu:olivine_dust', 9000, 10)
        .chancedOutput('gtceu:obsidian_dust', 9000, 10)
        .chancedOutput('gtceu:flint_dust', 9000, 100)
        .chancedOutput('gtceu:rare_earth_dust', 9000, 10)
        .circuit(2)
        .duration(80)
        .EUt(80)
    greg.centrifuge('gtna:gtceu/fiery_dust')
        .itemInputs('18x ae2:sky_dust')
        .itemOutputs(['gtceu:fiery_dust'])
        .circuit(1)
        .duration(800)
        .EUt(GTValues.V[GTValues.MV])
    greg.forge_hammer('gtna:gtceu/advanced-knapping')
        .itemInputs('minecraft:flint')
        .itemOutputs('6x notreepunching:flint_shard')
        .duration(60)
        .EUt(10)
    greg.forming_press('gtna:gtceu/advanced-knapping')
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
    greg.macerator('gtna:gtceu/netherite_scrap_dust')
        .itemInputs('minecraft:netherite_scrap')
        .itemOutputs('gtceu:netherite_scrap_dust')
        .duration(60)
        .EUt(GTValues.V[GTValues.MV])
    greg.macerator('gtna:gtceu/liveroot_dust')
        .itemInputs('twilightforest:liveroot')
        .itemOutputs('2x gtceu:liveroot_dust')
        .duration(60)
        .EUt(30)
    greg.macerator('gtna:gtceu/soul_sand_dust')
        .itemInputs('#chipped:soul_sand')
        .itemOutputs('4x gtceu:soul_sand_dust')
        .chancedOutput('gtceu:soul_sand_dust', 4000, 200)
        .duration(120)
        .EUt(GTValues.V[GTValues.ULV])
    greg.mixer('gtna:gtceu/mixer/pfstalloy_dust')
        .itemInputs(['2x #forge:dusts/platinum', '#forge:dusts/fluix', '#forge:dusts/tin', '2x #forge:dusts/titanium'])
        .inputFluids(Fluid.of(['gtceu:oxygen', 14000]))
        .itemOutputs('6x #forge:dusts/pfstalloy')
        .circuit(4)
        .duration(440)
        .EUt(GTValues.V[GTValues.LuV])

})      