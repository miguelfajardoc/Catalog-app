let globalid = 0
const mockProducts = Array.from({ length: 50 }, (_, i) => ({
  id: globalid++,
  title: `Product ${globalid}`,
  price: Math.floor(Math.random() * 100) + 10,
  category: ["Quesos", "Carnicos", "Embutidos", "Congelados", "Pan y mogolla", "Salsas"][i % 6],
  images: [`https://picsum.photos/200?random=${i + 1}`, `https://picsum.photos/200?random=${i + 51}`, `https://picsum.photos/200?random=${i + 101}`],
  description: "This is a sample product description",
}));

export const fetchProducts = ({ page = 1, limit = 8 }) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const start = (page - 1) * limit;
      const end = start + limit;

      resolve({
        data: mockProducts.slice(start, end),
        total: mockProducts.length,
        hasMore: end < mockProducts.length,
      });
    }, 800); // simula delay de red
  });
};