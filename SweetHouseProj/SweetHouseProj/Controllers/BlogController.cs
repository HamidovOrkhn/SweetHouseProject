using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SweetHouseProj.Data;
using SweetHouseProj.Models;
using SweetHouseProj.Resources.Abstracts;
using System;
using System.Collections.Generic;
using System.Linq;

namespace SweetHouseProj.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BlogController : ControllerBase
    {
        private readonly MainContext _db;
        private readonly IBaseService<Blog> _blogService;
        public BlogController(MainContext db, IBaseService<Blog> blogService)
        {
            _db = db;
            _blogService = blogService;
        }
        [HttpGet("[action]/{id:int}")]
        public IActionResult Details(int id)
        {
            object result = _db.Blogs.Where(a => a.Id == id).Select(a => new
            {
                BlogPicture = a.BlogPicture,
                BodyText = a.BodyText,
                CreatedDate = a.CreatedDate.ToString("yyyy.MM.dd"),
                HeadText = a.HeadText,
                UpdatedDate = a.UpdatedDate.ToString("yyyy.MM.dd")
            }).FirstOrDefault();
            return StatusCode(200, result);
        }
        [HttpGet("[action]")]
        public IActionResult BlogSection()
        {
            var blogs = _db.Blogs.OrderByDescending(a => a.Id).Take(5).Select(a => new
            {
                Id = a.Id,
                BlogPicture = a.BlogPicture,
                BodyText = a.BodyText,
                CreatedDate = a.CreatedDate.ToString("yyyy.MM.dd"),
                HeadText = a.HeadText,
                UpdatedDate = a.UpdatedDate.ToString("yyyy.MM.dd")
            }).ToList();
            return StatusCode(200, blogs);
        }
        [HttpGet("[action]")]
        public IActionResult Blogs([FromQuery] int page)
        {
            List<Blog> data = _db.Blogs.ToList();
            float pagecount = data.Count;
            int count = (int)Math.Ceiling(pagecount / 9);
            data = data.Skip(page * 9).Take(9).ToList();
            var result = ResponseMessagePaginated<IEnumerable<object>>.Success(count, data.Select(a=> new
            {
                Id = a.Id,
                BlogPicture = a.BlogPicture,
                BodyText = a.BodyText,
                CreatedDate = a.CreatedDate.ToString("yyyy.MM.dd"),
                HeadText = a.HeadText,
                UpdatedDate = a.UpdatedDate.ToString("yyyy.MM.dd")
            }));
            return StatusCode(result.Code, result);
        }

    }
}
