
using System;
using System.Threading.Tasks;
using backend.Data.Repos;
using backend.Migrations.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class StatsController : ControllerBase
    {
        private IUserRepo _userRepo { get; set; }
        private IProductRepo _productRepo { get; set; }
        private ISaleRepo _saleRepo { get; set; }

        public StatsController(IUserRepo userRepo, ISaleRepo saleRepo, IProductRepo productRepo)
        {
            _userRepo = userRepo;
            _saleRepo = saleRepo;
            _productRepo = productRepo;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var user = await _userRepo.GetRandomUser();

            if (user == null)
                return Ok("Er zijn geen gebruikers");

            var product = await _productRepo.GetRandomProduct();

            if (product == null)
                return Ok("Er zijn geen producten");

            var boughtTimes = await _saleRepo.GetUserSaleCountByProdyct(user.Id, product.Id);

            if (boughtTimes < 1)
                return Ok($"{user.FirstName} {user.LastName} drinkt liever geen {product.Name}");

            return Ok($"{user.FirstName} {user.LastName} heeft {boughtTimes} keer {product.Name} gekocht");
        }
    }
}