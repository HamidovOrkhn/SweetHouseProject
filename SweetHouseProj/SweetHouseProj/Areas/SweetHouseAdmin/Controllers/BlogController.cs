using Microsoft.AspNetCore.Mvc;

namespace SweetHouseProj.Areas.SweetHouseAdmin.Controllers
{
    [Area("SweetHouseAdmin")]
    public class BlogController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
