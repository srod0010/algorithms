def coin_change(coins, amount)
    return coin_change_helper(coins, amount) || -1
end

def coin_change_helper(coins, remaining, memo = {})
    if remaining == 0
        return 0
    elsif remaining < coins.min
        return -1
    elsif !memo[remaining].nil?
        return memo[remaining]
    end
    
    min = nil
    coins.each do |coin|
        res = coin_change_helper(coins, remaining - coin, memo)
        if res != -1 && (min.nil? || (res + 1) < min)
            min = res + 1
        end
    end
    
    memo[remaining] = min || -1
    return memo[remaining]
end

# puts coin_change([2,3,10],14)