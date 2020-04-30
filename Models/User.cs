using System;
using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;

namespace _750words.Models
{
    public class User
    {
        public int Id { get; set; }
        public string UserName { get; set; } 
        public List<Entry> Entries { get; set; }
    }
}
