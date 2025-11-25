startNumber  = int(input("Enter start number: "))
stopNumber = int(input("Enter stop number: "))


for i in range(startNumber, stopNumber):
    if i % 3 == 0:
        print("fizz")
    elif i % 5 == 0:
        print("buzz")
    elif i % 3 == 0 and i % 5 == 0:
        print("fizzbuzz")
    else:
        print(i)





