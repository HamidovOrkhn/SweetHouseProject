using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SweetHouseProj.Data;
using SweetHouseProj.Dto;
using SweetHouseProj.Models;
using SweetHouseProj.Resources.Abstracts;
using System.Linq;

namespace SweetHouseProj.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HomeController : ControllerBase
    {
        private readonly IBaseService<AboutUs> _aboutUsServices;
        private readonly MainContext _db;
        public HomeController(IBaseService<AboutUs> aboutUsServices, MainContext db)
        {
            _aboutUsServices = aboutUsServices;
            _db = db;
        }
        [HttpGet("[action]")]
        public IActionResult AboutUs()
        {
            var result = _db.AboutUs.OrderByDescending(a => a.Id).Include(a => a.AboutUsPictures).FirstOrDefault();
            return StatusCode(200, result);
        }
        [HttpGet("[action]")]
        public IActionResult Rooms()
        {
            var result = _db.Rooms.Include(a => a.RoomPhotos).Take(5).Select(a => new Room {Id = a.Id, Name = a.Name, Price = a.Price, BedCount = a.BedCount, MaxGuest = a.MaxGuest, RoomPhotos = a.RoomPhotos.Where(a => a.IsMain == true).ToList() });
            return StatusCode(200, result);
        }
    }
}
