import pyautogui, time

time.sleep(5)  # Time to switch to the target window
f = open("spam.txt", "r")
for word in f:
    pyautogui.typewrite(word)
    