  import { queryByCollection } from '../server/lib/firestore';

  export const getItems = async (collection) => {
    try {
      const response = await queryByCollection(collection);
      const data = response.data;
      return data;
    } catch (e) {
      console.error('error getting data: ', e)
      return null
    }
  }
  
  // export const setItem = async(collection, data) => {   
  //   try {
  //   } catch (e) {
  //     console.error('error setting data: ', e);
  //   }
  // }

  // export const removeItem = async(collection, person) => {
  //   try {
      
  //   } catch (e) {
  //     console.error('error removing data: ', e)
  //   }
  // }