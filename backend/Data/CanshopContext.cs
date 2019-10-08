using backend.Models;
using Microsoft.EntityFrameworkCore;

namespace backend.Data
{
    public class CanshopContext : DbContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<Sale> Sales { get; set; }

        public CanshopContext(DbContextOptions<CanshopContext> options) : base(options) { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Sale>().HasOne(x => x.Product).WithMany().OnDelete(DeleteBehavior.SetNull);
            modelBuilder.Entity<Sale>().HasOne(x => x.Buyer).WithMany().OnDelete(DeleteBehavior.SetNull);
        }
    }
}