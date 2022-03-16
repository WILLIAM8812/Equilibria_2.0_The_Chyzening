// priority: 0

console.info('Hello, World! (You will only see this line once in console, during startup)')

onEvent('item.registry', event => {
	event.create('mixed_diesel_bucket', item => {
    item.displayName('Mixed Diesiel Bucket')     
  	})
})

onEvent('block.registry', event => {
	// Register new blocks here
	// event.create('example_block').material('wood').hardness(1.0).displayName('Example Block')
})

onEvent('fluid.registry', event => {
  // Basic "thick" (looks like lava) fluid with red tint
  event.create('molten_cheese', fluid => {
    fluid.textureThin(0xFFFF00)
    fluid.bucketColor(0xFFFF00)
    fluid.displayName('Molten Cheese')
  })
})