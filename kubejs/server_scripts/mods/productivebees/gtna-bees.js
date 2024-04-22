ServerEvents.recipes(e => {
    
    function beeBreeding(parent1, parent2, offspring) {
		e.custom({
			type: 'productivebees:bee_breeding',
			parent1: `productivebees:${parent1}`,
			parent2: `productivebees:${parent2}`,
			offspring: [`productivebees:${offspring}`]
		})
	}

   
})