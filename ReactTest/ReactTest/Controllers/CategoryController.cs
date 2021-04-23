using ReactTest.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace ReactTest.Controllers
{
    [RoutePrefix("api/category")]
    public class CategoryController : ApiController
    {
        ReactDemoEntities db = new ReactDemoEntities();

        [HttpGet]
        [Route("getAllCat")]
        public IHttpActionResult get()
        {
            IList<CategoryMaster> obj = null;

            using (var ctx = new ReactDemoEntities())
            {
                obj = ctx.CategoryMasters.ToList();
            }

            if (obj.Count == 0)
            {
                return NotFound();
            }

            return Ok(obj);
        }

        [HttpGet]
        [Route("getcatById/{id}")]
        public IHttpActionResult getSinglePost(int id)
        {
            CategoryMaster obj = null;

            using (var ctx = new ReactDemoEntities())
            {

                obj = ctx.CategoryMasters.Where(i => i.CatId == id).FirstOrDefault();
            }

            if (obj == null)
            {
                return NotFound();
            }

            return Ok(obj);
        }

        [HttpPost]
        [Route("add")]
        public IHttpActionResult Post(CategoryMaster categoryMaster)
        {
            if (!ModelState.IsValid)
                return BadRequest("Invalid data.");

            using (var ctx = new ReactDemoEntities())
            {
                ctx.CategoryMasters.Add(new CategoryMaster()
                {
                   CatName = categoryMaster.CatName
                });

                ctx.SaveChanges();
            }

            return Ok();
        }

        [HttpDelete]
        [Route("delete/{id}")]
        public IHttpActionResult removePost(int id)
        {
            if (id <= 0)
                return BadRequest("Not a valid id");

            using (var ctx = new ReactDemoEntities())
            {
                var obj = ctx.CategoryMasters
                    .Where(s => s.CatId == id)
                    .FirstOrDefault();

                ctx.Entry(obj).State = System.Data.Entity.EntityState.Deleted;
                ctx.SaveChanges();
            }

            return Ok();
        }
    }
}
