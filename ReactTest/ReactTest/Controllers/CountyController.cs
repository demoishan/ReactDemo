using ReactTest.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace ReactTest.Controllers
{
    [RoutePrefix("api/County")]

    public class CountyController : ApiController
    {
        ReactDemoEntities db = new ReactDemoEntities();

        [HttpGet]
        [Route("getAllCountry")]
        public IHttpActionResult get()
        {
            IList<Country> obj = null;

            using (var ctx = new ReactDemoEntities())
            {
                obj = ctx.Countries.ToList();
            }

            if (obj.Count == 0)
            {
                return NotFound();
            }

            return Ok(obj);
        }
    }
}
