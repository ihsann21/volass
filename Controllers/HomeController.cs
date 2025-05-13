using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using volass.Models;

namespace volass.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger)
    {
        _logger = logger;
    }

    public IActionResult Index()
    {
        return View();
    }

    public IActionResult Kalitepolitika()
    {
        return View();
    }
    public IActionResult Hakkimizda()
    {
        return View();
    }
    public IActionResult Vizyon()
    {
        return View();
    }
    public IActionResult Cevreveis()
    {
        return View();
    }
    public IActionResult Iletisim()
    {
        return View();
    }

    public IActionResult TProjeler()
    {
        return View();
    }
    public IActionResult DEProjeler()
    {
        return View();
    }
    public IActionResult Faaliyetalani()
    {
        return View();
    }
    public IActionResult Faaliyetmimar()
    {
        return View();
    }
    public IActionResult Faaliyetmuhendis()
    {
        return View();
    }
    public IActionResult Faaliyetyatirim()
    {
        return View();
    }
    public IActionResult Projedetay1()
    {
        return View();
    }
    
     public IActionResult Projedetay2()
    {
        return View();
    }

     public IActionResult Projedetay3()
    {
        return View();
    }

     public IActionResult Projedetay4()
    {
        return View();
    }
    public IActionResult Projedetay5()
    {
        return View();
    }
    public IActionResult Projedetay6()
    {
        return View();
    }
    public IActionResult Projedetay7()
    {
        return View();
    }
    public IActionResult Projedetay8()
    {
        return View();
    }
    public IActionResult Projedetay9()
    {
        return View();
    }
    public IActionResult Projedetay10()
    {
        return View();
    }
    public IActionResult Projedetay11()
    {
        return View();
    }
      public IActionResult Projedetay12()
    {
        return View();
    }
      public IActionResult Projedetay13()
    {
        return View();
    }
      public IActionResult Projedetay14()
    {
        return View();
    }
      public IActionResult Projedetay15()
    {
        return View();
    }
      public IActionResult Projedetay16()
    {
        return View();
    }
      public IActionResult Projedetay17()
    {
        return View();
    }
      public IActionResult Projedetay18()
    {
        return View();
    }
      public IActionResult Projedetay19()
    {
        return View();
    }
       public IActionResult Projedetay20()
    {
        return View();
    }
    
     public IActionResult Projeler()
    {
        return View();
    }

        public IActionResult Katalog()
    {
        return View();
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
