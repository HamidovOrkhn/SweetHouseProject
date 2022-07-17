using System.ComponentModel.DataAnnotations;

namespace SweetHouseProj.Dto
{
    public class AboutUsDto
    {
        [Required(ErrorMessage ="Boş ola bilməz")]
        [MaxLength(200)]
        public string MiniText { get; set; }
        [Required(ErrorMessage = "Boş ola bilməz")]
        [MaxLength(100)]
        public string Header { get; set; }
        [Required(ErrorMessage = "Boş ola bilməz")]
        [MaxLength(1000)]
        public string Body { get; set; }
    }
}
