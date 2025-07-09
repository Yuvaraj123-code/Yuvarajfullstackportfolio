// const URL = "https://portfolio-project-api-sooty.vercel.app/v1/api/project";

// async function getProject() {
//   const data = await fetch(URL);
//   const result = await data.json();

//   return result;
// }

// export default getProject;


import localData from '@/data/data.json';

const USE_LOCAL_DATA = true; // Set to false to use API

async function getProject() {
  if (USE_LOCAL_DATA) {
    await new Promise(resolve => setTimeout(resolve, 100));
    return localData;
  }

  // Fallback to API if needed
  // const res = await fetch('https://portfolio-project-api-sooty.vercel.app/v1/api/project');
  // return await res.json();
}

export default getProject;