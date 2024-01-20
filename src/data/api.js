const fetchData = async () => {
  try {
    const response = await fetch('https://6458e4408badff578efdda4f.mockapi.io/card_product');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // Rethrow the error to handle it in the component if needed
  }
};

export { fetchData };
