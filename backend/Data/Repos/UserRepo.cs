using System.Collections.Generic;
using System.Threading.Tasks;
using backend.Migrations.Interfaces;
using backend.Models;
using Microsoft.EntityFrameworkCore;

namespace backend.Data.Repos
{
    public class UserRepo : IUserRepo
    {
        private BenchmarkContext _db { get; set; }

        public UserRepo(BenchmarkContext db)
        {
            _db = db;
        }

        public async Task<User> CreateUserAsync(User user)
        {
            await _db.Users.AddAsync(user);
            await _db.SaveChangesAsync();
            return user;
        }

        public async Task<List<User>> GetUsersAsync()
        {
            return await _db.Users.ToListAsync();
        }

        public async Task<User> UpdateUserAsync(User user)
        {
            _db.Users.Update(user);
            await _db.SaveChangesAsync();
            return user;
        }

        public async Task<int> DeleteUser(int id)
        {
            var user = await _db.Users.FindAsync(id);
            if (user != null)
            {
                _db.Users.Remove(user);
                return id;
            }
            else
                throw new KeyNotFoundException("No user found with the given Id.");
        }
    }   
}