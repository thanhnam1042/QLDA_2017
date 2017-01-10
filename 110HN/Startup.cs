using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(DALTWEB_110HN.Startup))]
namespace DALTWEB_110HN
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
