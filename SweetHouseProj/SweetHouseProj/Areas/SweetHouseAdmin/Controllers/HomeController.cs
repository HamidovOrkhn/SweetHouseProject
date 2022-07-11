using Microsoft.AspNetCore.Mvc;

namespace SweetHouseProj.Areas.SweetHouseAdmin.Controllers
{
    [Area("SweetHouseAdmin")]
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        public IActionResult Test()
        {
            return View();
        }
    }
}
