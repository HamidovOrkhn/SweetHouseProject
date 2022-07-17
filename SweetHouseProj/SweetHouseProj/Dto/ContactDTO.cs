

using SweetHouseProj.Models;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace SweetHouseProj.Dto
{
    public class ContactDTO
    {
        [Required(ErrorMessage = "Boş ola bilməz")]
        [MaxLength(100)]
        public string Phone { get; set; }
        [Required(ErrorMessage = "Boş ola bilməz")]
        [MaxLength(100)]
        public string Email { get; set; }
        [Required(ErrorMessage = "Boş ola bilməz")]
        [MaxLength(200)]
        public string Location { get; set; }
        [Required(ErrorMessage = "Boş ola bilməz")]
        public double MapX { get; set; }
        [Required(ErrorMessage = "Boş ola bilməz")]
        public double MapY { get; set; }
    }
}
