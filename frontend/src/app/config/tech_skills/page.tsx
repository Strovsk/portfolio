import { listTechSkills } from "@/services/hooks/TechSkill.service";

export default async function TechSkillsPage() {
	const techLists = await listTechSkills();

	console.log("Tech Skills Page - techLists:", techLists);

	return (
		<div>
			<h1>Tech Skills (protected page)</h1>
			<p>This page is under construction.</p>

			<pre>{JSON.stringify(techLists, null, 2)}</pre>
		</div>
	);
}
