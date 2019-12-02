class Contract < ApplicationRecord
    has_and_belongs_to_many :currencies
end
