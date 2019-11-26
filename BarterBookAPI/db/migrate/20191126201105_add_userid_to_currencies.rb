class AddUseridToCurrencies < ActiveRecord::Migration[6.0]
  def change
    add_column :currencies, :user_id, :integer
  end
end
