// Sanity client to connect with the database server
import {createClient} from '@sanity/client';

const todayDate = new Date().toISOString().slice(0, 10);

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;

const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

export const client = createClient({
  projectId: projectId,
  dataset: dataset,
  useCdn: true,
  apiVersion: todayDate.toString(),
});
