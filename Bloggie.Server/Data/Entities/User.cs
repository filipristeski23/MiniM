using Microsoft.AspNetCore.Identity;

namespace Bloggie.Data.Entities
{
    public class User : IdentityUser
    {

        public string FullName { get; set; } = string.Empty;

    }
}
