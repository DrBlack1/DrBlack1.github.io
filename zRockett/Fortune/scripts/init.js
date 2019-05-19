(() => {

	const scripts = document.querySelectorAll("head script")
	for (const script of scripts) {
		script.parentNode.removeChild(script)
	}
	setTimeout(console.clear, 0) // defer

	// minireset
	let minireset = "stylesheets/minireset"
	if (Build.cdn) {
		minireset = "https://rawgit.com/jgthms/minireset.css/master/minireset"
	}
	minireset += !Build.production ? ".css" : ".min.css"

	// vue
	let vue = "scripts/vue"
	if (Build.cdn) {
		vue = "https://unpkg.com/vue@2.5.x/dist/vue"
	}
	vue += !Build.production ? ".js" : ".min.js"

	document.write(`
		<link rel="stylesheet" href="${minireset}">
		<link rel="stylesheet" href="stylesheets/main.css">
		<script src="${vue}"></script>
		<script type="module" src="scripts/main.js"></script>
	`)

})()