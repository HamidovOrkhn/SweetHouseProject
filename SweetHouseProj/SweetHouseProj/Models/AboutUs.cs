using System.Collections.Generic;

namespace SweetHouseProj.Models
{
    public class AboutUs:BaseEntity
    {
        public string MiniText { get; set; }
        public string Header { get; set; }
        public string Body { get; set; }
        public List<AboutUsPicture> AboutUsPictures { get; set; }
    }
}
