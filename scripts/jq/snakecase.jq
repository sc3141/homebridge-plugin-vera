def snakecase(s): gsub("(?<a>[A-Z])(?<b>[A-Z][a-z]+)";.a + "_" + .b;"gx")
| gsub("(?<a>[a-z])(?<b>[A-Z])";.a + "_" + .b;"gx")
| gsub("(?<a>[A-z])(?<b>[0-9])";.a + "_" + .b;"gx")
| ascii_downcase;
