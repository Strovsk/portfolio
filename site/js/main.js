var bio_index = 3;

window.onload = () => {
	window.starc = new Constelation(
    quantity = 40,
		size = {
			max: 15,
			min: 8
		},
		viewbox = {
			width: 425,
			height: 150,
			ox: 125,
			oy: -40,
		},
		container_id = "animation_star",
		use_container_metrics_width = false,
		use_container_metrics_height = false,
		opacity_status = true
	)
	starc.gen();
	init_selectors();
}
