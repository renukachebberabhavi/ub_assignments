class BlogMissingcontent < ActiveRecord::Migration[7.0]
  def change
    add_column :blogs, :content, :string
    add_column :blogs, :imagelink, :string
  end
end
