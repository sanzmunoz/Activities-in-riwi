#Contador a 100
import time
for i in range (1,101):
    if i%5==0 and i%3==0:
        print("/"*5,"Fizz*Buzz","/")
    elif i%5==0:
        print("Buzz")
        time.sleep(.2)
    elif i%3==0:
        print("Fizz")
        time.sleep(.2)
    else:
        print(i)
        time.sleep(.2)
