class Car:
    def __init__(self, brand, year):
        self.brand = brand
        self.year = year

my_car = Car("Toyota", 2020)
print(my_car.brand)   # Toyota
print(my_car.year)    # 2020


class Car:
    def __init__(self, brand):
        self.brand = brand

    def start_engine(self):
        print(f"{self.brand} engine started.")

my_car = Car("Honda")
my_car.start_engine()

