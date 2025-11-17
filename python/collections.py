# list - ordered mutable
animals = ["dog", "rabbit", "goat"]
animals.append("tiger")
print(animals)

# print(animals[1])
print(len(animals))


# tuple - immutable
numbers = (2, 4, 6)
print(type(numbers))

# sets 
z = {7,1, 2, 3, 4, 5, 3, 9, 4}
print(z)

# dictionary (key-value)
students = {
    "sophia": 60,
    "micheal": 90,
    
}


grades = {
    1: ["christabel", 19, "Computer Science"],
    2: ["Johnson", 23, "Engineering"],
    3: "mike"
}

print(students["micheal"])
print(grades[2])

exam_scores = [2, 3, 76, 8]
sum_exam = sum(exam_scores)
count = len(exam_scores)
exam_range = sum_exam//count
print(exam_range)
# print(sum(exam_scores))



