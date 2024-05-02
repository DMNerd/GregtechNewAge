ServerEvents.recipes(e => {
    const ars = e.recipes.ars_nouveau;
    ars.enchanting_apparatus(
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
    
    ars.enchanting_apparatus(
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

})