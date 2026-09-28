var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();

var app = builder.Build();

app.UseHttpsRedirection();
app.UseStaticFiles();

app.MapGet("/getSquares", () =>
{
    return new[]
   {
        new
        {
            text = "Text 1",
            backColor = "blue",
            foreColor = "white",
            index = 0,
        },
        new
        {
            text = "Text 2",
            backColor = "red",
            foreColor = "white",
            index = 3,
        },
        new
        {
            text = "Text 3",
            backColor = "green",
            foreColor = "white",
            index = 10,
        }
    };
});

app.Run();

