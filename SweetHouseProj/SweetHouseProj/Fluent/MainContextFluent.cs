using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using SweetHouseProj.Models;

namespace SweetHouseProj.Fluent
{
    public partial class MainContextFluent
    {
        public class AboutUsFluent : IEntityTypeConfiguration<AboutUs>
        {
            public void Configure(EntityTypeBuilder<AboutUs> builder)
            {
                builder.Property(T => T.MiniText).IsRequired().HasMaxLength(200);
                builder.Property(T => T.Body).IsRequired().HasMaxLength(1000);
                builder.Property(T => T.Header).IsRequired().HasMaxLength(100);
            }
        }
        public class AboutUsPictureFluent : IEntityTypeConfiguration<AboutUsPicture>
        {
            public void Configure(EntityTypeBuilder<AboutUsPicture> builder)
            {
                builder.Property(T => T.Src).IsRequired().HasMaxLength(200);
            }
        }
    }
}
