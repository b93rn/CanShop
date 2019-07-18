using System;

namespace backend.Models
{
    public class User
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public decimal Credit { get; set; }
        public int CanCount { get; set; }

        public void BuyProduct(Product product)
        {
            Credit -= product.Price;
            CanCount++;
        }

        public void RefundProduct(Product product)
        {
            Credit += product.Price;
            CanCount--;
        }
    }
}