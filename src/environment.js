  //const baseUrl = 'http://localhost:5001/api';
   //export {baseUrl}

const netlifyDeployedApiUrl = import.meta.env.VITE_API_BASE_URL; // This VAR NAME MUST MATCH Netlify setting
const localApiUrl = "http://localhost:5001/api"; // Your local backend with /api

export const baseUrl = netlifyDeployedApiUrl || localApiUrl;

// CRITICAL DEBUG LOGS - Keep these for now
console.log("ENVIRONMENT.JS: Raw VITE_API_BASE_URL from Netlify env:", import.meta.env.VITE_API_BASE_URL);
console.log("ENVIRONMENT.JS: Final 'baseUrl' being exported:", baseUrl);