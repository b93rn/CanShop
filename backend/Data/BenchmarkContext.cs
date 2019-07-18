using backend.Models;
using Microsoft.EntityFrameworkCore;

namespace backend.Data
{
    public class BenchmarkContext : DbContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<Sale> Sales { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
            => optionsBuilder.UseNpgsql("Host=localhost;Database=canshop;Username=postgres;Password=postgresmdf");
    }
}