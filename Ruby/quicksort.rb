## quicksort implementation 

def quicksort(arr)
  return arr if arr.length <= 1

  pivot = arr.shift()
  left = arr.select {|el| el <= pivot}
  right = arr.select {|el| el > pivot}
  sortedLeft = quicksort(left)
  sortedRight = quicksort(right)

  sortedLeft + [pivot] + sortedRight
end

quicksort([4,3,10,7,2,8,1])