using System.Collections.Generic;
using System.Threading.Tasks;
using backend.Models;

namespace backend.Migrations.Interfaces
{
    public interface IProductRepo
    {
        Task<Product> CreateProductAsync(Product product);
        Task<List<Product>> GetProductsAsync();
        Task<Product> UpdateProductAsync(Product product);
        Task<int> DeleteProduct(int id);
    }
}