def level_order(root)
 return [] if root.nil?
  result = []
  q = [root]
  while !q.empty?
    result << q.map(&:val)
    next_lv = []
    q.each do |node|
      next_lv << node.left if node.left
      next_lv << node.right if node.right
    end
    q = next_lv
  end
  result 
end