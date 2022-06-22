namespace SweetHouseProj.Models
{
    public class RoomPhoto:BaseEntity
    {
        public string Src { get; set; }
        public bool IsMain { get; set; }
        public int RoomId { get; set; }
        public Room Room { get; set; }
    }
}
