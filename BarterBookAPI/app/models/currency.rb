class Currency < ApplicationRecord
    belongs_to :users
    has_many :contracts
end
