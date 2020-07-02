using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backend.Migrations.Interfaces;
using backend.Models;
using Microsoft.EntityFrameworkCore;

namespace backend.Data.Repos
{
    public class SaleRepo : ISaleRepo
    {
        private readonly CanshopContext _db;
        private readonly IUserRepo _userRepo;
        private readonly IProductRepo _productRepo;

        public SaleRepo(CanshopContext db, IUserRepo userRepo, IProductRepo productRepo)
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
            catch
            {
                // TODO: Seperate Savechanges can cause halve transactions.
                throw new TaskCanceledException("Sale has failed.");
            }

        }

        public async Task<List<Sale>> GetTopSales(int selectTop)
        {
            return await _db.Sales
                .OrderByDescending(x => x.Id)
                .Take(selectTop)
                .Include(x => x.Product)
                .Include(x => x.Buyer)
                .ToListAsync();
        }

        public Task<int> GetUserSaleCountByProdyct(int userId, int productId) =>
            _db.Sales.Where(x => x.Buyer.Id == userId && x.Product.Id == productId)
                .CountAsync();

        public async Task<RefundSaleResult> RefundProductAsync(int id)
        {
            var sale = await _db.Sales.Where(x => x.Id == id)
                .Include(x => x.Buyer)
                .Include(x => x.Product)
                .SingleOrDefaultAsync();

            if (sale == null)
                throw new KeyNotFoundException("Sale not found with the given Id.");

            sale.RefundProduct();

            // If the buyer or the product still exist apply refund changes to them.
            if (sale.Buyer != null)
            {
                await _userRepo.UpdateUserAsync(sale.Buyer.Id, sale.Buyer);
            }

            if (sale.Product != null)
            {
                await _productRepo.UpdateProductAsync(sale.Product.Id, sale.Product);
            }

            _db.Sales.Remove(sale);
            await _db.SaveChangesAsync();

            return new RefundSaleResult { SaleId = id, Buyer = sale.Buyer, Product = sale.Product };
        }
    }

    public class RefundSaleResult
    {
        public int SaleId { get; set; }
        public User Buyer { get; set; }
        public Product Product { get; set; }
    }
}