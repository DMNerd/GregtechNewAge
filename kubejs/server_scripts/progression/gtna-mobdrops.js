LootJS.modifiers((e) => {
    e
        .addEntityLootModifier("minecraft:blaze")
        .replaceLoot("minecraft:blaze_rod", "gtceu:sulfur_dust", true);
    e
        .addEntityLootModifier("minecraft:enderman")
        .replaceLoot("minecraft:ender_pearl", "gtceu:ender_pearl_dust", true);
    e
        .addEntityLootModifier("minecraft:zombified_piglin")
        .removeLoot("minecraft:gold_nugget"); 
    e
        .addEntityLootModifier("minecraft:iron_golem")
        .removeLoot("minecraft:iron_ingot");
});