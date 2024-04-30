ServerEvents.recipes(e => {
    const ars = e.recipes.ars_nouveau;
    ars.imbuement(
        "gtceu:arcane_crystal_gem", 
        "ars_nouveau:source_gem", 
        300, 
        []
    ).id('gtna:ars/source_gem')
    ars.imbuement(
        "#forge:stone", 
        "ars_nouveau:sourcestone", 
        200, 
        []
    ).id('gtna:ars/sourcestone')
})