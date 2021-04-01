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
        LoginDBEntities db = new LoginDBEntities();

        [HttpPost]
        [Route("login")]
        public IHttpActionResult Post(User user)
        {
            User students = null;

            using (var ctx = new LoginDBEntities())
            {
                user.passwordHash = "123";
                user.username = "admin";
                students = ctx.Users.Where(i => i.username == user.username && i.passwordHash == user.passwordHash).FirstOrDefault();
            }

            if (students == null)
            {
                return NotFound();
            }

            return Ok(students);
        }

        [HttpGet]
        [Route("login2")]
        //[EnableCors("*", "*", "*")]
        //[EnableCors(origins: "*", headers: "accept,content-type,origin,x-my-header", methods: "*")]
        public IHttpActionResult Get(string username = "Admin", string password = "123")
        {
            User students = null;

            using (var ctx = new LoginDBEntities())
            {

                students = ctx.Users.Where(i => i.username == username && i.passwordHash == password).FirstOrDefault();
            }

            if (students == null)
            {
                return NotFound();
            }

            return Ok(students);
        }

    }
}
