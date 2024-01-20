import axios from 'axios';

const fetchData = async () => {
  try {
    const response = await axios.get('https://6458e4408badff578efdda4f.mockapi.io/card_product');
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

const deleteItem = async (itemId) => {
  try {
    const apiUrl = `https://6458e4408badff578efdda4f.mockapi.io/card_product/${itemId}`;
    const response = await axios.delete(apiUrl);

    if (response.status !== 200) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return response.data;
  } catch (error) {
    console.error('Error deleting item:', error);
    throw error;
  }
};

export { fetchData, deleteItem };
