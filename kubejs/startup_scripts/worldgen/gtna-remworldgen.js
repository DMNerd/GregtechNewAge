WorldgenEvents.remove(e => {
    e.removeOres(b => {
        b.worldgenLayer = 'underground_ores';
        b.blocks = [
            "create:deepslate_zinc_ore",
            "create:zinc_ore",
            "create_new_age:magnetite_block",
            "create_new_age:thorium_ore",
            "mythicbotany:dragonstone_ore",
            "mythicbotany:elementium_ore",
            "mythicbotany:gold_ore",
            "occultism:silver_ore",
            "occultism:silver_ore_deepslate",
            "oreberriesreplanted:esence_berry_bush",
            "oreberriesreplanted:osmium_oreberry_bush",
            "sgjourney:deepslate_naquadah_ore",
            "sgjourney:naquadah_ore",
            "sgjourney:nether_naquadah_ore",
        ]
    })
    e.removeFeatureById('surface_structures', 'ad_astra:oil_well')
    e.removeFeatureById('surface_structures', 'ad_astra:meteor')
})