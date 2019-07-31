using backend.Models;
using Microsoft.EntityFrameworkCore;

namespace backend.Data
{
    public class CanshopContext : DbContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<Sale> Sales { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
            => optionsBuilder.UseNpgsql("Host=postgres;Port=5432;Database=canshop;Username=postgres;");
    }
}