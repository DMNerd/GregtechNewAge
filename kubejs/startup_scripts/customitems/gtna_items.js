// Listen to item registry event
StartupEvents.registry('item', e => {
    e.create('bound_stick')

    e.create('reinforced_rocket_nose_cone')
    e.create('reinforced_multisensor_rocket_nose_cone')
    e.create('advanced_multisensor_rocket_nose_cone')
    e.create('fluix_crystal_cpu')
})