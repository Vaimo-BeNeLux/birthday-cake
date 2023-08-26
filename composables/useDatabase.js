  import { queryByCollection, add, set, del } from '../server/lib/firestore';

  export const getItems = async (collection, id) => {
    try {
      const response = await queryByCollection(collection);
      const data = response.data;

      if (id) {
        const idData = data.find(item => item.id === id);
        return idData || null;
      }
  
      return data;
    } catch (e) {
      console.error('error getting data: ', e);
      return null;
    }
  }

  export const getItem = async (collection, id) => {
    return await getItems(collection, id);
  }

  export const addItem = async (collection, document) => {
    try {
      return await add(collection, document);
    } catch (e) {
      console.log('error adding data: ', e)
    }
  }

  export const editItem = async (collection, id, document) => {
    try {
      return await set(collection, id, document);
    } catch (e) {
      console.error('error editing data: ', e);
    }
  }

  export const removeItem = async(collection, id) => {
    try {
      return await del(collection, id);
    } catch (e) {
      console.error('error removing data: ', e)
    }
  }