using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ShopPhonePremium.Controllers
{
    public class ChiTietSanPhamController : Controller
    {
        // GET: ChiTietSanPham
        public ActionResult sanpham1()
        {
            return View();
        }
        public ActionResult sanpham2()
        {
            ViewBag.Message = "Iphone";
            return View();
        }
        public ActionResult sanpham3()
        {
            ViewBag.Message = "Xiaomi";
            return View();
        }
        public ActionResult sanpham4()
        {
            ViewBag.Message = "OPPO";
            return View();
        }
        public ActionResult sanpham5()
        {
            ViewBag.Message = "Realme";
            return View();
        }
        public ActionResult sanpham6()
        {
            ViewBag.Message = "Samsung Z Fold 6";
            return View();
        }
        public ActionResult sanpham7()
        {
            ViewBag.Message = "Iphone";
            return View();
        }
        public ActionResult sanpham8()
        {
            ViewBag.Message = "Xiaomi";
            return View();
        }
        public ActionResult sanpham9()
        {
            ViewBag.Message = "OPPO";
            return View();
        }
        public ActionResult sanpham10()
        {
            ViewBag.Message = "Realme";
            return View();
        }

    }
}