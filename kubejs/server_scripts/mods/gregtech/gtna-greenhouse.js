ServerEvents.recipes((e) => {
  const greg = e.recipes.gtceu;
    const trees = [
      ["minecraft:oak_sapling", "minecraft:oak_log"],
      ["minecraft:spruce_sapling", "minecraft:spruce_log"],
      ["minecraft:birch_sapling", "minecraft:birch_log"],
      ["minecraft:jungle_sapling", "minecraft:jungle_log"],
      ["minecraft:acacia_sapling", "minecraft:acacia_log"],
      ["minecraft:dark_oak_sapling", "minecraft:dark_oak_log"],
      ["minecraft:mangrove_propagule", "minecraft:mangrove_log"],
      ["minecraft:cherry_sapling", "minecraft:cherry_log"],
      ["minecraft:warped_fungus", "minecraft:warped_stem"],
      ["minecraft:crimson_fungus", "minecraft:crimson_stem"],
      ["ars_elemental:yellow_archwood_sapling", "ars_elemental:yellow_archwood_log"],
      ["ars_nouveau:blue_archwood_sapling", "ars_nouveau:blue_archwood_log"],
      ["ars_nouveau:red_archwood_sapling", "ars_nouveau:red_archwood_log"],
      ["ars_nouveau:purple_archwood_sapling", "ars_nouveau:purple_archwood_log"],
      ["ars_nouveau:green_archwood_sapling", "ars_nouveau:green_archwood_log"],
      ["twilightforest:twilight_oak_sapling", "twilightforest:twilight_oak_log"],
      ["twilightforest:rainbow_oak_sapling", "twilightforest:twilight_oak_log"],
      ["twilightforest:canopy_sapling", "twilightforest:canopy_log"],
      ["twilightforest:mangrove_sapling", "twilightforest:mangrove_log"],
      ["twilightforest:time_sapling", "twilightforest:time_log"],
      ["twilightforest:transformation_sapling", "twilightforest:transformation_log"],
      ["twilightforest:mining_sapling", "twilightforest:mining_log"],
      ["twilightforest:sorting_sapling", "twilightforest:sorting_log"],
    ];
    const fruit_trees = [
      ["berries_and_cherries:cherry_tree_sapling", "minecraft:oak_log", "berries_and_cherries:cherries"],
      ["fruitsdelight:orange_sapling", "minecraft:oak_log", "fruitsdelight:orange"],
      ["fruitsdelight:apple_sapling", "minecraft:oak_log", "minecraft:apple"],
      ["fruitsdelight:mangosteen_sapling", "minecraft:oak_log", "fruitsdelight:mangosteen"],
      ["fruitsdelight:fig_sapling", "minecraft:oak_log", "fruitsdelight:fig"],
      ["fruitsdelight:pear_sapling", "minecraft:birch_log", "fruitsdelight:pear"],
      ["fruitsdelight:hawberry_sapling", "minecraft:spruce_log", "fruitsdelight:hawberry"],
      ["fruitsdelight:persimmon_sapling", "minecraft:spruce_log", "fruitsdelight:persimmon"],
      ["fruitsdelight:bayberry_sapling", "minecraft:spruce_log", "fruitsdelight:bayberry"],
      ["fruitsdelight:lychee_sapling", "minecraft:jungle_log", "fruitsdelight:lychee"],
      ["fruitsdelight:mango_sapling", "minecraft:jungle_log", "fruitsdelight:mango"],
      ["fruitsdelight:peach_sapling", "minecraft:jungle_log", "fruitsdelight:peach"],
      ["fruitsdelight:kiwi_sapling", "minecraft:jungle_log", "fruitsdelight:kiwi"],
      ["fruitsdelight:durian_sapling", "minecraft:jungle_log", "fruitsdelight:durian"],

    ];
    const plants = [
      ["minecraft:pumpkin_seeds", "minecraft:pumpkin", 6],
      ["minecraft:beetroot_seeds", "minecraft:beetroot", 16],
      ["minecraft:sweet_berries", "minecraft:sweet_berries", 16],
      ["minecraft:glow_berries", "minecraft:glow_berries", 8],
      ["minecraft:wheat_seeds", "minecraft:wheat", 16],
      ["minecraft:melon_seeds", "minecraft:melon", 6],
      ["minecraft:carrot", "minecraft:carrot", 12],
      ["minecraft:sugar_cane", "minecraft:sugar_cane", 12],
      ["minecraft:kelp", "minecraft:kelp", 12],
      ["minecraft:cactus", "minecraft:cactus", 12],
      ["minecraft:brown_mushroom", "minecraft:brown_mushroom", 12],
      ["minecraft:red_mushroom", "minecraft:red_mushroom", 12],
      ["minecraft:nether_wart", "minecraft:nether_wart", 12],
      ["minecraft:bamboo", "minecraft:bamboo", 16],
      ["berries_and_cherries:raspberry", "berries_and_cherries:raspberry", 16],
      ["berries_and_cherries:blueberry", "berries_and_cherries:blueberry", 16],
      ["berries_and_cherries:black_grapes", "berries_and_cherries:black_grapes", 16],
      ["berries_and_cherries:green_grapes", "berries_and_cherries:green_grapes", 16],
      ["berries_and_cherries:strawberry", "berries_and_cherries:strawberry", 16],
      ["fruitsdelight:pineapple", "fruitsdelight:pineapple", 16],
      ["fruitsdelight:lemon", "fruitsdelight:lemon", 16],
      ["fruitsdelight:cranberry", "fruitsdelight:cranberry", 16],
      ["fruitsdelight:hamimelon_seeds", "fruitsdelight:hamimelon", 6],

    ];
    const oreberries = [['iron'], ['gold'], ['copper'], ['tin'], ['aluminum'], ['lead'], ['nickel'], ['uranium'], ['osmium'], ['zinc'], ['silver'], ['essence']];
    
    trees.forEach((woodType) => {
      greenhousetreerecipe(greg, woodType)
    });
    fruit_trees.forEach((woodType) => {
      greenhousefruittreerecipe(greg, woodType)
    });
    plants.forEach((seedType) => {
      greenhouseplantrecipe(greg, seedType)
    });   
    oreberries.forEach((ore) => {
      greenhouseoreberryrecipe(greg, ore)
    });
    oreberry_crossbreed(greg, 'lead_oreberry_bush', 'nickel_oreberry_bush', 'osmium_oreberry_bush', Fluid.of('gtceu:osmium', 1500))
    
  greg
    .greenhouse("rubber_wood")
    .notConsumable("gtceu:rubber_sapling")
    .inputFluids("water 1000")
    .itemOutputs(
      "16x gtceu:rubber_log",
      "3x gtceu:rubber_sapling",
      "4x gtceu:sticky_resin"
    )
    .duration(1200)
    .EUt(40)
    .circuit(1);
  greg
    .greenhouse("rubber_wood_fertiliser")
    .notConsumable("gtceu:rubber_sapling")
    .itemInputs("4x gtceu:fertilizer")
    .inputFluids("water 1000")
    .itemOutputs(
      "32x gtceu:rubber_log",
      "6x gtceu:rubber_sapling",
      "8x gtceu:sticky_resin"
    )
    .duration(900)
    .EUt(60)
    .circuit(2);
    

});
 