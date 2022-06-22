using System.ComponentModel.DataAnnotations;

namespace SweetHouseProj.Dto
{
    public class AboutUsDto
    {
        [Required]
        [MaxLength(200)]
        public string MiniText { get; set; }
        [Required]
        [MaxLength(100)]
        public string Header { get; set; }
        [Required]
        [MaxLength(1000)]
        public string Body { get; set; }
    }
}
