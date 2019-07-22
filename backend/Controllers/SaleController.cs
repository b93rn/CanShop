using System.Threading.Tasks;
using backend.Migrations.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class SaleController: ControllerBase
    {
        private ISaleRepo _saleRepo;

        public SaleController(ISaleRepo saleRepo)
        {
            _saleRepo = saleRepo;
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] SaleInput saleInput)
        {
            var newSale = await _saleRepo.CreateSaleAsync(saleInput.userId, saleInput.productId);
            return Ok(newSale);
        }
    }

    public class SaleInput {
        public int userId { get; set; }
        public int productId { get; set; }

        public SaleInput(int userId, int productId)
        {
            this.userId = userId;
            this.productId = productId;
        }
    }
}