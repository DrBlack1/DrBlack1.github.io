export default function Style(css) {
	const head = document.querySelector("head")
	head.append("\t")
	const el = document.createElement("style")
	el.appendChild(document.createTextNode(css + "\t\t"))
	head.appendChild(el)
	head.append("\n\t")
}