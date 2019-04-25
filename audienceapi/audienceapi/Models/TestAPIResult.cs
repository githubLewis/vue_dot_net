using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace audienceapi.Models
{
    public class TestAPIResult
    {
        public bool success { get; set; }
        public Person[] audience { get; set; }
    }
}