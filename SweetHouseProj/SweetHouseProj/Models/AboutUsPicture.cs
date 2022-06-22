namespace SweetHouseProj.Models
{
    public class AboutUsPicture:BaseEntity
    {
        public string Src { get; set; }
        public int AboutUsId { get; set; }
        public AboutUs AboutUs { get; set; }
    }
}
