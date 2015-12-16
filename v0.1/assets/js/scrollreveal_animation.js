var fooReveal = {
	delay    : 200,
	distance : '90px',
	easing   : 'ease-in-out',
	rotate   : { z: 10 },
	scale    : 1.1
	};

window.sr = ScrollReveal()
	.reveal( '.titleAnim', {
		delay: 500,
		scale: 1,
		reset: true,
		easing: 'cubic-bezier(0.27, 0, 0.63, 0.99)',
		origin: 'right',
		distance: '50px'
	} )
	.reveal( '.card01', {
		rotate   : { y: 180 },
		delay: 100,
		scale: 0.9,
		reset: true,
		easing: 'cubic-bezier(0.27, 0, 0.63, 0.99)',
		origin: 'left',
		distance: '120px'
	} )
	.reveal( '.card02', {
		rotate   : { y: 180 },
		delay: 100,
		scale: 0.9,
		reset: true,
		easing: 'cubic-bezier(0.27, 0, 0.63, 0.99)',
		origin: 'bottom',
		distance: '20px'
	} )
	.reveal( '.card03', {
		rotate   : { y: 180 },
		delay: 100,
		scale: 0.9,
		reset: true,
		easing: 'cubic-bezier(0.27, 0, 0.63, 0.99)',
		origin: 'right',
		distance: '120px'
	} );

