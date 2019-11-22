class CreateContracts < ActiveRecord::Migration[6.0]
  def change
    create_table :contracts do |t|
      t.integer :needed_id
      t.integer :offered_id
      t.boolean :pending?

      t.timestamps
    end
  end
end
