class Person:
    def __init__(self, name, age, course):
        self.name = name
        self.age = age
        self.course = course

    # methods in OOP
    def greeting(self):
        print(f"Hello my name is {self.name} and i am {self.age} studyin {self.course}")

mySelf = Person("Benedict", 18, "Computer Science")
print(mySelf.name)


