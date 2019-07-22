using System;
using System.Threading.Tasks;
using backend.Migrations.Interfaces;
using backend.Models;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductController : ControllerBase
    {
        private IProductRepo _productRepo { get; set; }

        public ProductController(IProductRepo productRepo)
        {
            _productRepo = productRepo;
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] Product product)
        {
            var newProduct = await _productRepo.CreateProductAsync(product);
            return Ok(newProduct);
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var products = await _productRepo.GetProductsAsync();
            return Ok(products);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, Product product)
        {
            if(id != product.Id) 
                return BadRequest();

            var updatedProduct = await _productRepo.UpdateProductAsync(id, product);
            return Ok(updatedProduct);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            try
            {
                var deletedProductId = await _productRepo.DeleteProduct(id);
                return Ok(deletedProductId);
            }
            catch (Exception err)
            {
                return NotFound(err.Message);
            }
        }
    }
}