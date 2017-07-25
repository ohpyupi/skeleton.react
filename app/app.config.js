import {UIRouterReact, servicesPlugin, pushStateLocationPlugin} from '@uirouter/react';

//import Sample from './containers/sample';

let router = new UIRouterReact();
router.plugin(servicesPlugin);
router.plugin(pushStateLocationPlugin);

let states = [
/* Sample code to define a uirouter state.
	{
		name: 'sample',
		url: '/',
		component: Sample,
		onEnter: (trans, state)=>{
		},
	},
*/
];

router.urlRouter.otherwise("/");

for (let i = 0; i < states.length; i++) {
	let state = states[i];
	router.stateRegistry.register(state);
}

export default router;
