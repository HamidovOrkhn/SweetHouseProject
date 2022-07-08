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
        public class HomeVideoFluent : IEntityTypeConfiguration<HomeVideo>
        {
            public void Configure(EntityTypeBuilder<HomeVideo> builder)
            {
                builder.Property(T => T.Src).IsRequired().HasMaxLength(200);
            }
        }
        public class ContactUsFluent : IEntityTypeConfiguration<ContactUs>
        {
            public void Configure(EntityTypeBuilder<ContactUs> builder)
            {
                builder.Property(T => T.Location).IsRequired().HasMaxLength(200);
                builder.Property(T => T.Phone).IsRequired().HasMaxLength(100);
                builder.Property(T => T.Email).IsRequired().HasMaxLength(100);
                builder.Property(T => T.MapX).IsRequired();
                builder.Property(T => T.MapY).IsRequired();
            }
        }
        public class ContactUsListFluent : IEntityTypeConfiguration<ContactUsList>
        {
            public void Configure(EntityTypeBuilder<ContactUsList> builder)
            {
                builder.Property(T => T.Email).IsRequired().HasMaxLength(200);
                builder.Property(T => T.Fullname).IsRequired().HasMaxLength(200);
                builder.Property(T => T.Subject).IsRequired().HasMaxLength(200);
                builder.Property(T => T.Message).IsRequired().HasMaxLength(200);
            }
        }
        public class BlogsFluent : IEntityTypeConfiguration<Blog>
        {
            public void Configure(EntityTypeBuilder<Blog> builder)
            {
                builder.Property(T => T.HeadText).IsRequired().HasMaxLength(200);
                builder.Property(T => T.BodyText).IsRequired().HasMaxLength(2000);
                builder.Property(T => T.BlogPicture).IsRequired().HasMaxLength(100);
            }
        }
    }
}
