import {createClient} from '@sanity/client';

const todayDate = new Date().toISOString().slice(0, 10);

export const projectId = '8pt23m89';

export const dataset = 'production';

export const client = createClient({
  projectId: projectId,
  dataset: dataset,
  useCdn: true,
  apiVersion: todayDate.toString(),
});
