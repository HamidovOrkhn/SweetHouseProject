using SweetHouseProj.Models;
using System.Collections.Generic;

namespace SweetHouseProj.Resources.Abstracts
{
    public interface IBaseService<T> where T : class, new()
    {
        public ResponseMessage<List<T>> Get(params string[] includes);
        public ResponseMessage<T> GetById(int id);
        public ResponseMessage<T> GetFirstOrDefault();
        public ResponseMessage<T> GetLastOrDefault();
        public ResponseMessagePaginated<List<T>> GetPaginated(int page, params string[] includes);
        public ResponseMessage<List<TResult>> GetFormated<TResult>();
        public ResponseMessage<List<TResult>> GetFormatedPaginated<TResult>(int page);
        public ResponseMessage<string> Add(T data);
        public ResponseMessage<string> AddFormated<TResult>(TResult data);
        public ResponseMessage<string> Remove(int id);
        public ResponseMessage<string> Update(int id, T newData);
        public ResponseMessage<string> UpdateFormated<TResult>(int id, TResult newData);
    }
}
