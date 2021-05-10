using ReactTest.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace ReactTest.Controllers
{
    public class HobbyController : ApiController
    {
        ReactDemoEntities db = new ReactDemoEntities();
        
        [HttpGet]
        [Route("getAllHobby")]
        public IHttpActionResult get()
        {
            IList<Hobby> obj = null;

            using (var ctx = new ReactDemoEntities())
            {
                obj = ctx.Hobbies.ToList();
            }

            if (obj.Count == 0)
            {
                return NotFound();
            }

            return Ok(obj);
        }
    }
}
