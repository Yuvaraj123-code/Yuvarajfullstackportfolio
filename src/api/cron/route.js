export const URL = "https://portfolio-project-api-sooty.vercel.app/v1/api";
export const URL_V2 = "https://portfolio-project-api-sooty.vercel.app/v2/api";

// // const URL = "https://portfolio-project-api.onrender.com/v1/api/project";

// async function getProject() {
//   const data = await fetch(`${URL}/project`, {
//     next: {
//       revalidate: 60 * 60 * 12,
//     },
//   });
//   const result = await data.json();
//   return result;
// }

// export default getProject;

// Remove these URL constants - you won't need them anymore
// export const URL = "https://portfolio-project-api-sooty.vercel.app/v1/api";
// export const URL_V2 = "https://portfolio-project-api-sooty.vercel.app/v2/api";

import projectsData from '@/data/data.json';

// Simulate API response structure
export async function getProject() {
  // Optional: Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 300));
  
  return {
    count: projectsData.length,
    status: 200,
    success: true,
    message: "Projects loaded successfully",
    project: projectsData // Match the expected property name
  };
}

export default getProject;