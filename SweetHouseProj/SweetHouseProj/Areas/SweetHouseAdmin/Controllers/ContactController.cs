using Microsoft.AspNetCore.Mvc;
using SweetHouseProj.Data;
using SweetHouseProj.Dto;
using SweetHouseProj.Helpers;
using SweetHouseProj.Models;
using SweetHouseProj.Resources.Abstracts;
using SweetHouseProj.ViewModels;
using System.Collections.Generic;
using System.Linq;

namespace SweetHouseProj.Areas.SweetHouseAdmin.Controllers
{
    [Area("SweetHouseAdmin")]
  
    public class ContactController : Controller
    {
        private readonly MainContext _db;
        private readonly IBaseService<ContactUsList> _contactServices;

        public ContactController(MainContext db, IBaseService<ContactUsList> contactServices)
        {
            _db = db;
            _contactServices = contactServices;
          

        }
        public IActionResult Index( )
        {
            var result = _db.ContactUs.ToList();
            return View(result);
        }
        
        [HttpGet]
        public IActionResult Create()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Create(ContactDTO request)
        {
         _db.ContactUs.Add(new ContactUs
            {
                Phone = request.Phone,
                Email = request.Email,
                Location = request.Location,
                MapX = request.MapX,
                MapY = request.MapY
                
            });
            _db.SaveChanges();
         
            return RedirectToAction("Index");
        }

        
        public IActionResult Delete(int id)
        {
          var delected =  _db.ContactUs.Where(a => a.Id == id).FirstOrDefault();
            _db.ContactUs.Remove(delected);
            _db.SaveChanges();
            return RedirectToAction("Index");
        }


        public IActionResult ContactList([FromQuery] int page=0)
        {
            ContactListViewModel model = new ContactListViewModel();
            var result = _contactServices.GetPaginated(page);
            model.ContactUsLists = result.Data;
            model.Pagination = Pagination.PaginationMethod(page, result.Page);
            return View(model);
        }

        public IActionResult ContactlistDelete(int id)
        {
            _contactServices.Remove(id);
            return RedirectToAction("ContactList");

        }

    }
}
