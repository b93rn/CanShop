using System;
using System.Threading.Tasks;
using backend.Migrations.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class SaleController : ControllerBase
    {
        private readonly ISaleRepo _saleRepo;

        public SaleController(ISaleRepo saleRepo)
        {
            _saleRepo = saleRepo;
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] SaleInput saleInput)
        {
            var newSale = await _saleRepo.CreateSaleAsync(saleInput.UserId, saleInput.ProductId);
            return Ok(newSale);
        }

        [HttpGet("{top}")]
        public async Task<IActionResult> Get(int top)
        {
            return Ok(await _saleRepo.GetTopSales(top));
        }

        [HttpDelete("{saleId}")]
        public async Task<IActionResult> Refund(int saleId)
        {
            try
            {
                var refundResult = await _saleRepo.RefundProductAsync(saleId);
                return Ok(refundResult);
            }
            catch (Exception e)
            {
                Console.WriteLine(e.ToString());
                return NotFound(e.Message);
            }
        }
    }

    public class SaleInput
    {
        public int UserId { get; set; }
        public int ProductId { get; set; }

        public SaleInput(int userId, int productId)
        {
            UserId = userId;
            ProductId = productId;
        }
    }
}