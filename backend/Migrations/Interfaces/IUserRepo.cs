using System.Collections.Generic;
using System.Threading.Tasks;
using backend.Models;

namespace backend.Migrations.Interfaces
{
    public interface IUserRepo
    {
        Task<User> CreateUserAsync(User user);
        Task<List<User>> GetUsersAsync();
        Task<User> UpdateUserAsync(int id, User user);
        Task<int> DeleteUser(int id);
    }
}