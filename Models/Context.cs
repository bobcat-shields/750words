using Microsoft.EntityFrameworkCore;
using _750words.Models;

namespace _750words.Models
{
    public class _750WordsContext : DbContext
    {
        public _750WordsContext(DbContextOptions<_750WordsContext> options)
            : base(options)
        {
        }

        public DbSet<User> Users { get; set; }
        public DbSet<Entry> Entries { get; set; }
    }
}