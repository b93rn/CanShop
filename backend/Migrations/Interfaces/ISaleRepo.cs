using System.Collections.Generic;
using System.Threading.Tasks;
using backend.Models;

namespace backend.Migrations.Interfaces
{
    public interface ISaleRepo
    {
        Task<Sale> CreateSaleAsync(int userId, int productId);
        Task<List<Sale>> GetTopSalesAsync(int selectTop);
        Task<Sale> RefundProductAsync(int id);
    }
}