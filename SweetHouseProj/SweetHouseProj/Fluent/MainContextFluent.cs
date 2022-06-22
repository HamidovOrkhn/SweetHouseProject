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
        public class RoomPhotoFluent : IEntityTypeConfiguration<RoomPhoto>
        {
            public void Configure(EntityTypeBuilder<RoomPhoto> builder)
            {
                builder.Property(T => T.Src).IsRequired().HasMaxLength(200);
            }
        }
        public class AmenityFluent : IEntityTypeConfiguration<Amenity>
        {
            public void Configure(EntityTypeBuilder<Amenity> builder)
            {
                builder.Property(T => T.Name).IsRequired().HasMaxLength(50);
                builder.Property(T => T.Icon).IsRequired().HasMaxLength(100);
            }
        }
        public class RoomFluent : IEntityTypeConfiguration<Room>
        {
            public void Configure(EntityTypeBuilder<Room> builder)
            {
                builder.Property(T => T.Name).IsRequired().HasMaxLength(100);
                builder.Property(T => T.RoomDesc).IsRequired().HasMaxLength(1000);
                builder.Property(T => T.HotelRules).IsRequired().HasMaxLength(400);
                builder.Property(T => T.RoomView).IsRequired().HasMaxLength(50);
            }
        }

    }
}
