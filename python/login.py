# username = "leo"
# password = "leoa892981"

users = {
    "username": "leo",
    "password": "leotop"
}

username_input = input("Enter your username: ")
password_input = input("Enter your password: ")

if username_input != "" or password_input != "":
    if username_input == users["username"] and password_input == users["password"]:
        print("Login successful")
    else:
        print("Invalid login credentials")
else:
    print("Fields cannot be empty")