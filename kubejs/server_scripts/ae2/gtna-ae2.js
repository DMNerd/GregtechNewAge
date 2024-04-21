ServerEvents.recipes(e => {

    //replaceMetalInCrafting(e,'botania', material)

    e.replaceInput({id: '/gregi.*:.*/' }, 'ae2:sky_dust', 'gtceu:pure_skystone_dust')

    e.remove({ mod: 'aeinfinitybooster' })
    e.remove({ id: '/megacells:transform/' })

    e.replaceInput({id: '/ae2insertexport_card:.*/' }, 'minecraft:redstone_block', 'gtceu:redstone_alloy_plate')
})