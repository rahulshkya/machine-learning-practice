a=[10,50,80,20,5]
max=a[0]
for i in range(0,len(a)):
     if a[i] >= max:
          max=a[i]

print(f"maximum number is {max}")