ServerEvents.recipes(e => {
    const component_recipe = [
        ['megacells:cell_component_1m', 'ae2:cell_component_256k', '2x ', '4x ', GTValues.IV ],
        ['megacells:cell_component_4m', 'megacells:cell_component_1m', '4x ', '6x ', GTValues.LuV ],
        ['megacells:cell_component_16m', 'megacells:cell_component_4m', '6x ', '8x ', GTValues.UV ],
        ['megacells:cell_component_64m', 'megacells:cell_component_16m', '8x ', '12x ', GTValues.UV ],
        ['megacells:cell_component_256m', 'megacells:cell_component_64m', '12x ', '16x ', GTValues.UHV ],
    ]

    const devices = ['interface', 'pattern_provider']
    const buses = ['import_bus', 'export_bus']
    const filtered_buses = ['storage_bus', 'export_bus']

    e.remove({ id: '/megacells:inscriber/.*accum.*/' })
    e.remove({ mod: 'aeinfinitybooster' })
    e.replaceInput({id: '/appbot:mana.*/' }, 'botania:manasteel_ingot', '#forge:plates/manasteel')
    e.replaceInput({id: '/gregi.*:.*/' }, 'ae2:sky_dust', 'gtceu:pure_skystone_dust')
    e.replaceInput({id: '/megacells:mega_mana.*/' }, 'ae2:sky_dust', '#forge:screws/titanium')

    removeVanillaMetalurgy(e, 'megacells', 'sky_steel')
    replaceMetalTagsInCrafting(e, 'megacells', 'sky_steel')

    const sizes = ['1m', '4m', '16m', '64m', '256m']
    sizes.forEach(size => {
        e.remove({ id: 'megacells:cells/standard/item_storage_cell_' + size })
        e.shaped('megacells:item_storage_cell_' + size, ['ECF', 'BDB', 'AAA'], {
            A: '#forge:plates/sky_steel', 
            B: '#forge:screws/titanium',
            C: 'ae2:quartz_vibrant_glass',
            D: 'megacells:cell_component_' + size,
            E: '#forge:tools/screwdrivers',
            F: '#forge:tools/wrench'
        }).id('gtna:megacells/cell/item_' + size)
        e.remove({ id: 'megacells:cells/standard/fluid_storage_cell_' + size })
        e.shaped('megacells:fluid_storage_cell_' + size, ['ECF', 'BDB', 'AAA'], {
            A: '#forge:plates/sky_steel', 
            B: '#forge:screws/titanium',
            C: 'ae2:quartz_vibrant_glass',
            D: 'megacells:cell_component_' + size,
            E: '#forge:tools/screwdrivers',
            F: '#forge:tools/wrench'
        }).id('gtna:megacells/cell/fluid_' + size)
    });

    component_recipe.forEach(recipe => {
        e.remove({ output: recipe[0] })
        e.recipes.gtceu.assembler(recipe[0])
            .itemInputs(['4x ' + recipe[1], recipe[2] + 'megacells:accumulation_processor', recipe[3] + '#forge:fine_wires/pfstalloy'])
            .inputFluids(Fluid.of('gtceu:redstone_alloy', 576))
            .itemOutputs(recipe[0])
            .cleanroom(CleanroomType.CLEANROOM)
            .duration(600)
            .EUt(GTValues.V[recipe[4]])
    });
    devices.forEach(device => {
        e.remove({id: 'megacells:network/mega_' + device })
        e.recipes.gtceu.assembler('gtna:ae2/mega/' + device)
            .itemInputs(['ae2:' + device, '2x ae2:capacity_card', 'megacells:accumulation_processor', '4x #forge:plates/lapis'])
            .itemOutputs('megacells:mega_' + device)
            .duration(3000)
            .EUt(GTValues.V[GTValues.IV])
        e.remove({output: '/expatternprovider:ex_' + device + '.*/'})
        e.recipes.gtceu.assembler('gtna:ae2/expatternprovider/' + device)
            .itemInputs(['megacells:mega_' + device, '4x ae2:capacity_card', 'megacells:accumulation_processor', '2x #forge:plates/diamond'])
            .itemOutputs('expatternprovider:ex_' + device)
            .duration(3000)
            .EUt(GTValues.V[GTValues.LuV])
    });
    buses.forEach(bus => {
        e.remove({output: '/expatternprovider:ex_' + bus + '.*/' })
        e.recipes.gtceu.assembler('gtna:ae2/expatternprovider/extended_' + bus)
            .itemInputs(['ae2:' + bus, '2x ae2:capacity_card', '2x ae2:speed_card', 'megacells:accumulation_processor'])
            .itemOutputs('/expatternprovider:ex_' + bus + '.*/')
            .duration(3000)
            .EUt(GTValues.V[GTValues.IV])
    });
    filtered_buses.forEach(bus => {
        e.remove({output: 'expatternprovider:tag_' + bus })
        e.recipes.gtceu.assembler('gtna:ae2/expatternprovider/tag_' + bus)
            .itemInputs(['ae2:' + bus, 'gtceu:item_tag_filter'])
            .itemOutputs('expatternprovider:tag_' + bus )
            .duration(3000)
            .EUt(GTValues.V[GTValues.IV])
        e.remove({output: 'expatternprovider:mod_' + bus })
        e.recipes.gtceu.assembler('gtna:ae2/expatternprovider/mod_' + bus)
            .itemInputs(['ae2:' + bus, 'gtceu:item_filter'])
            .itemOutputs('expatternprovider:mod_' + bus )
            .duration(3000)
            .EUt(GTValues.V[GTValues.IV])
        e.remove({output: 'expatternprovider:precise_' + bus })
        e.recipes.gtceu.assembler('gtna:ae2/expatternprovider/precise_' + bus)
            .itemInputs(['ae2:' + bus, 'create:precision_mechanism'])
            .itemOutputs('expatternprovider:precise_' + bus )
            .duration(3000)
            .EUt(GTValues.V[GTValues.IV])
    });
    e.replaceInput({id: '/ae2insertexport_card:.*/' }, 'minecraft:redstone_block', 'gtceu:redstone_alloy_plate')
    
    e.replaceInput({id: '/expatternprovider:(?:water|cobblestone).*_cell/' }, 'ae2:cell_component_16k', 'megacells:cell_component_256m')
    e.replaceInput({id: '/expatternprovider:(?:water|cobblestone).*_cell/' }, 'ae2:quartz_glass', 'gtceu:laminated_glass')
    e.replaceInput({id: '/expatternprovider:(?:water|cobblestone).*_cell/' }, 'minecraft:diamond', '#forge:double_plates/pfstalloy')
    e.replaceInput({id: '/expatternprovider:(?:water|cobblestone).*_cell/' }, 'minecraft:water_bucket', 'gtceu:infinite_water_cover')
    e.replaceInput({id: '/expatternprovider:cobblestone.*_cell/' }, 'minecraft:lava_bucket', 'bloodmagic:lavasigil')
    e.replaceInput({id: '/expatternprovider:crystal_fix.*/' }, '#forge:gems/fluix', 'gtceu:kanthal_coil_block')
    e.replaceInput({id: '/expatternprovider:crystal_fix.*/' }, 'minecraft:iron', '#forge:double_plates/iron')
    e.replaceInput({id: '/expatternprovider:crystal_fix.*/' }, 'minecraft:iron', '#forge:plates/stainless_steel')
    e.replaceInput({id: '/expatternprovider:ex_io.*/' }, 'ae2:engineering_processor', 'megacells:accumulation_processor')
    e.replaceInput({id: '/expatternprovider:ex_io.*/' }, 'ae2:logic_processor', 'megacells:accumulation_processor')
    e.replaceInput({id: '/expatternprovider:ex_io.*/' }, 'ae2:speed_card', '#forge:double_plates/pfstalloy')
    e.replaceInput({id: '/expatternprovider:ex_molecular.*/' }, '#forge:gems/fluix', '#forge:double_plates/pfstalloy')
    e.replaceInput({id: '/expatternprovider:ex_molecular.*/' }, 'ae2:engineering_processor', 'megacells:accumulation_processor')
    e.replaceInput({id: '/expatternprovider:ingredient.*/' }, 'minecraft:iron', '#forge:double_plates/iron')
    e.replaceInput({id: '/expatternprovider:wireless_conn.*/' }, '#ae2:smart_cable', 'ae2:engineering_processor')
    e.replaceInput({id: '/expatternprovider:wireless_conn.*/' }, 'ae2:engineering_processor', '#forge:double_plates/titanium')
    e.replaceInput({id: '/expatternprovider:wireless_conn.*/' }, 'ae2:sky_dust', '#forge:plates/fluix')
    e.replaceInput({id: 'expatternprovider:drive_upgrade' }, '#ae2:glass_cable', 'megacells:accumulation_processor')
    e.replaceInput({id: 'expatternprovider:drive_upgrade' }, '#forge:dusts/fluix', '#forge:double_plates/pfstalloy')
    e.replaceInput({id: 'expatternprovider:ex_drive' }, '#ae2:glass_cable', 'megacells:accumulation_processor')
    e.replaceInput({id: 'expatternprovider:ex_drive' }, '#forge:dusts/fluix', '#forge:double_plates/pfstalloy')
    
    e.replaceInput({id: '/megacells:.*_component/' }, 'ae2:sky_dust', '#forge:plates/fluix')
    e.replaceInput({id: '/megacells:cells/mega_mana.*_housing/' }, 'ae2:quartz_vibrant_glass', '#forge:double_plates/terrasteel')
    e.replaceInput({id: '/megacells:cells/mega_mana.*_housing/' }, 'ae2:sky_dust', '#forge:double_plates/terrasteel')

    e.replaceInput({id: '/arseng:mega.*_housing/' }, '#forge:ingots/sky_steel', '#forge:double_plates/titanium')
    e.replaceInput({id: '/gtceu:.*_flux_cell_housing/' }, '#forge:ingots/insulating_resin', '#forge:double_plates/insulating_resin')
    e.replaceInput({id: '/gtceu:.*mana_cell_housing/' }, '#forge:ingots/manasteel', '#forge:double_plates/manasteel')
    
    e.remove({output: 'expatternprovider:ex_pattern_access_part' })
    e.recipes.gtceu.assembler('gtna:ae2/expatternprovider/ex_pattern_access_part')
        .itemInputs(['ae2:pattern_access_terminal', '3x #forge:plates/fluix', 'megacells:accumulation_processor'])
        .itemOutputs('expatternprovider:ex_pattern_access_part' )
        .duration(3000)
        .EUt(GTValues.V[GTValues.IV])
    e.remove({output: '/expatternprovider:.*_upgrade/' })
    e.recipes.gtceu.assembler('gtna:ae2/expatternprovider/pattern_terminal_upgrade')
        .itemInputs(['#forge:plates/steel', '3x #forge:plates/fluix', 'megacells:accumulation_processor'])
        .itemOutputs('expatternprovider:pattern_terminal_upgrade' )
        .duration(3000)
        .EUt(GTValues.V[GTValues.IV])
    e.remove({ id: 'expatternprovider:wireless_tool' })
    e.shaped('expatternprovider:wireless_tool', ['FBF', 'CGC', 'AEA'], {
        A: '#forge:plates/fluix', 
        B: '#forge:double_plates/titanium',
        C: 'ae2:engineering_processor',
        E: '#ae2:glass_cable',
        F: 'ae2:wireless_reciever',
        G: 'ae2:fluix_pearl'
    }).id('gtna:expatternprovider/wireless_tool')

    e.remove({ id: 'megacells:cells/mega_item_cell_housing' })
    e.shaped('megacells:mega_item_cell_housing', ['ECF', 'B B', 'AAA'], {
        A: '#forge:double_plates/sky_steel', 
        B: '#forge:screws/titanium',
        C: 'ae2:quartz_vibrant_glass',
        E: '#forge:tools/screwdrivers',
        F: '#forge:tools/wrench'
    }).id('gtna:megacells/mega_item_cell_housing')
    e.remove({ id: 'megacells:cells/mega_fluid_cell_housing' })
    e.shaped('megacells:mega_fluid_cell_housing', ['ECF', 'B B', 'AAA'], {
        A: '#forge:double_plates/pulsating_alloy', 
        B: '#forge:screws/titanium',
        C: 'ae2:quartz_vibrant_glass',
        E: '#forge:tools/screwdrivers',
        F: '#forge:tools/wrench'
    }).id('gtna:megacells/mega_fluid_cell_housing')
    e.remove({ output: 'megacells:bulk_item_cell'})
    e.shaped('megacells:bulk_item_cell', ['ECF', 'BDB', 'AAA'], {
        A: '#forge:double_plates/sky_steel', 
        B: '#forge:screws/titanium',
        C: 'ae2:quartz_vibrant_glass',
        D: 'megacells:bulk_cell_component',
        E: '#forge:tools/screwdrivers',
        F: '#forge:tools/wrench'
    }).id('gtna:megacells/cell/bulk')

    e.recipes.ars_nouveau.enchanting_apparatus(
        [
            "#forge:screws/titanium",
            "#forge:double_plates/gold",
            "#forge:double_plates/gold",
            "#forge:double_plates/gold",
            "#forge:screws/titanium",
            "ars_nouveau:manipulation_essence",
            "ars_nouveau:manipulation_essence",
            "ars_nouveau:source_jar",
        ], 
	    "ae2:fluid_cell_housing", 
	    "arseng:source_cell_housing", 
	    1000, 
	).id('gtna:arseng/source_cell_housing')

    e.recipes.ars_nouveau.enchanting_apparatus(
        [
            "ars_nouveau:source_gem_block",
            "#forge:double_plates/sky_steel",
            "#forge:double_plates/sky_steel",
            "#forge:double_plates/sky_steel",
            "ars_nouveau:source_gem_block",
            "ars_nouveau:manipulation_essence",
            "ars_nouveau:manipulation_essence",
        ], 
	    "ae2:energy_acceptor", 
	    "arseng:source_acceptor", 
	    2000, 
	).id('gtna:arseng/source_acceptor')
    e.shapeless('kubejs:bound_stick',['gtna:arseng/source_cell_housing']).id('gtna:shapeless/cable_source_acceptor')

})