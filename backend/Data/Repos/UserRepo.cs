using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backend.Migrations.Interfaces;
using backend.Models;
using Microsoft.EntityFrameworkCore;

namespace backend.Data.Repos
{
    public class UserRepo : IUserRepo
    {
        private CanshopContext _db { get; set; }

        public UserRepo(CanshopContext db)
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

        public async Task<User> UpdateUserAsync(int id, User user)
        {
            var updatedUser = await GetUserAsync(user.Id);
            updatedUser.Credit = user.Credit;
            _db.Entry(updatedUser).State = EntityState.Modified;
            await _db.SaveChangesAsync();
            return updatedUser;
        }

        public async Task<int> DeleteUser(int id)
        {
            var user = await GetUserAsync(id);
            if (user != null && user.Id == id)
            {
                _db.Users.Remove(user);
                await _db.SaveChangesAsync();
                return id;
            }
            else
                throw new KeyNotFoundException("No user found with the given Id.");
        }

        public async Task<User> GetUserAsync(int id)
        {
            return await _db.Users.Where(x => x.Id == id).FirstOrDefaultAsync();
        }

        public async Task<User> GetRandomUser()
        {
            var users = await GetUsersAsync();

            if (users.Count < 1)
                return null;

            var rnd = new Random();
            var randomNumber = rnd.Next(users.Count);

            return users[randomNumber];
        }
    }
}
