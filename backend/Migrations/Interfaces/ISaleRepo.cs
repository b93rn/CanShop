using System.Collections.Generic;
using System.Threading.Tasks;
using backend.Data.Repos;
using backend.Models;

namespace backend.Migrations.Interfaces
{
    public interface ISaleRepo
    {
        Task<Sale> CreateSaleAsync(int userId, int productId);
        Task<List<Sale>> GetTopSales(int selectTop);
        Task<RefundSaleResult> RefundProductAsync(int id);
        Task<int> GetUserSaleCountByProdyct(int userId, int productId);
    }
}