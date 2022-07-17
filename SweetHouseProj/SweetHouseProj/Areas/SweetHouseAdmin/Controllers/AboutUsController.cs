using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SweetHouseProj.Data;
using SweetHouseProj.Dto;
using SweetHouseProj.Models;
using System.Linq;

namespace SweetHouseProj.Areas.SweetHouseAdmin.Controllers
{
    [Area("SweetHouseAdmin")]

    public class AboutUsController : Controller
    {
        private readonly MainContext _db;
        public AboutUsController(MainContext db)
        {
            _db = db;

        }
        public IActionResult AboutList()
        {

             var result = _db.AboutUs.ToList();

            return View(result);
        }
        [HttpGet]
        public IActionResult Create()
        {
            return View();
        }
        [HttpPost]
        public IActionResult Create(AboutUsDto request)
        {
            _db.AboutUs.Add(new AboutUs
            {
                Header = request.Header,
                Body = request.Body,
                MiniText = request.MiniText
            });
            _db.SaveChanges();
            return RedirectToAction("AboutList");
        }
        [HttpGet]
        public IActionResult Delete(int id)
        {
           
          var item =  _db.AboutUs.Where(a=>a.Id==id).FirstOrDefault();         
            _db.AboutUs.Remove(item);
            _db.SaveChanges();
            return RedirectToAction("AboutList");
   

        }


    }
}
