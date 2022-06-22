namespace SweetHouseProj.Models
{
    public class ResponseMessagePaginated<T> : ResponseMessage<T>
    {
        public int Page { get; set; }
        public static new ResponseMessagePaginated<T> Fail(int code = 500, string message = "Xəta baş verdi.", T errors = default)
        {
            return new ResponseMessagePaginated<T> { Code = code, Errors = errors, Message = message };
        }
        public static ResponseMessagePaginated<T> Success(int Page, T data = default)
        {
            return new ResponseMessagePaginated<T> { Code = 200, Data = data, Page = Page, Errors = default, Message = "Əməliyyat uğurla başa çatdı." };
        }
    }
}
