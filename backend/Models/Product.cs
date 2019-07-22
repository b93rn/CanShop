using System;

namespace backend.Models
{
    public class Product
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public decimal PurchasePrice { get; set; }
        public int Amount { get; set; }
        public string Color { get; set; }   

        public void Refund()
        {
            Amount++;
        }

        public void Buy()
        {
            Amount--;
        }
    }
}