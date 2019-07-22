using System.Collections.Generic;
using System.Threading.Tasks;
using backend.Migrations.Interfaces;
using backend.Models;

namespace backend.Data.Repos
{
    public class SaleRepo : ISaleRepo
    {
        private BenchmarkContext _db;
        private IUserRepo _userRepo;
        private IProductRepo _productRepo;

        public SaleRepo(BenchmarkContext db, IUserRepo userRepo, IProductRepo productRepo)
        {
            _db = db;
            _userRepo = userRepo;
            _productRepo = productRepo;
        }

        public async Task<Sale> CreateSaleAsync(int userId, int productId)
        {
            var user = await _userRepo.GetUserAsync(userId);
            var product = await _productRepo.GetProductAsync(productId);
            var sale = Sale.BuyProduct(user, product);

            // TODO: Seperate SaveChanges, refactor code (repo pattern?).
            try
            {
                await _userRepo.UpdateUserAsync(sale.Buyer.Id, sale.Buyer);
                await _productRepo.UpdateProductAsync(sale.Product.Id, sale.Product);
                await _db.Sales.AddAsync(sale);
                await _db.SaveChangesAsync();
                return sale;
            } 
            catch {
                // TODO: Seperate Savechanges can cause halve transactions.
                throw new TaskCanceledException("Sale has failed.");
            }

        }

        public Task<List<Sale>> GetTopSalesAsync(int selectTop)
        {
            throw new System.NotImplementedException();
        }

        public Task<Sale> RefundProductAsync(int id)
        {
            throw new System.NotImplementedException();
        }
    }
}