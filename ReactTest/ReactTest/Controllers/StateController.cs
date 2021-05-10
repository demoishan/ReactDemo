using ReactTest.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace ReactTest.Controllers
{
    public class StateController : ApiController
    {

        ReactDemoEntities db = new ReactDemoEntities();

        [HttpGet]
        [Route("getStateByCountry")]
        public IHttpActionResult get(int CountryId)
        {
            IList<State> obj = null;

            using (var ctx = new ReactDemoEntities())
            {
                obj = ctx.States.Where(i => i.CountryId == CountryId).ToList();
            }

            if (obj.Count == 0)
            {
                return NotFound();
            }

            return Ok(obj);
        }
    }
}
