import axios from 'axios';

// Fetch information card
const informationCard = async () => {
  try {
    const response = await axios.get(
      'https://6458e4408badff578efdda4f.mockapi.io/card_information'
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

// Add product
const addProduct = async (productData) => {
  try {
    const response = await axios.post(
      'https://6458e4408badff578efdda4f.mockapi.io/card_product',
      productData
    );
    console.log({ response });
    return response.data;
  } catch (error) {
    console.error('Error adding product:', error);
    throw error;
  }
};

export { informationCard, addProduct };
