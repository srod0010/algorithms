class Fibonacci
  def initialize
    @cache = { 1 => 1, 2 => 1 }
  end

  def fibonacci(n)
    # return 1 if n == 1 || n == 2
    # Check our cache instead of the original base case
    return @cache[n] unless @cache[n].nil?

    # Record our answer in our cache before returning it
    ans = fibonacci(n - 1) + fibonacci(n - 2)
    @cache[n] = ans
    return ans
  end
end

# test = Fibonacci.new
# puts test.fibonacci(5);