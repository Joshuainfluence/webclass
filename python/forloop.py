startNumber  = int(input("Enter start number: "))
stopNumber = int(input("Enter stop number: "))

for i in range(startNumber, stopNumber):
    if i % 2 == 0:
        print(f"{i} is an even number")
    else: 
        print(f"{i} is an odd number")





