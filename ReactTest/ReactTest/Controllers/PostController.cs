using ReactTest.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace ReactTest.Controllers
{
    [RoutePrefix("api/posts")]

    public class PostController : ApiController
    {
        LoginDBEntities db = new LoginDBEntities();

        [HttpGet]
        [Route("getAllPosts")]
        public IHttpActionResult get()
        {
            IList<Post> students = null;

            using (var ctx = new LoginDBEntities())
            {
                //students = ctx.Posts.Include("StudentAddress")
                //            .Select(s => new StudentViewModel()
                //            {
                //                Id = s.StudentID,
                //                FirstName = s.FirstName,
                //                LastName = s.LastName
                //            }).ToList<StudentViewModel>();

                students = ctx.Posts.ToList();
            }

            if (students.Count == 0)
            {
                return NotFound();
            }

            return Ok(students);
        }

        [HttpGet]
        [Route("getSinglePost/{id}")]
        public IHttpActionResult getSinglePost(int id)
        {
            Post students = null;

            using (var ctx = new LoginDBEntities())
            {

                students = ctx.Posts.Where(i => i.id == id).FirstOrDefault();
            }

            if (students == null)
            {
                return NotFound();
            }

            return Ok(students);
        }

        [HttpPost]
        [Route("add")]
        public IHttpActionResult Post(Post post)
        {
            if (!ModelState.IsValid)
                return BadRequest("Invalid data.");

            using (var ctx = new LoginDBEntities())
            {
                ctx.Posts.Add(new Post()
                {
                    caption = post.caption,
                    imageUrl = "http://wallpaperheart.com/wp-content/uploads/2018/07/wallpaper-hd-download-2.jpg",
                    published = true,
                    description = post.description,
                    createdBy = "abcd",
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
                return BadRequest("Not a valid student id");

            using (var ctx = new LoginDBEntities())
            {
                var student = ctx.Posts
                    .Where(s => s.id == id)
                    .FirstOrDefault();

                ctx.Entry(student).State = System.Data.Entity.EntityState.Deleted;
                ctx.SaveChanges();
            }

            return Ok();
        }
    }
}
