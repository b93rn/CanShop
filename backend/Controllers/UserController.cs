using System;
using System.Threading.Tasks;
using backend.Migrations.Interfaces;
using backend.Models;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private IUserRepo _userRepo { get; set; }

        public UserController(IUserRepo _userRepo)
        {
            this._userRepo = _userRepo;
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] User user)
        {
            var newUser = await _userRepo.CreateUserAsync(user);
            return Ok(newUser);
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var users = await _userRepo.GetUsersAsync();
            return Ok(users);
        }

        [HttpPut("{id}"), HttpPatch]
        public async Task<IActionResult> Update(int id, User user)
        {
            if(id != user.Id) 
                return BadRequest();

            var updatedUser = await _userRepo.UpdateUserAsync(id, user);
            return Ok(updatedUser);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            try
            {
                var deletedUserId = await _userRepo.DeleteUser(id);
                return Ok(deletedUserId);
            }
            catch (Exception err)
            {
                return NotFound(err.Message);
            }
        }
    }
}