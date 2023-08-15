import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
	return [
		{ title: "New Remix App" },
		{ name: "description", content: "Welcome to Remix!" },
	];
};

export default function Index() {
	return (
		<div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
			<h1>Remix with CSP Nonce</h1>
			<p>🤖 Open developer tools console</p>
		</div>
	);
}
