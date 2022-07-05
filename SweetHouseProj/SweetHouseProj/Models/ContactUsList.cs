namespace SweetHouseProj.Models
{
    public class ContactUsList:BaseEntity
    {
        public string Email { get; set; }
        public string Fullname { get; set; }
        public string Subject { get; set; }
        public string Message { get; set; }
    }
}
