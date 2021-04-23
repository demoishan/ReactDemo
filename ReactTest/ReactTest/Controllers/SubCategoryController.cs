using ReactTest.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace ReactTest.Controllers
{
    [RoutePrefix("api/Subcategory")]
    public class SubCategoryController : ApiController
    {
        ReactDemoEntities db = new ReactDemoEntities();

        [HttpGet]
        [Route("getAllSubCat")]
        public IHttpActionResult get()
        {
            IList<SubCategoryMaster> obj = null;

            using (var ctx = new ReactDemoEntities())
            {
                obj = ctx.SubCategoryMasters.ToList();
            }

            if (obj.Count == 0)
            {
                return NotFound();
            }

            return Ok(obj);
        }

        [HttpGet]
        [Route("getsubcatById/{id}")]
        public IHttpActionResult getSinglePost(int id)
        {
            SubCategoryMaster obj = null;

            using (var ctx = new ReactDemoEntities())
            {

                obj = ctx.SubCategoryMasters.Where(i => i.CatId == id).FirstOrDefault();
            }

            if (obj == null)
            {
                return NotFound();
            }

            return Ok(obj);
        }

        [HttpPost]
        [Route("add")]
        public IHttpActionResult Post(SubCategoryMaster SubCategoryMaster)
        {
            if (!ModelState.IsValid)
                return BadRequest("Invalid data.");

            using (var ctx = new ReactDemoEntities())
            {
                ctx.SubCategoryMasters.Add(new SubCategoryMaster()
                {
                    SubCateName = SubCategoryMaster.SubCateName,
                    CatId = SubCategoryMaster.SubCatId
                }); ;

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
                var obj = ctx.SubCategoryMasters
                    .Where(s => s.SubCatId == id)
                    .FirstOrDefault();

                ctx.Entry(obj).State = System.Data.Entity.EntityState.Deleted;
                ctx.SaveChanges();
            }

            return Ok();
        }
    }
}
