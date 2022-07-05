using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SweetHouseProj.Data;
using SweetHouseProj.Models;
using SweetHouseProj.Resources.Abstracts;
using System.Linq;

namespace SweetHouseProj.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContactController : ControllerBase
    {
        private readonly MainContext _db;
        private readonly IBaseService<ContactUsList> _contactServices;
        public ContactController(MainContext db, IBaseService<ContactUsList> contactServices)
        {
            _db = db;
            _contactServices = contactServices;
        }

        [HttpGet("[action]")]
        public IActionResult ContactUs()
        {
            var result = _db.ContactUs.OrderByDescending(a => a.Id).FirstOrDefault();
            return StatusCode(200, result);
        }
        [HttpPost("[action]")]
        public IActionResult Create([FromBody] ContactUsList request)
        {
            var result = _contactServices.Add(request);
            return StatusCode(result.Code, result);
        }
    }
}
