const API_BASE_URL = 'http://localhost:5000/api';

export const getFeaturedProducts = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/products/featured`);
        if (!response.ok) {
            throw new Error('Failed to fetch featured products');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching featured products:', error);
    }
};



