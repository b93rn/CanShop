using System;
using backend.Models;
using Xunit;

namespace BackendTest
{
    public class UnitTest1
    {
        public User _user { get; set; }
        public Product _product { get; set; }
        public UnitTest1()
        {
            _user = new User {
                FirstName = "testFirstName",
                LastName = "testLastName",
                Credit = 10.00m,
                CanCount = 5
            };

            _product = new Product {
                Name = "Cola",
                Description = "Cheap Cola",
                Barcode = "01010101",
                Price = 0.50m,
                PurchasePrice = 0.40m,
                Amount = 10
            };
        }

        [Fact]
        public void UserBuysProduct_ReturnsCorrectValues()
        {
            var expectedCanCount = 6;
            var expectedCredit = 9.50m;

            _user.BuyProduct(_product);

            Assert.Equal(expectedCanCount, _user.CanCount);
            Assert.Equal(expectedCredit, _user.Credit);
        }

        [Fact]
        public void UserRefundsProduct_ReturnsCorrectValues()
        {
            var expectedCanCount = 4;
            var expectedCredit = 10.50m;

            _user.RefundProduct(_product);

            Assert.Equal(expectedCanCount, _user.CanCount);
            Assert.Equal(expectedCredit, _user.Credit);
        }

        [Fact]
        public void UserBuysProduct_UpdatesProductValueCorrectly()
        {
            var expectedAmount = 9;

            _product.Buy();

            Assert.Equal(expectedAmount, _product.Amount);
        }

        [Fact]
        public void ProductRefundsProduct_ReturnsCorrectValues()
        {
            var expectedAmount = 11;

            _product.Refund();

            Assert.Equal(expectedAmount, _product.Amount);
        }
    }
}
