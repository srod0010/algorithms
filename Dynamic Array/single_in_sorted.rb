def single_in_sorted(arr)
     lo = 0
  hi = arr.length - 1
  # stopping condition is when our window has closed
  while lo < hi
    # cutting the array in half
    mid = ((hi - lo) / 2) + lo
    # returning the item if it doesn't have a pair nearby
    return arr[mid] if arr[mid] != arr[mid-1] && arr[mid] != arr[mid+1]
    # if the index is odd and there is a pair below,
    # then the single element is above us
    # if index is even and the pair is above, same;
    # otherwise, the single element is below us
    if (arr[mid] == arr[mid-1] && mid.odd?) ||
      (arr[mid] == arr[mid+1] && mid.even?)
      lo = mid + 1
    else
      hi = mid - 1
    end
  end
  # if we haven't returned yet, then the single
  # element is at the index we closed over
  arr[lo]
end