LootJS.modifiers(e => {
    function replaceMaterialsInLoot(tool, materials){
        materials.forEach(material => {
            e.addLootTableModifier("/.*:.*/").replaceLoot("minecraft:" + material[0] + "_" + tool, 'gtceu: '+ material[1] + '_' + tool)
        });
    }
    function replaceMetalInLoot(modid, metal){
        e.addLootTableModifier("/.*:.*/").replaceLoot(modid + ":" + metal[0] + '_ingot', 'gtceu:' + metal[1] + '_ingot')
        e.addLootTableModifier("/.*:.*/").replaceLoot(modid + ":" + metal[0] + '_nugget', 'gtceu:' + metal[1] + '_nugget')
    }
    const material = [['wooden', 'flint'], ['stone', 'flint'], ['iron', 'iron']]
    const tools = ['pickaxe', 'shovel', 'hoe', 'axe', 'sword']
    tools.forEach(tool => {
        replaceMaterialsInLoot(tool, material)
    });
    const metalsToReplace = [['enderio', 'dark_steel']]
    metalsToReplace.forEach(metal => {
        replaceMetalInLoot(metal[0], metal[1])
    });
});