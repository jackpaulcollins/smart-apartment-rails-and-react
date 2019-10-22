9.times do |i|
  Bill.create(
    name: "Bill #{i + 1}",
    amount: 100,
    due: '11/1/2019',
    owner: 'Jack'
  )
end