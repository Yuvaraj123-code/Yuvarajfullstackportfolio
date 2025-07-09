import projectsData from '@/data/data.json';

export async function getProject() {
  // Optional: Simulate API delay (remove if not needed)
  await new Promise(resolve => setTimeout(resolve, 300));
  
  return {
    count: projectsData.length,
    status: 200,
    success: true,
    message: "Projects loaded successfully",
    project: projectsData
  };
}

export default getProject;

// const ProjectUpdatePage = async ({
//   params,
// }: {
//   params: { projectID: string };
// }) => {
//   const project = await getProject(params.projectID);
//   return (
//     <div className="relative overflow-hidden bg-slate-100 dark:bg-[#020617]  ">
//       <div className="mx-auto max-w-7xl px-2 ">
//         <div className="pt-24 md:pt-36 flex justify-between items-center">
//           <h2 className="lg:text-3xl font-bold">Update Project</h2>
//           <BackButton />
//         </div>
//         <ProjectUpdate projectID={project} />
//       </div>
//     </div>
//   );
// };

// export default ProjectUpdatePage;
