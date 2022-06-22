using Microsoft.EntityFrameworkCore;
using SweetHouseProj.Models;
using System.Reflection;

namespace SweetHouseProj.Data
{
    public class MainContext:DbContext
    {
        public MainContext(DbContextOptions<MainContext> options):base(options)
        {

        }
        public DbSet<AboutUs> AboutUs { get; set; }
        public DbSet<AboutUs> AboutUsPictures { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());
        }
    }
}
