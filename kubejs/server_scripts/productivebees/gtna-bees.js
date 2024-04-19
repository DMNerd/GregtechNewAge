ServerEvents.recipes(e => {

    let addBees = []
    addBees.forEach(bee => {
        e.custom({

        })    
    });

    function beeBreeding(parent1, parent2, offspring) {
		event.custom({
			type: 'productivebees:bee_breeding',
			parent1: `productivebees:${parent1}`,
			parent2: `productivebees:${parent2}`,
			offspring: [`productivebees:${offspring}`]
		})
	}
   
})