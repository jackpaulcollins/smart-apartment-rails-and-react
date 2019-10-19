class Thing < ApplicationRecord
  validates :name, prescence: true
  validates :quantity, prescence: true
  validates :priority, prescence: true
end
