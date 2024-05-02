LootJS.modifiers(e => {
    function replaceMaterialsInLoot(tool, materials){
        materials.forEach(material => {
            e.addLootTableModifier("/.*:.*/").replaceLoot("minecraft:" + material[0] + "_" + tool, 'gtceu: '+ material[1] + '_' + tool)
        });
    }
    function replaceMetalInLoot(modid, metal){
        e.addLootTableModifier("/.*:.*/").replaceLoot(modid + ":" + metal + '_ingot', 'gtceu:' + metal[1] + '_ingot')
        e.addLootTableModifier("/.*:.*/").replaceLoot(modid + ":" + metal + '_nugget', 'gtceu:' + metal[1] + '_nugget')
    }
    const material = [['wooden', 'flint'], ['stone', 'flint'], ['iron', 'iron']]
    const tools = ['pickaxe', 'shovel', 'hoe', 'axe', 'sword']
    tools.forEach(tool => {
        replaceMaterialsInLoot(tool, material)
    });
    const metalsToReplace = [['enderio', 'dark_steel'], ['botania', 'manasteel'], ['botania', 'terrasteel']]
    metalsToReplace.forEach(metal => {
        replaceMetalInLoot(metal[0], metal[1])
    });

    e.addBlockLootModifier("#forge:grasses")        
        .matchMainHand('#forge:tools/knives')
        .addLoot("farmersdelight:straw")
        .randomChance(0.3)
});