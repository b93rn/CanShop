using Microsoft.EntityFrameworkCore.Migrations;

namespace backend.Migrations
{
    public partial class SaferSales : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "AmountAfterSale",
                table: "Sales",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<decimal>(
                name: "BuyerCreditAfterSale",
                table: "Sales",
                nullable: false,
                defaultValue: 0m);

            migrationBuilder.AddColumn<string>(
                name: "BuyerFirstName",
                table: "Sales",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "BuyerLastName",
                table: "Sales",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "CanCountAfterSale",
                table: "Sales",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "Color",
                table: "Sales",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "ProductName",
                table: "Sales",
                nullable: true);

            migrationBuilder.AddColumn<decimal>(
                name: "PurchasePrice",
                table: "Sales",
                nullable: false,
                defaultValue: 0m);

            migrationBuilder.AddColumn<decimal>(
                name: "SoldFor",
                table: "Sales",
                nullable: false,
                defaultValue: 0m);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "AmountAfterSale",
                table: "Sales");

            migrationBuilder.DropColumn(
                name: "BuyerCreditAfterSale",
                table: "Sales");

            migrationBuilder.DropColumn(
                name: "BuyerFirstName",
                table: "Sales");

            migrationBuilder.DropColumn(
                name: "BuyerLastName",
                table: "Sales");

            migrationBuilder.DropColumn(
                name: "CanCountAfterSale",
                table: "Sales");

            migrationBuilder.DropColumn(
                name: "Color",
                table: "Sales");

            migrationBuilder.DropColumn(
                name: "ProductName",
                table: "Sales");

            migrationBuilder.DropColumn(
                name: "PurchasePrice",
                table: "Sales");

            migrationBuilder.DropColumn(
                name: "SoldFor",
                table: "Sales");
        }
    }
}
