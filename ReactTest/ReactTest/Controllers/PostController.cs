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
        ReactDemoEntities db = new ReactDemoEntities();

        [HttpGet]
        [Route("getAllPosts")]
        public IHttpActionResult get()
        {
            IList<Post> obj = null;

            using (var ctx = new ReactDemoEntities())
            {
                obj = ctx.Posts.ToList();
            }

            if (obj.Count == 0)
            {
                return NotFound();
            }

            return Ok(obj);
        }

        [HttpGet]
        [Route("getSinglePost/{id}")]
        public IHttpActionResult getSinglePost(int id)
        {
            Post obj = null;

            using (var ctx = new ReactDemoEntities())
            {

                obj = ctx.Posts.Where(i => i.id == id).FirstOrDefault();
            }

            if (obj == null)
            {
                return NotFound();
            }

            return Ok(obj);
        }

        [HttpPost]
        [Route("add")]
        public IHttpActionResult Post(Post post)
        {
            if (!ModelState.IsValid)
                return BadRequest("Invalid data.");

            using (var ctx = new ReactDemoEntities())
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
                return BadRequest("Not a valid id");

            using (var ctx = new ReactDemoEntities())
            {
                var obj = ctx.Posts
                    .Where(s => s.id == id)
                    .FirstOrDefault();

                ctx.Entry(obj).State = System.Data.Entity.EntityState.Deleted;
                ctx.SaveChanges();
            }

            return Ok();
        }
    }
}
