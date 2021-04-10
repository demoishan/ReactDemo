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
    }
}
