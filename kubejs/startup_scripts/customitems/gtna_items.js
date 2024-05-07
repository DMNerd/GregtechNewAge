// Listen to item registry event
StartupEvents.registry('item', e => {
    e.create('pack_icon').maxStackSize(1)

    e.create('bound_stick')

    e.create('reinforced_rocket_nose_cone').displayName("Reinforced Nose Cone Tier 1")
    e.create('reinforced_rocket_nose_cone_t2').displayName("Reinforced Nose Cone Tier 2")
    e.create('advanced_rocket_nose_cone').displayName("Advanced Nose Cone Tier 1")
    e.create('advanced_rocket_nose_cone_t2').displayName("Advanced Nose Cone Tier 2")
    e.create('advanced_rocket_nose_cone_t3').displayName("Advanced Nose Cone Tier 3")

    e.create('reinforced_rocket_fin').displayName("Reinforced Rocket Fin Tier 1")
    e.create('reinforced_rocket_fin_t2').displayName("Reinforced Rocket Fin Tier 2")
    e.create('advanced_rocket_fin').displayName("Advanced Rocket Fin")

    e.create('third_eye').displayName("Third Eye of Magitech").tooltip('§cIt opens your eyes to the world of magic')

    e.create('fluix_crystal_cpu')
})