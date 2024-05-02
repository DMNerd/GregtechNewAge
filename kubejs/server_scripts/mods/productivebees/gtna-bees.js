ServerEvents.recipes(e => {
    
	function beeSpawning(nest, bee){
		e.custom({
			type: "productivebees:bee_spawning",
			ingredient: {
				"item": nest
			},
			results: [{
				"bee": bee
			}]
		})
	}
    function beeBreeding(parent1, parent2, offspring) {
		e.custom({
			type: 'productivebees:bee_breeding',
			parent1: `${parent1}`,
			parent2: `${parent2}`,
			offspring: [`${offspring}`]
		}).id('gtna:bees/' + offspring.replace(':', '_'))
	}
	function beeConversion(source, result, item) {
		e.custom({
			type: 'productivebees:bee_conversion',
			source: `productivebees:${source}`,
			result: `productivebees:${result}`,
			item: {
				item: item
			}
		})
	}

	e.remove({id: '/productivebees:bee_conversion/.*/'})
	e.remove({id: '/productivebees:bee_breeding/.*/'})

	beeSpawning('productivebees:bamboo_hive', 'gtnabees:lone')

	beeBreeding('gtnabees:plutonium', 'productivebees:iridium', 'gtnabees:naquadria')
	beeBreeding('gtnabees:uranium', 'productivebees:emerald', 'gtnabees:plutonium')
	beeBreeding('productivebees:radioactive', 'productivebees:platinum', 'gtnabees:uranium')
	beeBreeding('productivebees:withered', 'productivebees:glowing', 'productivebees:radioactive')
	beeBreeding('gtnabees:olivine', 'productivebees:diamond', 'productivebees:emerald')
	beeBreeding('gtnabees:certus', 'productivebees:ender', 'gtnabees:olivine')
	beeBreeding('gtnabees:certus', 'productivebees:coal', 'productivebees:diamond')
	beeBreeding('gtnabees:hermit', 'productivebees:lapis', 'gtnabees:certus')
	beeBreeding('gtnabees:demon', 'gtnabees:empress', 'productivebees:lapis')
	beeBreeding('gtnabees:evil', 'productivebees:magmatic', 'gtnabees:demon')
	beeBreeding('gtnabees:demon', 'productivebees:crystaline', 'gtnabees:hellforged')
	beeBreeding('gtnabees:lone', 'productivebees:nomad_bee', 'gtnabees:hermit')
	beeBreeding('productivebees:gold', 'gtnabees:noble', 'gtnabees:empress')
	beeBreeding('gtnabees:demon', 'gtnabees:nether', 'productivebees:withering')
	beeBreeding('gtnabees:nether', 'productivebees:magmatic', 'gtnabees:evil')


})