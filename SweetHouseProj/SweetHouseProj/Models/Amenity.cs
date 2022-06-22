namespace SweetHouseProj.Models
{
    public class Amenity:BaseEntity
    {
        public string Icon { get; set; }
        public string Name { get; set; }
        public int RoomId { get; set; }
        public Room Room { get; set; }
    }
}
