import {createClient} from '@sanity/client';

const todayDate = new Date().toISOString().slice(0, 10);

export const client = createClient({
  projectId: '8pt23m89',
  dataset: 'production',
  useCdn: true,
  apiVersion: todayDate.toString(),
});
