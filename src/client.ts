import {createClient} from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const todayDate = new Date().toISOString().slice(0, 10);

export const client = createClient({
  projectId: '8pt23m89',
  dataset: 'production',
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: todayDate.toString(), // use current date (YYYY-MM-DD) to target the latest API version
});

const builder = imageUrlBuilder(client);

export function urlFor(source: string) {
  return builder.image(source);
}
