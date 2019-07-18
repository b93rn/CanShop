using System.Collections.Generic;
using System.Threading.Tasks;
using backend.Migrations.Interfaces;
using backend.Models;

namespace backend.Data.Repos
{
    public class SaleRepo : ISaleRepo
    {
        private BenchmarkContext _db { get; set; }

        public SaleRepo(BenchmarkContext db)
        {
            _db = db;
        }

        public Task<Sale> CreateProductAsync(Sale sale)
        {
            throw new System.NotImplementedException();
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