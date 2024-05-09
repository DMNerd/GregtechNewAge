ServerEvents.recipes(e => {

    e.remove({id: '/bloodmagic:.*/.*_netherite_.*/'})
    e.remove({id: '/utilitarian:utility/.*/'})
    e.remove({id: 'gtceu:shaped/minecart_steel'})
    e.remove({mod: 'moblassos'})
    e.remove({id: 'extendedcrafting:luminessence'})
    e.replaceInput({input: '#railways:internal/nuggets/zinc_nuggets' }, '#railways:internal/nuggets/zinc_nuggets', '#forge:nuggets/zinc')
    e.replaceOutput({ input: 'leatherprocessing:dried_leather',  output: 'minecraft:book'}, 'leatherprocessing:dried_leather', '#forge:binding_material')
    e.replaceOutput({ output: '#forge:nuggets/aluminum' }, '#forge:nuggets/aluminum', '#forge:nuggets/aluminium')
    removeVanillaMetalurgy(e, 'minecraft', 'netherite')

    const laddersToChange = [
        ['create', 'andesite'],
        ['create', 'brass'],
        ['create', 'copper'],
        ['createdeco', 'industrial_iron'],
        ['createdeco', 'iron'],
        ['createdeco', 'zinc'],
        ['enderio', 'dark_steel'], 
    ]
    const barsToChange = [
        ['createdeco', 'andesite'],
        ['createdeco', 'brass'],
        ['createdeco', 'copper'],
        ['createdeco', 'industrial_iron'],
        ['createdeco', 'zinc'],
        ['enderio', 'dark_steel'],
        ['enderio', 'end_steel'],
    ]
    const doorsToChange = [
        ['createdeco', 'andesite'],
        ['createdeco', 'brass'],
        ['createdeco', 'copper'],
        ['createdeco', 'industrial_iron'],
        ['createdeco', 'zinc'],
        ['enderio', 'dark_steel'],
    ]
    barsToChange.forEach(bar => {
        hardenBarsRecipes(e, bar[0], bar[1])
    });
    laddersToChange.forEach(ladder => {
        hardenMetalLadderRecipes(e, ladder[0], ladder[1])
    });
    doorsToChange.forEach(door => {
        hardenMetalDoorRecipes(e, door[0], door[1])
    });
    e.replaceInput({id: '/create:.*/andesite_door/' }, '#minecraft:wooden_doors', 'createdeco:andesite_door')
    e.replaceInput({id: '/create:.*/brass_door/' }, '#minecraft:wooden_doors', 'createdeco:brass_door')
    e.replaceInput({id: '/create:.*/copper_door/' }, '#minecraft:wooden_doors', 'createdeco:copper_door')
    e.replaceInput({id: '/create:.*/train_door/' }, '#minecraft:wooden_doors', 'minecraft:iron_door')
    e.replaceInput({id: '/create:.*/train_trapdoor/' }, '#minecraft:wooden_trapdoors', 'minecraft:iron_trapdoor')

    removeVanillaMetalurgy(e, 'createdeco', 'industrial_iron')
    removeVanillaMetalurgy(e, 'createdeco', 'netherite')
    removeVanillaMetalurgy(e, 'minecraft', 'copper')

    e.replaceInput({ id: '/design_decor:item_application/industrial_gear.*/' }, '#forge:storage_blocks/wrought_iron', '#forge:double_plates/wrought_iron')
    e.replaceInput({ id: '/design_decor:stonecutting/.*sign$/' }, '#forge:nuggets/zinc', '#forge:plates/zinc')
    e.replaceInput({input: 'create:industrial_iron_block' }, 'create:industrial_iron_block', '#forge:storage_blocks/wrought_iron')
    e.replaceInput({input: 'createdeco:industrial_iron_ingot' }, 'createdeco:industrial_iron_ingot', '#forge:ingots/wrought_iron')
    e.replaceInput({input: 'createdeco:industrial_iron_nugget' }, 'createdeco:industrial_iron_nugget', '#forge:nuggets/wrought_iron')
    e.replaceInput({input: 'createdeco:industrial_iron_sheet' }, 'createdeco:industrial_iron_sheet', '#forge:plates/wrought_iron')
    e.replaceInput({mod: 'createdeco' }, '#forge:sheets/brass', '#forge:plates/brass')

    e.remove({id: 'platforms:wrench'})
    e.replaceInput({id: 'platforms:platform' }, 'minecraft:iron_ingot', '#forge:plates/steel')
    e.replaceInput({id: 'platforms:wrench' }, '#forge:rods/metal', '#forge:rods/steel')
    e.replaceInput({id: 'platforms:wrench' }, 'minecraft:iron_ingot', '#forge:plates/steel')
    e.replaceInput({input: '/.*:.*cheese.*slice$/' }, '/.*:.*cheese.*slice$/', '#forge:cheeses')
    e.replaceInput({id: 'miners_delight:copper_pot' }, 'minecraft:copper_ingot', '#forge:plates/copper')

    e.remove({id: "simplemagnets:advanced_demagnetization_coil"})
    e.remove({id: "simplemagnets:basic_demagnetization_coil"})

    e.replaceInput({ id: 'travelersbackpack:hose' }, '#forge:dyes/green', 'gtceu:polytetrafluoroethylene_tiny_fluid_pipe')
    e.replaceInput({ id: 'travelersbackpack:hose_nozzle' }, 'minecraft:gold_ingot', 'gtceu:gold_normal_fluid_pipe')
    e.replaceInput({ id: 'travelersbackpack:hose_nozzle' }, 'minecraft:iron_ingot', '#forge:plates/iron')
    
    e.remove({id: 'trashcans:item_trash_can'})
    e.remove({id: 'trashcans:liquid_trash_can'})
    e.remove({id: 'trashcans:energy_trash_can'})

    e.remove({ mod: "elevatorid" });
    e.shaped("elevatorid:elevator_gray", ["PPP", "GFG", "PPP"], {
        P: "#forge:plates/steel",
        G: "#forge:small_gears/steel",
        F: "#forge:frames/steel",
    }).id('gtna:steel_elevator')
    e.remove({id: 'toolbelt:pouch'})
    e.shaped('toolbelt:pouch', ['A A', 'B B', 'CBC'], {
        A: '#forge:bolts/brass', 
        B: 'leatherprocessing:dried_leather',
        C: '#forge:string'
    }).id('gtna:toolbelt/toolbelt_pouch')
    e.remove({id: 'toolbelt:belt'})
    e.shaped('toolbelt:belt', ['CBC', 'B B', 'DED'], {
        B: 'leatherprocessing:dried_leather',
        C: '#forge:string',
        D: 'toolbelt:pouch',
        E: '#forge:rings/gold'
    }).id('gtna:toolbelt/toolbelt_belt')
    e.remove({id: 'travelersbackpack:standard'})
    e.shaped('travelersbackpack:standard', ['BDB', 'CAC', 'FEF'], {
        A: 'ironchests:iron_chest', 
        B: 'leatherprocessing:dried_leather',
        C: 'create:fluid_tank',
        D: '#forge:plates/aluminium',
        E: '#travelersbackpack:sleeping_bags',
        F: 'toolbelt:pouch'
    }).id('gtna:travelersbackpack/standard')

    hardenWoodenRecipes(e, 'mynethersdelight', 'powdery')
    hardenPPRecipes(e, 'mynethersdelight', 'powdery')
    hardenButtonRecipes(e, 'mynethersdelight', 'powdery')

    const gtceuWoods = ['rubber', 'treated']

    hardenWoodenRecipes(e, 'framedblocks', 'framed')
    hardenLadderRecipes(e, 'framedblocks', 'framed')
    e.remove({id : 'framedblocks:framed_cube' })
    e.shaped('framedblocks:framed_cube', ['BAB', 'ACA', 'BAB'], {
        A: '#forge:rods/wood', 
        B: '#minecraft:planks',
        C: 'gtceu:wood_frame'
    }).id('gtna:framedblocks/cube')
    e.remove({id : 'framedblocks:framed_chest' })
    e.shaped('framedblocks:framed_chest', ['AAA', 'ABA', 'AAA'], {
        A: 'framedblocks:framed_cube', 
        B: 'minecraft:chest'
    }).id('gtna:framedblocks/chest')

    e.remove({ id: '/morered:red_alloy_ingot.*/' })
    e.replaceInput({ mod: 'morered' }, 'minecraft:quartz', '#forge:plates/nether_quartz')
    e.replaceInput({ mod: 'morered' }, 'minecraft:redstone', 'morered:red_alloy_wire')
    e.remove({ id: 'morered:red_alloy_wire' })
    e.shapeless('morered:red_alloy_wire',['gtceu:red_alloy_single_wire']).id('gtna:shapeless/red_alloy_wire')

    e.shaped('computercraft:printed_book', ['BCB', 'ADA'], {
        A: '#forge:string', 
        B: '#forge:binding_material',
        C: 'computercraft:printed_page',
        D: 'gtceu:sticky_resin'
    }).id('gtna:printed_book')
    e.shaped('trashcans:item_trash_can', ['ACA', 'ABA', 'AAA'], {
        A: '#forge:plates/iron', 
        B: '#forge:ender_pearls',
        C: '#forge:tools/hammers',
    }).id('gtna:trashcans/item')

    //Building Gadgets

    // Building Tool
    e.remove({ output: "buildinggadgets2:gadget_building" });
    e.shaped("buildinggadgets2:gadget_building", ["PLP", "DCD", "PKP"], {
        P: "#forge:plates/steel",
        L: "#forge:plates/lapis",
        D: "#forge:plates/diamond",
        C: "#gtceu:circuits/lv",
        K: "gtceu:tin_single_cable",
    });
    // Exchanging Tool
    e.remove({ output: "buildinggadgets2:gadget_exchanging" });
    e.shaped("buildinggadgets2:gadget_exchanging", ["PLP", "DCD", "PKP"], {
        P: "#forge:plates/steel",
        L: "#forge:plates/gold",
        D: "#forge:plates/diamond",
        C: "#gtceu:circuits/lv",
        K: "gtceu:tin_single_cable",
    });
    // Copy-paste Tool
    e.remove({ output: "buildinggadgets2:gadget_copy_paste" });
    e.shaped("buildinggadgets2:gadget_copy_paste", ["PLP", "DCD", "PKP"], {
        P: "#forge:plates/steel",
        L: "#forge:plates/redstone",
        D: "#forge:plates/emerald",
        C: "#gtceu:circuits/lv",
        K: "gtceu:tin_single_cable",
    });

    // Template Manager
    e.remove({ output: "buildinggadgets2:template_manager" });
    e.shaped("buildinggadgets2:template_manager", ["KCK", "CHC", "KCK"], {
        K: "gtceu:tin_single_cable",
        C: "#gtceu:circuits/lv",
        H: "gtceu:lv_machine_hull",
    });

    // Destruction Gadget
    e.remove({ output: "buildinggadgets2:gadget_destruction" });
    e.shaped("buildinggadgets2:gadget_destruction", ["PLP", "DCD", "PKP"], {
        P: "#forge:plates/aluminium",
        L: "#forge:plates/nether_quartz",
        D: "#forge:plates/ender_pearl",
        C: "#gtceu:circuits/mv",
        K: "gtceu:copper_single_cable",
    });

    // Cut 'n' Paste Gadget
    e.remove({ output: "buildinggadgets2:gadget_cut_paste" });
    e.shaped("buildinggadgets2:gadget_cut_paste", ["PLP", "DCD", "PKP"], {
        P: "#forge:plates/aluminium",
        L: "#forge:plates/lapis",
        D: "gtceu:iron_buzz_saw_blade",
        C: "#gtceu:circuits/mv",
        K: "gtceu:copper_single_cable",
    });
    //Hang Glider
    e.remove({ id: "hangglider:glider_wing" });
    e.shaped("hangglider:glider_wing", ["hRL", "RLL", "LLL"], {
        h: "#forge:tools/hammers",
        R: "#forge:rods/steel",
        L: "leatherprocessing:dried_leather",
    });
    e.remove({ id: "hangglider:glider_framework" });
    e.shaped("hangglider:glider_framework", [" R ", "RhR", "RRR"], {
        h: "#forge:tools/hammers",
        R: "#forge:rods/steel",
    });
    e.remove({ id: "hangglider:hang_glider" });
    e.shaped("hangglider:hang_glider", ["SSS", "LML", "SSS"], {
        S: "#forge:screws/iron",
        L: "hangglider:glider_wing",
        M: "hangglider:glider_framework",
    });
    e.remove({ output: "hangglider:reinforced_hang_glider" });
    e.shaped("hangglider:reinforced_hang_glider", ["SVS", "LML", "SVS"], {
        S: "#forge:screws/vanadium_steel",
        V: "#forge:rods/vanadium_steel",
        L: "enderio:glider_wing",
        M: "hangglider:hang_glider",
    });
    // Mega Torch
    e.remove({ id: "torchmaster:megatorch" });
    e.shaped("torchmaster:megatorch", ["SDR", "IBD", "RIS"], {
        S: "#forge:screws/iron",
        D: "#forge:gems/diamond",
        R: "#forge:rings/gold",
        I: "minecraft:stick",
        B: "#forge:storage_blocks/coke",
    });

    // Dread Lamp
    e.remove({ id: "torchmaster:dreadlamp" });
    e.shaped("torchmaster:dreadlamp", ["PPP", "GLG", "PPP"], {
        P: "#forge:plates/obsidian",
        L: "minecraft:glowstone",
        G: "#forge:glass_panes",
    });

    // Feral Flare Lantern
    e.remove({ id: "torchmaster:feral_flare_lantern" });
    e.shaped("torchmaster:feral_flare_lantern", ["SPR", "INP", "RIS"], {
        S: "#forge:screws/iron",
        P: "#forge:plates/glowstone",
        R: "#forge:rings/steel",
        I: "#forge:rods/steel",
        N: "#forge:small_springs/gold",
    });

    // Frozen Pearl
    e.remove({ id: "torchmaster:frozen_pearl" });

    e.remove({ id: "javd:portal_block" });
    e.shaped(`javd:portal_block`, ["PPP", "PEP", "PPP"], {
      P: "#forge:plates/obsidian",
      E: "gtceu:ender_pearl_block",
    });

    e.remove({output: 'naturescompass:naturescompass'})
    e.remove({output: 'enderchests:ender_chest'})
    e.remove({output: 'enderchests:ender_bag'})
    e.remove({output: 'endertanks:ender_tank'})
    e.remove({output: 'endertanks:ender_bucket'})
    e.remove({output: 'travellersbootsreloaded:travellers_boots_tier1'})
    e.remove({output: 'travellersbootsreloaded:travellers_boots_tier2'})
    e.remove({output: 'travellersbootsreloaded:travellers_boots_tier3'})
    e.remove({output: 'travellersbootsreloaded:travellers_boots_tier4'})
    e.remove({output: 'travellersbootsreloaded:travellers_boots_tier5'})

})