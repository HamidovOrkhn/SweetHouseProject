
using SweetHouseProj.Dto;

namespace SweetHouseProj.Helpers
{
    public class Pagination
    {
        public static PaginationDTO PaginationMethod(int page, int pagecount)
        {
            if (page <= 5 || pagecount <= 9)
            {
                if (pagecount <= 9)
                {
                    return new PaginationDTO() { StartPage = 0, PageCount = pagecount, Page = page, EndPage = pagecount - 1 };
                }
                else
                {
                    return new PaginationDTO() { StartPage = 0, PageCount = pagecount, Page = page, EndPage = 9 };
                }
            }
            else if (page > pagecount - 5)
            {
                return new PaginationDTO() { StartPage = page - 9, PageCount = pagecount, Page = page, EndPage = pagecount - 1 };
            }
            else
            {
                return new PaginationDTO() { StartPage = page - 5, PageCount = pagecount, Page = page, EndPage = page + 4 };
            }
        }
    }
}