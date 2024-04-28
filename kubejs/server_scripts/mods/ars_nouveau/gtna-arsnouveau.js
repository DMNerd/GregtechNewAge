ServerEvents.recipes(e => {
    const ars = e.recipes.ars_nouveau;
    e.remove({id: 'ars_nouveau:novice_spell_book'})
    e.replaceInput({ mod: 'ars_nouveau' }, 'minecraft:quartz', '#forge:plates/nether_quartz')
    e.shaped('ars_nouveau:novice_spell_book', ['AAA', 'CBD', 'AAA'], {
        A: '#forge:foils/gold',
        B: 'minecraft:book',
        C: 'twilightforest:naga_scale',
        D: 'twilightforest:raven_feather',
    }).id('gtna:ars_nouveau/novice_spell_book')

})