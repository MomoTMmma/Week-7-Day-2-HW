

def double_integer(i):
    return i * 2

def find_multiples(integer, limit):
    a_list = []
    for i in range(integer, limit+1, integer):
        a_list.append(i)
    return a_list