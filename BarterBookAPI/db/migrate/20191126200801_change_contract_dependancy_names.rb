class ChangeContractDependancyNames < ActiveRecord::Migration[6.0]
  def change
    rename_column :contracts, :needed_id, :needed_currency_id
    rename_column :contracts, :offered_id, :offered_currency_id
  end
end
