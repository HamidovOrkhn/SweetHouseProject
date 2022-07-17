using SweetHouseProj.Dto;
using SweetHouseProj.Models;
using System.Collections.Generic;

namespace SweetHouseProj.ViewModels
{
    public class ContactListViewModel
    {
        public List<ContactUsList> ContactUsLists { get; set; }
        public PaginationDTO Pagination { get; set; }
    }
}
