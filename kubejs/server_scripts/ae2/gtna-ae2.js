ServerEvents.recipes(e => {

    e.replaceInput({id: '/gregi.*:.*/' }, 'ae2:sky_dust', 'gtceu:pure_skystone_dust')

    e.remove({ mod: 'aeinfinitybooster' })
    e.remove({ id: '/megacells:transform/' })


})