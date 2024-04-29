ServerEvents.recipes(e => {
    const ars = e.recipes.ars_nouveau;
    e.remove({id: 'ars_nouveau:novice_spell_book'})
    e.replaceInput({ mod: 'ars_nouveau' }, 'minecraft:quartz', '#forge:plates/nether_quartz')
    //Spellbooks
    e.shaped('ars_nouveau:novice_spell_book', ['AAA', 'CBD', 'AAA'], {
        A: '#forge:foils/gold',
        B: 'minecraft:book',
        C: 'twilightforest:naga_scale',
        D: 'twilightforest:raven_feather',
    }).id('gtna:ars/novice_spell_book')
    //Blocks
    e.remove({id: 'ars_nouveau:imbuement_chamber'})
    e.shaped('ars_nouveau:imbuement_chamber', ['BAB', 'C C', 'DBD'], {
        A: '#forge:planks/archwood',
        B: 'ars_nouveau:archwood_slab',
        C: '#forge:rods/gold',
        D: '#forge:double_plates/gold',
    }).id('gtna:ars/imbuement_chamber')
    e.remove({output: 'ars_nouveau:source_gem'})
    e.remove({id: 'ars_nouveau:source_jar'})
    e.shaped('ars_nouveau:source_jar', ['EAE', 'C C', 'DBD'], {
        A: 'ars_nouveau:archwood_slab',
        B: '#forge:double_plates/gold',
        C: '#forge:glass_panes',
        D: '#forge:planks/archwood',
        E: '#forge:screws/rose_gold'
    }).id('gtna:ars/source_jar')
    e.remove({id: 'ars_nouveau:arcane_pedestal'})
    e.shaped('ars_nouveau:arcane_pedestal', ['ABA', 'CAC', 'DAD'], {
        A: 'ars_nouveau:sourcestone',
        B: 'ars_nouveau:source_gem',
        C: '#forge:rods/long/gold',
        D: '#forge:plates/gold',
    }).id('gtna:ars/arcane_pedestal')

})