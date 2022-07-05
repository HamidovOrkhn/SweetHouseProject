namespace SweetHouseProj.Models
{
    public class ContactUs:BaseEntity
    {
        public string Phone { get; set; }
        public string Email { get; set; }
        public string Location { get; set; }
        public double MapX { get; set; }
        public double MapY { get; set; }
    }
}
