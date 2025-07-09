// import projectsData from '@/data/data.json';

// export async function getProject() {
//   // Optional: Simulate API delay (remove if not needed)
//   await new Promise(resolve => setTimeout(resolve, 300));
  
//   return {
//     count: projectsData.length,
//     status: 200,
//     success: true,
//     message: "Projects loaded successfully",
//     project: projectsData
//   };
// }

// export default getProject;

import projectsData from '@/data/data.json';
import Image from "next/image";

// Move this function to a separate file if needed elsewhere
async function fetchProjectData() {
  await new Promise(resolve => setTimeout(resolve, 300));
  
  return {
    count: projectsData.length,
    status: 200,
    success: true,
    message: "Projects loaded successfully",
    project: projectsData
  };
}

export default async function ProjectPage({ params }: { params: { projectID: string } }) {
  const data = await fetchProjectData();
  const project = data.project.find(p => p.title === params.projectID); // Adjust this to match your ID field

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold">{project.title}</h1>
      <Image src={project.image} alt={project.title} className="my-4" />
      <p>{project.details}</p>
      {/* Add more project details as needed */}
    </div>
  );
}


