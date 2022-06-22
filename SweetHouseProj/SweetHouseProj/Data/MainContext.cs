﻿using Microsoft.EntityFrameworkCore;
using SweetHouseProj.Models;
using System.Reflection;

namespace SweetHouseProj.Data
{
    public class MainContext:DbContext
    {
        public MainContext(DbContextOptions<MainContext> options):base(options)
        {

        }
        public DbSet<Room> Rooms { get; set; }
        public DbSet<AboutUs> AboutUs { get; set; }
        public DbSet<AboutUs> AboutUsPictures { get; set; }
        public DbSet<RoomPhoto> RoomPhotos { get; set; }
        public DbSet<Amenity> Amenities { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());
        }
    }
}
