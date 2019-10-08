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
            => optionsBuilder.UseNpgsql("Host=localhost;Database=canshop;Username=postgres;Password=postgresmdf");

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Sale>().HasOne(x => x.Product).WithMany().OnDelete(DeleteBehavior.SetNull);
            modelBuilder.Entity<Sale>().HasOne(x => x.Buyer).WithMany().OnDelete(DeleteBehavior.SetNull);
        }
    }
}