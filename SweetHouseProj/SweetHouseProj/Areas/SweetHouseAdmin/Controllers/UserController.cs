using Microsoft.AspNetCore.Mvc;

namespace SweetHouseProj.Areas.SweetHouseAdmin.Controllers
{
    [Area("SweetHouseAdmin")]
    public class UserController : Controller
    {
        public IActionResult Login()
        {
            return View();
        }
  
    }
}
