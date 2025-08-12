const API_URL = import.meta.env.VITE_API_URL;

export async function getSkills() {
  const res = await fetch(`${API_URL}/skills`);
  return res.json();
}

export async function addSkill(skill) {
  const res = await fetch(`${API_URL}/skills`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(skill)
  });
  return res.json();
}
