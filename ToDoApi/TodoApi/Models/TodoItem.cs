using System;

public class TodoItem
{
    public long Id { get; set; }
    public string Name { get; set; }
    public DateTime CreationTime { get; set; }
    public DateTime UpdateTime { get; set; }
    public bool IsComplete { get; set; }
    public string Secret { get; set; }
}