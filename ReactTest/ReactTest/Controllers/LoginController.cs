using ReactTest.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace ReactTest.Controllers
{
    [RoutePrefix("api/login")]
    public class LoginController : ApiController
    {
        ReactDemoEntities db = new ReactDemoEntities();

        [HttpPost]
        [Route("login")]
        public IHttpActionResult Post(User user)
        {
            User obj = null;

            using (var ctx = new ReactDemoEntities())
            {
                //user.password = "123";
                //user.username = "admin";
                obj = ctx.Users.Where(i => i.username == user.username && i.password == user.password).FirstOrDefault();
            }

            if (obj == null)
            {
                return NotFound();
            }

            return Ok(obj);
        }

        [HttpGet]
        [Route("login2")]
        //[EnableCors("*", "*", "*")]
        //[EnableCors(origins: "*", headers: "accept,content-type,origin,x-my-header", methods: "*")]
        public IHttpActionResult Get(string username , string password )
        {
            User obj = null;

            using (var ctx = new ReactDemoEntities())
            {

                obj = ctx.Users.Where(i => i.username == username && i.password == password).FirstOrDefault();
            }

            //if (obj == null)
            //{
            //    return NotFound();
            //}

            return Ok(obj);
        }

    }
}
