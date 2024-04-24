WorldgenEvents.remove(e => {
    e.removeOres(blocks => {
        blocks.worldgenLayer = 'underground_ores';
        blocks.blocks = [
            "create:zinc_ore",
            "create:deepslate_zinc_ore",
            "create_new_age:thorium_ore",
            "create_new_age:magnetite_block",
            "occultism:silver_ore",
            "occultism:silver_ore_deepslate",
            "sgjourney:naquadah_ore",
            "sgjourney:deepslate_naquadah_ore",
            "sgjourney:nether_naquadah_ore",
            "oreberriesreplanted:osmium_oreberry_bush",
            "oreberriesreplanted:esence_berry_bush"]
    })
  })