using Microsoft.EntityFrameworkCore;
using SweetHouseProj.Data;
using SweetHouseProj.Models;
using SweetHouseProj.Resources.Abstracts;
using System.Collections.Generic;
using System.Linq;
using Mapster;
using System;

namespace SweetHouseProj.Resources.Concretes
{
    public class BaseService<T>:IBaseService<T> where T: BaseEntity, new()
    {
        private readonly MainContext _db;
        private DbSet<T> entity;
        public BaseService(MainContext db)
        {
            _db = db;
            entity = db.Set<T>();
        }
        public ResponseMessage<List<T>> Get(params string[] includes)
        {
            List<T> data = entity.ToList();
            if (includes is not null)
            {
                data = includes.Aggregate(data.AsQueryable(),
                          (current, include) => current.Include(include)).ToList();
            }
            return ResponseMessage<List<T>>.Success(data);
        }
        public ResponseMessage<T> GetById(int id)
        {
            T data = entity.Find(id);
            return ResponseMessage<T>.Success(data);
        }
        public ResponseMessage<T> GetLastOrDefault()
        {
            T data = entity.OrderByDescending(a=>a.Id).FirstOrDefault();
            return ResponseMessage<T>.Success(data);
        }
        public ResponseMessage<T> GetFirstOrDefault()
        {
            T data = entity.OrderByDescending(a => a.Id).LastOrDefault();
            return ResponseMessage<T>.Success(data);
        }
        public ResponseMessagePaginated<List<T>> GetPaginated(int page, params string[] includes)
        {
            List<T> data = new();
            if (includes is not null)
            {
                foreach (var item in includes)
                {
                    data = entity.Include(item).ToList();
                }
            }
            float pagecount = data.Count;
            int count = (int)Math.Ceiling(pagecount / 10);
            data = data.Skip(page * 10).Take(10).ToList();
            return ResponseMessagePaginated<List<T>>.Success(count,data);
        }
        public ResponseMessage<List<TResult>> GetFormated<TResult>()
        {
            List<TResult> data = entity.Select(a=>a.Adapt<TResult>()).ToList();
            return ResponseMessage<List<TResult>>.Success(data);
        }
        public ResponseMessage<List<TResult>> GetFormatedPaginated<TResult>(int page)
        {
            List<T> data = entity.ToList();
            float pagecount = data.Count;
            int count = (int)Math.Ceiling(pagecount / 10);
            data = data.Skip(page * 10).Take(10).ToList();
            List<TResult> dataFormated = data.Select(a => a.Adapt<TResult>()).ToList();
            return ResponseMessage<List<TResult>>.Success(dataFormated);
        }
        public ResponseMessage<string> Add(T data)
        {
            entity.Add(data);
            _db.SaveChanges();
            return ResponseMessage<string>.Success("Əlavə olundu");
        }
        public ResponseMessage<string> AddFormated<TResult>(TResult data)
        {
            T dataFormated = data.Adapt<T>();   
            entity.Add(dataFormated);
            _db.SaveChanges();
            return ResponseMessage<string>.Success("Əlavə olundu");
        }
        public ResponseMessage<string> Remove(int id)
        {
            T data = entity.Find(id);
            entity.Remove(data);
            _db.SaveChanges();
            return ResponseMessage<string>.Success("Silindi");
        }
        public ResponseMessage<string> Update(int id, T newData)
        {
            T data = entity.Find(id);
            newData.Id = id;
            _db.Entry(data).CurrentValues.SetValues(newData);
            _db.SaveChanges();
            return ResponseMessage<string>.Success("Dəyişildi");
        }
        public ResponseMessage<string> UpdateFormated<TResult>(int id, TResult newData)
        {
            T data = entity.Find(id);
            T newEnt = newData.Adapt<T>();
            newEnt.Id = id;
            _db.Entry(data).CurrentValues.SetValues(newEnt);
            _db.SaveChanges();
            return ResponseMessage<string>.Success("Dəyişildi");
        }

       
    }
}
