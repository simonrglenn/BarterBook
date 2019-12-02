class AddListedToCurrency < ActiveRecord::Migration[6.0]
  def change
    add_column :currencies, :listed, :boolean
  end
end
