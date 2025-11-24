startNumber  = int(input("Enter start number: "))
stopNumber = int(input("Enter stop number: "))

for i in range(startNumber, stopNumber):
    if(i == stopNumber//2):
        print(f"{i} You are halfway there!")
    else:
        print(i)

        



