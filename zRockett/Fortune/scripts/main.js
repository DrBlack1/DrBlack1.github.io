import Style from "./modules/Style.js"

// E: Emoji
Vue.component("E", {
	template: `
		<span class="margin-r:1/md">
			<slot></slot>
		</span>
	`
})

Vue.component("Title", {
	template: `
		<h1 class="padding-x:2 font-size:2*xs 900">
			<slot></slot>
		</h1>
	`
})

// V: Version
Vue.component("V", {
	template: `
		<sup class="padding-y:1/xs padding-x:1/sm font-size:1/xl color:white background:green-5 border-radius:xs" style="vertical-align: top;">
			<slot></slot>
		</sup>
	`
})

Vue.component("Subtitle", {
	template: `
		<h2 class="padding-y:1/lg padding-x:2 font-size:2">
			<slot></slot>
		</h2>
	`
})

Vue.component("Header", {
	template: `
		<h3 class="Header margin-t:2 padding-x:2 700 font-size:2/xl">
			<a class="font-weight:700 color:blue-4" href="#">
				<slot></slot>
			</a>
		</h3>
	`
})

Style(`

.Header:first-of-type {
	margin-top: var(--size\\3A 4);
}

`)

Vue.component("Paragraph", {
	template: `
		<p class="padding-y:1/lg padding-x:2 font-size:1*sm line-height:md">
			<slot></slot>
		</p>
	`
})

new Vue({
	el: "#app",
	template: `

<div class="grid">

<aside class="Sidebar grid:sidebar background:grey-7" style="min-height: 100vh;">
	<div class="margin-y:4 margin-x:2 border-radius:sm" style="background: linear-gradient(var(--purple-t) -50%, var(--purple-b) 50%); box-shadow: 0 var(--size\\3A 1) var(--size\\3A 1) #3333;">
		<div class="padding-y:1 padding-x:1">
			<h1 class="padding-y:1/md padding-x:1 font-weight:700 font-size:1*md color:white border-radius:sm" style="box-shadow: 0 var(--size\\3A 1) var(--size\\3A 1) #3331;">Introduction</h1>
			<div class="margin-t:1">
				<p class="padding-y:1/md padding-x:1 font-weight:600 color:white">• Introduction</p>
				<p class="padding-y:1/md padding-x:1 font-weight:600 color:white border-radius:sm" style="background: var(--purple-i); box-shadow: inset 0 var(--size-1) var(--size-2) #3333;">• Getting Started</p>
				<p class="padding-y:1/md padding-x:1 font-weight:600 color:white">• CodePens</p>
			</div>
		</div>
		<div class="padding-y:1 padding-x:1">
			<h1 class="padding-y:1/md padding-x:1 font-weight:700 font-size:1*md color:white border-radius:sm">Introduction</h1>
			<div class="margin-t:1">
				<p class="padding-y:1/md padding-x:1 font-weight:600 color:white">• Introduction</p>
				<p class="padding-y:1/md padding-x:1 font-weight:600 color:white">• Getting Started</p>
				<p class="padding-y:1/md padding-x:1 font-weight:600 color:white">• CodePens</p>
			</div>
		</div>
		<div class="padding-y:1 padding-x:1">
			<h1 class="padding-y:1/md padding-x:1 font-weight:700 font-size:1*md color:white border-radius:sm">Introduction</h1>
			<div class="margin-t:1">
				<p class="padding-y:1/md padding-x:1 font-weight:600 color:white">• Introduction</p>
				<p class="padding-y:1/md padding-x:1 font-weight:600 color:white">• Getting Started</p>
				<p class="padding-y:1/md padding-x:1 font-weight:600 color:white">• CodePens</p>
			</div>
		</div>
	</div>
</aside>

<main class="grid:content padding-y:4 color:grey-1">

<Title><E>🔮✨</E> FORTUNE <V>0.6.2</V></Title>
<Subtitle><strong>Fortune</strong> is a new and modern <strong>CSS framework</strong> that emphasizes use of <strong>CSS variables</strong> <E>⚗</E></Subtitle>

<Header><E>🌈</E> Introduction</Header>
<Paragraph>
Fortune is a modern and modular CSS Framework that emphasizes (extensive) use of CSS variables.
With the introduction and the , CSS variables (combined with CSS Grid and Flexbox) make building and shipping beautiful web-based UIs possible with just few configurations.
</Paragraph>

<Header><E>🖖</E> Value Proposition I</Header>
<Paragraph>
Fortune specializes in helping developers write beautiful UIs for their websites and web apps fast using util CSS classes.
And there are several kinds of classes––abstract classes that influence the margin and padding, component classes which construct a common CSS component e.g. a button, modifiers which update aspects of a CSS component, and state modifiers which induce a state (like psuedo-selectors).
</Paragraph>

<Header><E>👻</E> Value Proposition II</Header>
<Paragraph>
Rather than attempt to do too much trail-blazing, Fortune apprecaites previous and existing CSS frameworks such as ... and ... and aims to build on their successes and fill in where possible.
No CSS framework will work for 100% of all developer needs, but Fortune tries to to address making modern CSS more intuitive and flexible than hard-coding (e.g. imperative CSS).
With CSS variables at its core, Fortune is intended to address a wide spectrum of designs due to its adaptable engineering.
</Paragraph>

<Header><E>👆</E> Added Benefits I</Header>
<Paragraph>
One intersting benefit to experimenting with Fortune is that the entire project can be used without a build-process, meaning both the development and production version of Fortune can be used as-is without intervention whatsoever.
Fortune can both teach best practices with CSS and aid developers in creating beautiful websites fast without the same overhead as conventional CSS.
</Paragraph>

<Header><E>✌️</E> Added Benefits II</Header>
<Paragraph>
Because CSS and util classes can become hard to manage in fluid projects that have rapid-changing contraints, rather than just focusing on CSS variables to address design challenges.
Fortune is a proponent of Vue-component-based custom elements that can be used to both obscure the implementation classes that compose an CSS component, making updating and managing UI componets defined in the DOM intutive and light to maintain.
</Paragraph>

<Header><E>⚗</E> CSS Variables</Header>
<Paragraph>
Despite SASS, Compass, and others having first-class tooling when it comes to frontend web development, CSS variables offers some new and interesting possibilities for how frontend developers can think about websites and web apps.
CSS variables which have xx% support on major browsers on mobile and yy% support on major browsers on desktop, means developers can leverage Fortune as a first-class citizen for building for the web.
</Paragraph>

<Header><E>🔬</E> CSS Variables: Compile-Time</Header>
<Paragraph>
In programming, there are two (simple) steps to a program being run: compile-time and runtime.
Compile-time represents the moment at which a compiler interprets source code and outputs a desired result.
The process of Sass transforming input to output files via e.g. --watch is the compile-time, more-or-less being hidden because of it's automatic nature.
</Paragraph>

<Header><E>🔭</E> CSS Variables: Runtime</Header>
<Paragraph>
Runtime however offers new possibilities; that being that we can now update our UI (in more than one place) WHILE our website or web app is being rendered in the client.
That means we update the values of our CSS variables and have those changes propogate throughout the website either before––which is nothing new––or whilst being viewed––this is new!
</Paragraph>

<Header><E>🤖</E> CSS Variables: JavaScript</Header>
<Paragraph>
While this is (on a technical level) possible with JavaScript, Fortune argues that it's the wrong spec for the job!
JavaScript can however be used to update the value of a CSS variable––as supposed to update all values in our rendered CSS––and have the changes propogate through and through.
This is a kind of reactive programming, where updating something once is reflected in other places, too!
</Paragraph>

</main>

</div>

	`
})

// rem converts rem to px
const rem = (n) => n * 16 + "px"

Style(`

:root {
	--purple-t: #C4A8FF;	
	--purple-b: #A479FF;
	--purple-i: #9062F2;

	font: 1rem/1.2 BlinkMacSystemFont, -apple-system;
}

.grid {
	display: grid;
	grid-template-columns: 20rem 1fr minmax(0, 48rem) 2fr;
}

.grid\\3A sidebar,
.grid\\3A content {
	height: 100vh;
	overflow-y: scroll;
}

.grid\\3A sidebar { grid-column: 1 / 2; }
.grid\\3A content { grid-column: 3 / 4; }

@media (max-width: ${rem(68)}) {
	/* update grid */
	.grid {
		grid-template-columns: 0 1fr minmax(0, 48rem) 1fr;
	}
	/* hide sidebar */
	.grid\\3A sidebar {
		display: none;
	}
}

@media (max-width: ${rem(48)}) {
	:root {
		font-size: 14px;
	}
	.grid {
		
	}
}

@media (max-width: ${rem(36)}) {
	:root {
		font-size: 12px;
	}
}

`)