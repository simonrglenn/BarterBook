class CreateCurrencies < ActiveRecord::Migration[6.0]
  def change
    create_table :currencies do |t|
      t.string :title
      t.string :text
      t.string :img_url

      t.timestamps
    end
  end
end
