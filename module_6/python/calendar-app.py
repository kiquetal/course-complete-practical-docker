import calendar

# Read 2 input and display calendar

# Read month and year
month = int(input("Enter month (1-12): "))
year = int(input("Enter year: "))
# Display calendar
print(calendar.month(year, month))
