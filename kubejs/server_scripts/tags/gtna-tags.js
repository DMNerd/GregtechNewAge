ServerEvents.tags('item', e => {
    const butcher_knives = e.get('forge:tools/butchery_knives').getObjectIds()
    butcher_knives.forEach(knife => {
        e.add('occultism:tools/knives', knife)
    });
})