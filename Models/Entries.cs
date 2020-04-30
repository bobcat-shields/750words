using System;
using System.ComponentModel.DataAnnotations;

namespace _750words.Models
{
    public class Entry
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Body { get; set; }
        public string Feeling { get; set; }
        public int WordCount { get; set; }
        public DateTime PostedOn { get; set; }
        public User User { get; set; }
        public Entry()
        {
            PostedOn = DateTime.Now;
        }
    }
}  