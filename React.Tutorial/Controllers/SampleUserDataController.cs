using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace React.Tutorial.Controllers
{
    [Route("api/[controller]")]
    public class SampleUserDataController : Controller
    {
        [HttpGet("[action]")]
        public IEnumerable<User> Users()
        {
            Request.Headers.Add("Access-Control-Allow-Origi", "*");
            Request.Headers.Add("Access-Control-Allow-Credentials", "true");

            List<User> userList = new List<User>();
            userList.Add(new User()
            {
                UserName = "admin@abccc.co.uk",
                FirstName = "Admin",
                Roles = "test",
                Actions = "test"
            });
            userList.Add(new User()
            {
                UserName = "dilushi@abccc.co.uk",
                FirstName = "Dilushi",
                Roles = "test",
                Actions = "test"
            });

            return userList;
            //return Request.CreateResponse(HttpStatusCode.OK, model, Configuration.Formatters.JsonFormatter);
        }

        [HttpGet("[action]")]
        public HttpResponseMessage Users2()
        {
            var response = new HttpResponseMessage()
            {
                Content = new StringContent("[{\"UserName\":\"ABC\"},{\"FirstName\":\"1\"},{\"Roles\":\"2\"},{\"Actions\":\"3\"}]")
            };
            response.Content.Headers.ContentType = new MediaTypeHeaderValue("application/json");
            return response;
        }
    }

    public class User
    {
        public string UserName { get; set; }
        public string FirstName { get; set; }
        public string Roles { get; set; }
        public string Actions { get; set; }
    }


}