using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ShopPhonePremium.Controllers
{
    public class SanPhamController : Controller
    {
        // GET: SanPham
        public ActionResult samsung()
        {
            return View();
        }
        public ActionResult iphone()
        {
            ViewBag.Message = "Iphone";
            return View();
        }
        public ActionResult xiaomi()
        {
            ViewBag.Message = "Xiaomi";
            return View();
        }
        public ActionResult oppo()
        {
            ViewBag.Message = "OPPO";
            return View();
        }
        public ActionResult realme()
        {
            ViewBag.Message = "Realme";
            return View();
        }
    }
}