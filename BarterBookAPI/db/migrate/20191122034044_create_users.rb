class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :given_name
      t.string :family_name
      t.string :email
      t.string :username

      t.timestamps
    end
  end
end
