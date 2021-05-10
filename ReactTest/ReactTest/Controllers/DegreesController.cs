using ReactTest.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace ReactTest.Controllers
{
    [RoutePrefix("api/Degree")]

    public class DegreesController : ApiController
    {
        ReactDemoEntities db = new ReactDemoEntities();

        [HttpGet]
        [Route("getAllDegree")]
        public IHttpActionResult get()
        {
            IList<Degree> obj = null;

            using (var ctx = new ReactDemoEntities())
            {
                obj = ctx.Degrees.ToList();
            }

            if (obj.Count == 0)
            {
                return NotFound();
            }

            return Ok(obj);
        }
    }
}
