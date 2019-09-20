using System.Collections.Generic;
using System.Threading.Tasks;
using Client.Models;
using Microsoft.AspNetCore.Mvc;

namespace Client.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeesController : ControllerBase
    {
        public async IAsyncEnumerable<Employee> GetAsync()
        {
            for(var x = 0; x <= 5; x++)
            {
                yield return new Employee("last2", "first2", 2);
            }
        }

        public async Task Test()
        {
            var testing = GetAsync();

            await foreach(var test2 in testing)
            {
                await SampleAsync(test2);
            }
        }

        public Task SampleAsync(Employee employee)
        {
            return Task.FromResult(employee);
        }
    }
}