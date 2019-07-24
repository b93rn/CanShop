using System;

namespace backend.Models
{
    public class Sale
    {
        public int Id { get; set; }
        public User Buyer { get; set; }
        public string BuyerFirstName { get; set; }
        public string BuyerLastName { get; set; }
        public int CanCountAfterSale { get; set; }
        public decimal BuyerCreditAfterSale { get; set; }
        public Product Product { get; set; }
        public string ProductName { get; set; }
        public int AmountAfterSale { get; set; }
        public decimal SoldFor { get; set; }
        public decimal PurchasePrice { get; set; }
        public string Color { get; set; } 
        public DateTime Date { get; set; }

        public Sale() {}

        public Sale(User user, Product product) {
            Buyer = user;
            Product = product;
            BuyerFirstName = Buyer.FirstName;
            BuyerLastName = Buyer.LastName;
            CanCountAfterSale = Buyer.CanCount;
            BuyerCreditAfterSale = Buyer.Credit;
            ProductName = product.Name;
            AmountAfterSale = product.Amount;
            SoldFor = product.Price;
            PurchasePrice = product.PurchasePrice;
            Color = product.Color;
            Date = DateTime.Now;
        }

        public static Sale BuyProduct(User user, Product product)
        {
            user.BuyProduct(product);
            product.Buy();
            return new Sale(user, product);
        }

        public Sale RefundProduct()
        {
            if(Buyer != null)
                Buyer.RefundProduct(this);

            if(Product != null)
                Product.Refund();

            return this;
        }
    }
}