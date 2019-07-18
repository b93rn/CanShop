namespace backend.Models
{
    public class Sale
    {
        public int Id { get; set; }
        public User Buyer { get; set; }
        public Product Product { get; set; }

        public Sale() {}

        public Sale(User user, Product product) {
            Buyer = user;
            Product = product;
        }

        public static Sale BuyProduct(User user, Product product)
        {
            user.BuyProduct(product);
            product.Buy();
            return new Sale(user, product);
        }

        public static Sale RefundProduct(User user, Product product)
        {
            user.RefundProduct(product);
            product.Refund();
            return new Sale(user, product);
        }
    }
}