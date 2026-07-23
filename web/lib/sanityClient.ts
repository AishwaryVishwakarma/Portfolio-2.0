// Sanity client to connect with the database server
import {createClient} from '@sanity/client';

// Pin the API version to a fixed date. Using `new Date()` here changed the
// version every day, which busted Sanity's CDN cache on each deploy/day.
const API_VERSION = '2024-02-01';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;

const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

export const client = createClient({
  projectId: projectId,
  dataset: dataset,
  useCdn: true,
  apiVersion: API_VERSION,
});
