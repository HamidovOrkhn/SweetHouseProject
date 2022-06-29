using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SweetHouseProj.Data;
using SweetHouseProj.Models;
using System.Linq;

namespace SweetHouseProj.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RoomController : ControllerBase
    {
        private readonly MainContext _db;
        public RoomController(MainContext db)
        {
            _db = db;
        }
        [HttpGet("[action]/{id:int}")]
        public IActionResult Details(int id)
        {
            Room result = _db.Rooms.Where(a=>a.Id == id).Include(a=>a.Amenities).Include(a=>a.RoomPhotos).FirstOrDefault();
            result.RoomPhotos.OrderByDescending(a => a.IsMain).ToList();
            return StatusCode(200, result);
        }
        
    }
}
