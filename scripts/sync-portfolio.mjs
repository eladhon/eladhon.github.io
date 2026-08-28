import { writeFile } from "node:fs/promises";

const username = process.env.GITHUB_USERNAME || "eladhon";
const token = process.env.GITHUB_TOKEN;
const headers = {
  Accept: "application/vnd.github+json",
  "X-GitHub-Api-Version": "2022-11-28",
  ...(token ? { Authorization: `Bearer ${token}` } : {}),
};

const repositories = [];
for (let page = 1; ; page += 1) {
  const response = await fetch(
    `https://api.github.com/users/${encodeURIComponent(username)}/repos?per_page=100&page=${page}&type=owner&sort=updated`,
    { headers },
  );

  if (!response.ok) {
    throw new Error(`GitHub API request failed: ${response.status} ${response.statusText}`);
  }

  const pageRepositories = await response.json();
  repositories.push(...pageRepositories);
  if (pageRepositories.length < 100) break;
}

const portfolio = repositories
  .filter((repository) => !repository.fork && !repository.private)
  .map((repository) => ({
    name: repository.name,
    description: repository.description || "",
    language: repository.language,
    url: repository.html_url,
    stars: repository.stargazers_count,
    forks: repository.forks_count,
  }));

await writeFile("portfolio.json", `${JSON.stringify(portfolio, null, 2)}\n`, "utf8");
console.log(`Saved ${portfolio.length} public repositories to portfolio.json`);
