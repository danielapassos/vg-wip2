export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.4c936df2.js","app":"_app/immutable/entry/app.8a541771.js","imports":["_app/immutable/entry/start.4c936df2.js","_app/immutable/chunks/index.02a5a54f.js","_app/immutable/chunks/singletons.1cd9e1d5.js","_app/immutable/entry/app.8a541771.js","_app/immutable/chunks/index.02a5a54f.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js')
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
