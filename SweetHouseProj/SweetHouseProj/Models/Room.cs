using System.Collections.Generic;

namespace SweetHouseProj.Models
{
    public class Room:BaseEntity
    {
        public string Name { get; set; }
        public double Price { get; set; }
        public int BedCount { get; set; }
        public int MaxGuest { get; set; }
        public int RoomSpace { get; set; }
        public string RoomView { get; set; }
        public string RoomDesc { get; set; }
        public string HotelRules { get; set; }
        public List<Amenity> Amenities { get; set; }
        public List<RoomPhoto> RoomPhotos { get; set; }
    }
}
