using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backend.Migrations.Interfaces;
using backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backend.Data.Repos
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductRepo : IProductRepo
    {
        private CanshopContext _db { get; set; }

        public ProductRepo(CanshopContext db)
        {
            _db = db;
        }
        public async Task<Product> CreateProductAsync(Product product)
        {
            await _db.Products.AddAsync(product);
            await _db.SaveChangesAsync();
            return product;
        }

        public async Task<int> DeleteProduct(int id)
        {
            var product = await GetProductAsync(id);
            if (product != null && product.Id == id)
            {
                _db.Products.Remove(product);
                await _db.SaveChangesAsync();
                return id;
            }
            else
                throw new KeyNotFoundException("No product found with the given Id.");
        }

        public async Task<List<Product>> GetProductsAsync()
        {
            return await _db.Products.ToListAsync();
        }

        public async Task<Product> UpdateProductAsync(int id, Product product)
        {
            // TODO check if values are not null

            _db.Entry(product).State = EntityState.Modified;
            await _db.SaveChangesAsync();
            return product;
        }

        public async Task<Product> GetProductAsync(int id)
        {
            return await _db.Products.Where(x => x.Id == id).FirstOrDefaultAsync();
        }

        public async Task<Product> GetRandomProduct()
        {
            var products = await GetProductsAsync();

            if (products.Count < 1)
                return null;

            var rnd = new Random();
            var randomNumber = rnd.Next(products.Count);

            return products[randomNumber];
        }
    }
}