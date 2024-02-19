// Function to get the cms data
import {isValidString} from '.';
import {client} from '../../lib/sanityClient';

export const getCmsData = async (query: string) => {
  if (!isValidString(query)) return null;

  return await client.fetch(query);
};
