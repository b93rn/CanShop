using System;

namespace backend.Models
{
    public class Product
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public string Barcode { get; set; }
        public decimal Price { get; set; }
        public decimal PurchasePrice { get; set; }
        public int Amount { get; set; }

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