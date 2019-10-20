9.times do |i|
  Thing.create(
    name: "Thing to buy #{i + 1}",
    quantity: 5,
    priority: "High"
  )
end