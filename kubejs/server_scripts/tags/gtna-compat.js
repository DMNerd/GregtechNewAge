ServerEvents.tags('item', e => {

    const butcher_knives = e.get('forge:tools/butchery_knives').getObjectIds()
    butcher_knives.forEach(knife => {
        e.add('occultism:tools/knives', knife)
    });

    const flours = ['create:wheat_flour', 'enderio:flour']
    flours.forEach(flour => {
        e.add('forge:dusts', flour)
        e.add('forge:dusts/wheat', flour)
    });

})