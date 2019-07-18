using System.Collections.Generic;
using System.Threading.Tasks;
using backend.Migrations.Interfaces;
using backend.Models;

namespace backend.Data.Repos
{
    public class ProductRepo : IProductRepo 
    {
        private BenchmarkContext _db { get; set; }

        public ProductRepo(BenchmarkContext db)
        {
            _db = db;
        }
        public Task<Product> CreateProductAsync(Product product)
        {
            throw new System.NotImplementedException();
        }

        public Task<int> DeleteProduct(int id)
        {
            throw new System.NotImplementedException();
        }

        public Task<List<Product>> GetProductsAsync()
        {
            throw new System.NotImplementedException();
        }

        public Task<Product> UpdateProductAsync(Product product)
        {
            throw new System.NotImplementedException();
        }
    }
}