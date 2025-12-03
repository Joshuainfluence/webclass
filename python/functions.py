# def greeting():
#     print("Hello world")

# greeting()

# # functions with parameters and arguments
# def greetMe(x):
#     print(f"Hello {x}")
# greetMe("Leo")

# # functions with parameters, arguments and inputs
# # nameInput = input("Enter Username here: ")
# # ageInput = input("Enter age here: ")
# # def user(name, age):
# #     print(f"Hello your name is {name} na your {age} years old")
# # user(nameInput, ageInput)

# # function to add numbers
# def addMyNumber(x, y):
#     print(x + y)
# # addMyNumber(5, 10)


# # function to add numbers with inputs
# # firstNumber = int(input("Enter your first number: "))
# # secondNumber = int(input("Enter your second number: "))
# # thirdNumber = int(input("Enter your third number: "))


# def addMyNumberInput(x, y, z):
#     print(x + y + z)
# # addMyNumberInput(firstNumber, secondNumber, thirdNumber)


# # function for multitple values

# def addAll(*args):
#     return sum(args)
# print(addAll(1, 2, 3, 5, 56, 76))

# # function with parameters, arguments, conditionals and inputs
# def login(username, password):
#     if username != "leo" or password != "leo54":
#         print("Invalid credentials")
#     else:
#         print("Login successful")

# login("leo", "leo54")




# calculator function
firstNumber = int(input("Enter first number: "))
operator = input(f" {firstNumber} Select an operator \n 1) + \n 2) - \n 3) / \n 4) * \n ")
secondNumber = None

def calculator(firstNumber, secondNumber, operator):
    if operator == "1":
        secondNumber = int(input(f"{firstNumber} + "))
        print(firstNumber + secondNumber)
    elif operator == "2":
        secondNumber = int(input(f"{firstNumber} - "))
        print(firstNumber - secondNumber)
    elif operator == "3": 
        secondNumber = int(input(f"{firstNumber} / "))
        print(firstNumber / secondNumber)
    elif operator == "4": 
        secondNumber = int(input(f"{firstNumber} x "))
        print(firstNumber * secondNumber)
    else:
        print("Invalid operator")

calculator(firstNumber, secondNumber, operator)



