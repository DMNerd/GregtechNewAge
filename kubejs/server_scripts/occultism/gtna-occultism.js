ServerEvents.recipes(e => {

    e.remove({output: 'occultism:iesnium_pickaxe'})
    e.shaped('occultism:iesnium_pickaxe', ['BAA', 'CED', ' E '], {
        A: '#forge:ingots/iesnium', 
        B: '#forge:plates/iesnium',
        C: '#forge:tools/hammers',
        D: '#forge:tools/files',
        E: 'kubejs:bound_stick'
    }).id('gtna:occultism/iesnium_pick')

})